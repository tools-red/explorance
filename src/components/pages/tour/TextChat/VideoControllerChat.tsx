import { Icon, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { IoSparklesSharp } from "react-icons/io5";
import { useEffect, useState } from "react";
import useChatActions from "~/hooks/useChatActions";

const VideoControllerChat = () => {
  const { handleChatInput, executeChatPrompt } = useChatActions();

  const [showPlaceholder, setShowPlaceholder] = useState<boolean>(true);
  const [chatInput, setChatInput] = useState<string>("");

  return (
    <InputGroup w={80}>
      <InputLeftElement
        pb={2}
        pointerEvents="none" // Ensure the icon doesn't interfere with input events
        children={<Icon as={IoSparklesSharp} color="white" />} // Set the icon color and other styles
      />
      <Input
        h={8}
        fontSize="small"
        fontWeight={300}
        borderRadius={20}
        border="none"
        bg="rgba(255, 255, 255, 0.1)"
        color="white"
        onFocus={() => setShowPlaceholder(false)}
        onBlur={() => setShowPlaceholder(true)}
        onChange={(e) => handleChatInput(setChatInput, e.target.value)}
        onKeyDown={(e) => executeChatPrompt(e, chatInput)}
        placeholder={showPlaceholder ? `Ask AI anything` : ""}
        _placeholder={{ color: "white" }}
      />
    </InputGroup>
  );
};

export default VideoControllerChat;
