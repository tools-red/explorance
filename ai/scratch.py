import numpy as np
from sklearn.metrics.pairwise import cosine_similarity
import os
from openai import OpenAI

os.environ["OPENAI_API_KEY"] = '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'

client = OpenAI(api_key=os.environ["OPENAI_API_KEY"])


def read_and_chunk_text(file_path, chunk_size=500):
    """
    Reads a text file and splits it into chunks of approximately `chunk_size` words.
    """
    with open(file_path, 'r', encoding='utf-8') as file:
        text = file.read()
    words = text.split()
    chunks = [' '.join(words[i:i+chunk_size])
              for i in range(0, len(words), chunk_size)]
    return chunks


def create_embeddings(chunks):
    """
    Creates embeddings for each chunk of text.
    """
    embeddings = []
    for chunk in chunks:
        response = client.embeddings.create(
            input=chunk, model="text-embedding-3-large")
        embeddings.append(response.data[0].embedding)
    return embeddings


def find_most_relevant_chunk(question, embeddings, chunks):
    """
    Finds the chunk most relevant to the question based on cosine similarity.
    """
    question_embedding = client.embeddings.create(
        input=[question], model="text-embedding-3-large").data[0].embedding
    similarities = cosine_similarity([question_embedding], embeddings)
    most_relevant_idx = np.argmax(similarities)
    return chunks[most_relevant_idx]


def answer_question(question, relevant_chunk):
    """
    Generates an answer to the question based on the relevant chunk of text.
    """
    response = client.chat.completions.create(model="gpt-3.5-turbo-0125",
                                              # prompt=f"Answer the following question based on the text: {question}\n\nText: {relevant_chunk}\n\nAnswer:",
                                              messages=[
                                                  {
                                                      "role": "system",
                                                      "content": f"Answer questions about Shiv Nadar Institute of Eminence in Greater Noida based on this text: {relevant_chunk}\n\n",
                                                  },
                                                  {
                                                      "role": "user",
                                                      "content": f"{question}",
                                                  }
                                              ],
                                              temperature=0.5,
                                              max_tokens=100,
                                              stop=["\n"])
    return response.choices[0].text.strip()


# Example usage
file_path = "docs/handbook_manual_text.txt"
chunks = read_and_chunk_text(file_path)
embeddings = create_embeddings(chunks)

# Example question
question = "What are the dining options on campus?"

# Find the most relevant chunk and answer the question
relevant_chunk = find_most_relevant_chunk(question, embeddings, chunks)
answer = answer_question(question, relevant_chunk)

print("Answer:", answer)
