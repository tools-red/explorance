import requests
from bs4 import BeautifulSoup
import urllib.parse
import time


def extract_text(url):
    """Extracts text content from a given URL, excluding images and PDFs.

    Args:
        url (str): The URL of the webpage.

    Returns:
        str: The extracted text content from the webpage.
    """

    try:
        response = requests.get(url)
        response.raise_for_status()  # Raise an exception for non-2xx status codes
    except requests.exceptions.RequestException as e:
        print(f"Error fetching URL: {url} - {e}")
        return ""

    soup = BeautifulSoup(response.content, 'html.parser')

    # Exclude scripts, styles, and images
    for tag in soup.find_all(['script', 'style', 'img']):
        tag.decompose()

    # Extract text from remaining elements
    text = soup.get_text(separator='\n')

    return text.strip()  # Remove leading/trailing whitespace


def process_website_tree(website_tree, output_file):
    """Processes the website tree structure, extracting text and saving to a file with progress updates.

    Args:
        website_tree (list): The website structure tree.
        output_file (file object): The file object to write the extracted text to.
    """

    for i, node in enumerate(website_tree):
        url = node['url']
        # Ignore images and PDFs
        if not (url.endswith('.pdf') or url.endswith('.jpg') or url.endswith('.png')):
            extracted_text = extract_text(url)
            if extracted_text:
                output_file.write(f"URL: {url}\n\n{extracted_text}\n\n")

            print(f"Progress: {i+1}/{len(website_tree)} - Scraping: {url}")
            time.sleep(1)  # Optional delay between requests (adjust as needed)


if __name__ == '__main__':
    with open("website_tree.txt", "r") as tree_file, open("extracted_text.txt", "w") as output_file:
        website_tree = []
        for line in tree_file:
            # Parse URLs from tree file
            website_tree.append({'url': line.strip()})

        process_website_tree(website_tree, output_file)

    print("Text extraction complete! Check 'extracted_text.txt' for results.")
