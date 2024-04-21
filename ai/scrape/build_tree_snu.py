import requests
from bs4 import BeautifulSoup
import urllib.parse
import time


def build_website_tree(url, base_url, visited_urls, website_tree, indent=0, max_depth=5):
    """Builds a website structure tree (sitemap) by following internal links.

    Args:
        url (str): The URL of the current page.
        base_url (str): The base URL of the website.
        visited_urls (set): A set of visited URLs to avoid infinite loops.
        website_tree (list): A list representing the website structure tree.
        indent (int, optional): The indentation level for tree structure (default: 0).
        max_depth (int, optional): The maximum depth of recursion (default: 5).
    """

    if url in visited_urls:
        return

    visited_urls.add(url)

    try:
        # Set timeout to 30 seconds per request
        response = requests.get(url, timeout=30)
        response.raise_for_status()  # Raise an exception for non-2xx status codes
    except requests.exceptions.RequestException as e:
        if e.args[0] == 'Client Error 404:':  # Check for specific 404 error
            print(f"URL not found: {url}")
            return
        else:
            print(f"Error fetching URL: {url} - {e}")
            return

    soup = BeautifulSoup(response.content, 'html.parser')

    # Create a node for the current page in the tree with an empty children list
    current_page = {'url': url, 'children': []}

    # Find and process internal links
    for link in soup.find_all('a', href=True):
        href = link['href']

        # Check if link is internal (same domain)
        if urllib.parse.urlparse(href).netloc == urllib.parse.urlparse(base_url).netloc:
            # Construct absolute URL
            absolute_url = urllib.parse.urljoin(base_url, href)

            # Limit recursion depth (optional)
            if indent < max_depth:
                build_website_tree(
                    absolute_url, base_url, visited_urls, current_page['children'], indent + 1)

    website_tree.append(current_page)


def print_website_tree(website_tree, indent=0, file=None):
    """Prints the website structure tree in a clear, indented format to the console or a file.

    Args:
        website_tree (list): The website structure tree.
        indent (int, optional): The indentation level (default: 0).
        file (file object, optional): The file object to write the output to (default: None for console).
    """

    for node in website_tree:
        if file:
            file.write(" " * indent + node['url'] + "\n")
        else:
            print(" " * indent + node['url'])
        print_website_tree(node['children'], indent + 2, file)


if __name__ == '__main__':
    base_url = "https://snu.edu.in/home/"  # Set the base URL
    visited_urls = set()
    website_tree = []

    start_time = time.time()  # Record start time
    while True:
        build_website_tree(base_url, base_url, visited_urls, website_tree)
        elapsed_time = time.time() - start_time

        # Check if 20 minutes have passed (1200 seconds)
        if elapsed_time > 1200:
            print(
                "Timeout reached (20 minutes). Saving current tree structure to website_tree.txt")
            with open("website_tree.txt", "w") as f:
                print_website_tree(website_tree, file=f)
            break

        time.sleep(1)  # Sleep for 1 second before next iteration

    # You can optionally add further processing or analysis of the website_tree here
