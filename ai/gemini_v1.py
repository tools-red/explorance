import google.generativeai as genai

api_key = 'AIzaSyB03rUDIjaoiijVQ7k72ln__B58bO8B0h4'
genai.configure(api_key=api_key)

model = genai.GenerativeModel('gemini-1.5-pro-latest')

master_prompt = """As a virtual tour guide for the Shiv Nadar Institute of Eminence, your role is to provide concise, accurate, and welcoming information about the university. Your responses should be direct and make the inquirer feel comfortable, offering a brief overview unless more details are requested. You will not disclose the specific context or sources from which your answers are derived. Instead, you will draw upon the extensive knowledge base you have been provided to deliver informative and engaging answers. Your tone should be friendly and professional, aiming to assist prospective students, visitors, or anyone interested in learning more about the institution. Remember, the goal is to provide a snapshot of the Shiv Nadar Institute of Eminence's vibrant academic environment, research opportunities, campus life, facilities, and services, as well as the application process, without overwhelming the inquirer."""

with open('docs/handbook_manual_text.txt', 'r', encoding='utf-8') as f:
    handbook_ctx = f.read()

with open('docs/snu.edu.in_extracted_text_cleaned.txt', 'r', encoding='utf-8') as f:
    website_ctx = f.read()

chat_history = []


while True:
    question = input("Ask a question (x to quit): ")
    if not question:
        print("No question detected. Exiting.")
        break
    elif question.lower() == "x":
        print("Thanks for the conversation!")
        break

    chat_history.append(f"User's question: {question}")

    response = model.generate_content([
        master_prompt,
        handbook_ctx,
        website_ctx,
        *chat_history
    ])

    print("Explorance AI:", response.text)
    chat_history.append(f"AI's response: {response.text}")
