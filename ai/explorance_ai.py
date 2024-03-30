import os
import base64

from openai import OpenAI
from langchain.document_loaders import PyMuPDFLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain.vectorstores import Chroma
from langchain.embeddings import OpenAIEmbeddings
from langchain.chat_models import ChatOpenAI
from langchain.chains import RetrievalQA

from flask import Flask, request, jsonify
from flask_cors import CORS

os.environ["OPENAI_API_KEY"] = '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'

persist_directory = "./storage"
pdf_path = "./docs/student_handbook_2023.pdf"

loader = PyMuPDFLoader(pdf_path)
documents = loader.load()

text_splitter = RecursiveCharacterTextSplitter(
    chunk_size=512, chunk_overlap=10)
texts = text_splitter.split_documents(documents)

embeddings = OpenAIEmbeddings()
vectordb = Chroma.from_documents(documents=texts,
                                 embedding=embeddings,
                                 persist_directory=persist_directory)
vectordb.persist()

retriever = vectordb.as_retriever(search_kwargs={"k": 3})
llm = ChatOpenAI(model_name='gpt-3.5-turbo')

qa = RetrievalQA.from_chain_type(
    llm=llm, chain_type="stuff", retriever=retriever)

app = Flask(__name__)
CORS(app)

@app.route('/ask-handbook', methods=['POST'])
def query_handler():
    user_input = request.json.get('query')

    query = f"###Prompt {user_input}"
    try:
        llm_response = qa(query)
        response_text = llm_response["result"]

        # Initialize OpenAI client
        client = OpenAI(api_key=os.environ["OPENAI_API_KEY"])

        # Generate audio file using OpenAI TTS API
        response = client.audio.speech.create(
            model="tts-1",
            voice="alloy",
            input=response_text
        )

        # Save the audio file to a temporary file
        speech_file_path = "speech.mp3"
        response.stream_to_file(speech_file_path)

        # Encode the audio file to base64
        with open(speech_file_path, "rb") as audio_file:
            encoded_string = base64.b64encode(
                audio_file.read()).decode('utf-8')

        # Optionally, delete the temporary file
        os.remove(speech_file_path)

        return jsonify({"message": response_text, "audio": encoded_string, "status": "success"}), 200
    except Exception as err:
        return jsonify({"message": str(err), "status": "error"}), 500


if __name__ == '__main__':
    app.run(debug=True)
