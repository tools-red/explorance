import os
from flask import Flask, request, jsonify
import requests
from openai import OpenAI
from pathlib import Path
import base64

os.environ["OPENAI_API_KEY"] = "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"
os.environ["PERPLEXITY_API_KEY"] = "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"

app = Flask(__name__)

# Load the student handbook text file
with open('docs/handbook_manual_text.txt', 'r') as file:
    handbook_text = file.read()

# Initialize OpenAI client for text-to-speech
openai_client = OpenAI(api_key=os.environ["OPENAI_API_KEY"])

@app.route('/ask-handbook', methods=['POST'])
def ask_question():
    # Get the question from the request
    question = request.json['query']

    # Call the Perplexity API to get the answer
    perplexity_url = 'https://api.perplexity.ai/chat/completions'
    perplexity_headers = {
        'Content-Type': 'application/json',
        'Authorization': f'Bearer {os.environ["PERPLEXITY_API_KEY"]}'
    }
    perplexity_data = {
        'model': 'sonar-medium-online',
        'prompt': f'Context:\n{handbook_text}\n\nQuestion: {question}\nAnswer:',
        'max_tokens': 200
    }
    perplexity_response = requests.post(perplexity_url, headers=perplexity_headers, json=perplexity_data)
    print("pplx resp:", perplexity_response)
    # perplexity_answer = perplexity_response.json()['choices'][0]['text'].strip()

    # # Check if the user requested a more detailed answer
    # if 'detailed' in question.lower() or 'elaborate' in question.lower():
    #     perplexity_data['max_tokens'] = 400
    #     perplexity_response = requests.post(perplexity_url, headers=perplexity_headers, json=perplexity_data)
    #     perplexity_answer = perplexity_response.json()['choices'][0]['text'].strip()

    # # Generate audio of the answer using OpenAI's text-to-speech
    # speech_file_path = Path('answer_audio.mp3')
    # openai_response = openai_client.audio.speech.create(
    #     model='tts-1',
    #     voice='alloy',
    #     input=perplexity_answer
    # )
    # openai_response.stream_to_file(speech_file_path)

    # # Read the audio file and encode it as base64
    # with open(speech_file_path, 'rb') as audio_file:
    #     audio_data = audio_file.read()
    #     base64_audio = base64.b64encode(audio_data).decode('utf-8')

    # Return the answer and audio as JSON
    # response_data = {
    #     'message': perplexity_answer,
    #     'audio': base64_audio
    # }
    # return jsonify(response_data)
    return jsonify({"ok": "cool"})

if __name__ == '__main__':
    app.run()

