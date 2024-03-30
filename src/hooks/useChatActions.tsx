import axios from "axios";

const useChatActions = () => {
  // const LLMMut = api.openAI.LLMResponse.useMutation();

  const handleChatInput = (
    setChatInput: (chatInput: string) => void,
    chatInput: string
  ) => {
    setChatInput(chatInput);
  };

  const executeChatPrompt = async (
    event: React.KeyboardEvent<HTMLInputElement>,
    prompt: string
  ) => {
    if (event.key === "Enter") {
      // secure later
      const response = await axios.post<{
        audio: string;
        message: string;
        status: string;
      }>("http://127.0.0.1:5000/ask-handbook", {
        query: prompt,
      });
      console.log(response.data.message);
    }
  };

  return { handleChatInput, executeChatPrompt };
};

export default useChatActions;
