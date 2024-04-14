import os
import base64
from openai import OpenAI
from flask import Flask, request, jsonify
from flask_cors import CORS
from langchain.document_loaders import TextLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain.embeddings import OpenAIEmbeddings
from langchain.vectorstores import Chroma

os.environ["OPENAI_API_KEY"] = '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'
os.environ["PERPLEXITY_API_KEY"] = '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'

app = Flask(__name__)
CORS(app)

text_path = "./docs/handbook_manual_text.txt"
loader = TextLoader(text_path)
documents = loader.load()

text_splitter = RecursiveCharacterTextSplitter(chunk_size=512, chunk_overlap=10)
texts = text_splitter.split_documents(documents)

embeddings = OpenAIEmbeddings(api_key=os.environ["OPENAI_API_KEY"])
persist_directory = "./storage"
vectordb = Chroma.from_documents(documents=texts, embedding=embeddings, persist_directory=persist_directory)
vectordb.persist()

retriever = vectordb

def query_perplexity(query):
    client = OpenAI(api_key=os.environ["PERPLEXITY_API_KEY"], base_url="https://api.perplexity.ai")
    response = client.completions.create(
        model="pplx-70b-online",
        prompt=query,
        temperature=0.7,
        max_tokens=512,
        n=1,
        stop=None,
    )
    return response.choices[0].text

@app.route('/ask-handbook', methods=['POST'])
def query_handler():
    user_input = request.json.get('query')
    query = f"###Prompt {user_input}"
    try:
        query_embedding = embeddings.embed([user_input])[0]
        retrieved_documents, _ = retriever.search(query_embedding, k=3)
        context = " ".join([doc['text'] for doc in retrieved_documents])

        combined_query = f"{context}\n\n{query}"

        response_text = query_perplexity(combined_query)

        client = OpenAI(api_key=os.environ["OPENAI_API_KEY"])
        response = client.audio.speech.create(
            model="tts-1",
            voice="alloy",
            input=response_text
        )

        speech_file_path = "speech.mp3"
        response.stream_to_file(speech_file_path)

        with open(speech_file_path, "rb") as audio_file:
            encoded_string = base64.b64encode(audio_file.read()).decode('utf-8')

        os.remove(speech_file_path)

        return jsonify({"message": response_text, "audio": encoded_string, "status": "success"}), 200
    except Exception as err:
        return jsonify({"message": str(err), "status": "error"}), 500

if __name__ == '__main__':
    app.run(debug=True)

