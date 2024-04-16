import re


def clean_text(text):
    """
    Cleans unnecessary whitespace from the provided text.

    Args:
        text (str): The text to be cleaned.

    Returns:
        str: The cleaned text with unnecessary whitespace removed.
    """
    # Remove extra whitespace (multiple spaces, newlines)
    # Replace multiple spaces with single space
    text = re.sub(r"\s\s+", " ", text)
    # Keep double newlines for paragraph separation
    text = re.sub(r"\n\n+", "\n\n", text)

    return text.strip()  # Remove leading/trailing whitespace


def main():
    """
    Reads text from 'extracted_text.txt', cleans it, and saves it to 'extracted_text_cleaned.txt'.
    """
    cleaned_text = ""
    with open("extracted_text.txt", "r") as input_file, open("extracted_text_cleaned.txt", "w") as output_file:
        for line in input_file:
            cleaned_text += line

        # Clean the entire extracted text
        cleaned_text = clean_text(cleaned_text)

        # Write the cleaned text to the new file within the 'with' block
        output_file.write(cleaned_text)

    print("Text cleaning complete! Check 'extracted_text_cleaned.txt' for the results.")


if __name__ == "__main__":
    main()
