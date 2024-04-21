import os
import base64

import google.generativeai as genai
from openai import OpenAI

from flask import Flask, request, jsonify
from flask_cors import CORS

GEMINI_API_KEY = 'AIzaSyB03rUDIjaoiijVQ7k72ln__B58bO8B0h4'
OPENAI_API_KEY = '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'

master_prompt = """As a virtual tour guide for the Shiv Nadar Institute of Eminence, your role is to provide concise, accurate, and welcoming information about the university. Your responses should be direct and make the inquirer feel comfortable, offering a brief overview unless more details are requested. You will not disclose the specific context or sources from which your answers are derived. Instead, you will draw upon the extensive knowledge base you have been provided to deliver informative and engaging answers. Your tone should be friendly and professional, aiming to assist prospective students, visitors, or anyone interested in learning more about the institution. Remember, the goal is to provide a snapshot of the Shiv Nadar Institute of Eminence's vibrant academic environment, research opportunities, campus life, facilities, and services, as well as the application process, without overwhelming the inquirer."""

handbook_path = "docs/handbook_manual_text.txt"
website_path = "docs/snu.edu.in_extracted_text_cleaned.txt"

app = Flask(__name__)
CORS(app)

genai.configure(api_key=GEMINI_API_KEY)
model = genai.GenerativeModel('gemini-1.5-pro-latest')


@app.route('/ask-handbook', methods=['POST'])
def query_handler():
    user_input = request.json.get('query')

    if not user_input:
        return jsonify({"message": "No question provided", "status": "error"}), 400

    # Load context text files (optional, modify paths if needed)
    try:
        with open(handbook_path, 'r', encoding='utf-8') as f:
            handbook_ctx = f.read()
        with open(website_path, 'r', encoding='utf-8') as f:
            website_ctx = f.read()
    except FileNotFoundError:
        return jsonify({"message": "Context text files not found", "status": "error"}), 400

    # Use chat history from request body (if provided)
    chat_history = []
    if request.json.get('chatHistory'):
        chat_history = request.json.get('chatHistory')

    # Update chat history
    chat_history.append(f"User's question: {user_input}")

    # Generate response from Gemini
    response = model.generate_content([
        master_prompt,
        handbook_ctx,
        website_ctx,
        *chat_history
    ])

    response_text = response.text
    chat_history.append(f"AI's response: {response_text}")

    # Initialize OpenAI client for TTS (assuming you have it set up)
    client = OpenAI(api_key=OPENAI_API_KEY)

    try:
        # Generate audio using TTS API
        response = client.audio.speech.create(
            model="tts-1",
            voice="alloy",
            input=response_text
        )

        # Save audio to temporary file (optional)
        speech_file_path = "speech.mp3"
        response.stream_to_file(speech_file_path)

        # Encode audio to base64
        with open(speech_file_path, "rb") as audio_file:
            encoded_string = base64.b64encode(
                audio_file.read()).decode('utf-8')

        # Optionally, delete temporary file
        os.remove(speech_file_path)

        # Return JSON response with text, audio (if generated), and status
        return jsonify({"message": response_text, "audio": encoded_string, "status": "success"}), 200
    except Exception as err:
        return jsonify({"message": str(err), "status": "error"}), 500


if __name__ == '__main__':
    app.run(debug=True)
