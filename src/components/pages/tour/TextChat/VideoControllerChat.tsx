import { Input } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import useChatActions from "~/hooks/useChatActions";

const VideoControllerChat = () => {
  const { handleChatInput, executeChatPrompt } = useChatActions();

  const [showPlaceholder, setShowPlaceholder] = useState<boolean>(true);
  const [chatInput, setChatInput] = useState<string>("");

  return (
    <Input
      fontSize="small"
      fontWeight={300}
      borderRadius={20}
      border="none"
      bg="rgba(255, 255, 255, 0.1)"
      color="white"
      w={80}
      p={3}
      h={8}
      onFocus={() => setShowPlaceholder(false)}
      onBlur={() => setShowPlaceholder(true)}
      onChange={(e) => handleChatInput(setChatInput, e.target.value)}
      onKeyDown={(e) => executeChatPrompt(e, chatInput)}
      placeholder={showPlaceholder ? `Ask AI anything` : ""}
      _placeholder={{ color: "white" }}
    />
  );
};

export default VideoControllerChat;
