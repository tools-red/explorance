import os
from openai import OpenAI

os.environ["PERPLEXITY_API_KEY"] = "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"

with open("docs/handbook_manual_text.txt") as f:
    handbook_content = f.read()

paragraphs = handbook_content.split('\n')

messages = []
current_message_content = []
current_message_tokens = 0

for paragraph in paragraphs:
    new_tokens = len(paragraph.split())
    if current_message_tokens + new_tokens > 16384:
        messages.append({
            "role": "system",
            "content": current_message_content
        })
        current_message_content = []
        current_message_tokens = 0
    current_message_content.append({"type": "text", "text": paragraph})
    current_message_tokens += new_tokens

if current_message_content:
    messages.append({
        "role": "system",
        "content": current_message_content
    })

messages.append({
    "role": "user",
    "content": [
        {
            "type": "text",
            "text": "Who is Shikhar Malhotra?"
        }
    ]
})

client = OpenAI(api_key=os.environ["PERPLEXITY_API_KEY"], base_url="https://api.perplexity.ai")

response = client.chat.completions.create(
    model="mistral-7b-instruct",
    messages=messages,
)

print(response)

