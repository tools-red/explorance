import axios from "axios";
import { useResponseWindowAtom } from "~/lib/atom";

const useChatActions = () => {
  // const LLMMut = api.openAI.LLMResponse.useMutation();
  const [, setResponseWindowAtom] = useResponseWindowAtom();

  const handleChatInput = (
    setChatInput: (chatInput: string) => void,
    chatInput: string
  ) => {
    setChatInput(chatInput);
  };

  const executeChatPrompt = async (
    event: React.KeyboardEvent<HTMLInputElement>,
    prompt: string,
    setIsGeneratingResponse: (state: boolean) => void
  ) => {
    if (event.key === "Enter") {
      setIsGeneratingResponse(true);
      // secure later
      const response = await axios.post<{
        audio: string;
        message: string;
        status: string;
      }>("http://13.201.60.85/snu-explorance-ai/textonly", {
        query: prompt,
      });
      console.log(response.data.message);
      setResponseWindowAtom({ prompt, response: response.data.message });
      setIsGeneratingResponse(false);
    }
  };

  return {
    handleChatInput,
    executeChatPrompt,
  };
};

export default useChatActions;
