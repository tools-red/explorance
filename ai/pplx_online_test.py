import json
import requests

PERPLEXITY_API_KEY = "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"

# master_prompt = """As a virtual tour guide for the Shiv Nadar Institute of Eminence, your role is to provide concise, accurate, and welcoming information about the university. You should answer my questions in a friendly and professional manner, offering a brief overview unless more details are requested. The goal is to provide a snapshot of the Shiv Nadar Institute of Eminence's vibrant academic environment, research opportunities, campus life, facilities, and services, as well as the application process, without overwhelming me. Here is my question:"""
master_prompt = """Answer this question solely in the context of Shiv Nadar Institute of Eminence, Greater Noida, India

Question:"""


def send_message(message):
    url = "https://api.perplexity.ai/chat/completions"
    headers = {
        "Authorization": f"Bearer {PERPLEXITY_API_KEY}",
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
    data = json.dumps({
        "model": "sonar-medium-online",
        "messages": [
            # Combine prompt and question
            {"role": "user", "content": f"{master_prompt} {message}"}
        ]
    })
    response = requests.post(url, headers=headers, data=data)

    try:
        response_json = response.json()
        # Optional: Print entire response
        # print(f"Full Perplexity API Response:\n {response_json}")
        return response_json
    except json.JSONDecodeError as e:
        print(f"Error decoding JSON response: {e}")
        return None


def main():
    print("Welcome to Shiv Nadar Institute of Eminence Virtual Tour (AI-powered)!")

    while True:
        you = input("You: ")
        response = send_message(you)

        if response:
            try:
                # Access response using 'choices' key (if it exists)
                print(
                    f"Shiv Nadar Institute of Eminence: {response['choices'][0]['message']['content']}")
            except KeyError:
                print(
                    f"KeyError: 'choices' not found in response. Full response printed above.")
        else:
            print("Error: Could not receive response from Perplexity API.")


if __name__ == "__main__":
    main()
