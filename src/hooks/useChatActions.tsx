const useChatActions = () => {
  const handleChatInput = (
    setChatInput: (chatInput: string) => void,
    chatInput: string
  ) => {
    setChatInput(chatInput);
    console.log(chatInput);
  };

  return { handleChatInput };
};

export default useChatActions;
