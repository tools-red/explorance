const useChatActions = () => {
  const handleChatInput = (
    setChatInput: (chatInput: string) => void,
    chatInput: string
  ) => {
    setChatInput(chatInput);
  };

  const executeChatPrompt = (
    event: React.KeyboardEvent<HTMLInputElement>,
    prompt: string
  ) => {
    if (event.key === "Enter") {
      console.log(prompt);
    }
  };

  return { handleChatInput, executeChatPrompt };
};

export default useChatActions;
