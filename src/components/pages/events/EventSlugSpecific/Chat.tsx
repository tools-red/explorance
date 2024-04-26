import {
  Box,
  Button,
  Flex,
  Icon,
  Input,
  InputGroup,
  InputRightAddon,
  Text,
} from "@chakra-ui/react";

import { IoMicOutline } from "react-icons/io5";
import { IoChatboxEllipses } from "react-icons/io5";

interface ChatProps {
  setInput: (input_value: string) => void;
  handleSendQueryToAi: (user_input: string, transcript_id: string) => void;
  user_input: string;
  transcription_id: string;
}

const Chat: React.FC<ChatProps> = ({
  handleSendQueryToAi,
  setInput,
  transcription_id,
  user_input,
}) => {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSendQueryToAi(user_input, transcription_id);
    }
  };

  return (
    <Box h={300} borderRadius={20} bg="#181818">
      <Flex pb={3} gap={3} h="full" justify="flex-end" flexDir="column">
        <Flex justify="center" align="center" h="full">
          <Flex gap={2} align="center" flexDir="column">
            <Icon
              color="white"
              bg="#1B1B1B"
              border="1px"
              borderColor="rgba(255, 255, 255, 0.1)"
              borderRadius="50%"
              p={2}
              boxSize={14}
              as={IoChatboxEllipses}
            />
            <Text color="white" fontWeight={600}>
              Start a new conversation
            </Text>
            <Text color="#A4A4A4" textAlign="center" fontSize="small">
              Begin chatting with AI. You never know what interesting
              conversations might come up!
            </Text>
          </Flex>
        </Flex>
        <InputGroup>
          <InputRightAddon border="none" bg="none">
            <Icon
              color="white"
              bg="#1B1B1B"
              border="1px"
              borderColor="rgba(255, 255, 255, 0.1)"
              borderRadius="50%"
              p={2}
              boxSize={10}
              as={IoMicOutline}
            />
          </InputRightAddon>
          <Input
            borderRadius={12}
            color="white"
            bg="#1B1B1B"
            border="1px"
            borderColor="rgba(255, 255, 255, 0.1)"
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask AI anything"
            fontSize="small"
            onKeyDown={handleKeyDown}
            _hover={{
              borderColor: "purple.500",
            }}
            _placeholder={{
              color: "rgba(255, 255, 255, 0.6)",
            }}
          />
        </InputGroup>
        {/* <Button onClick={() => handleSendQueryToAi(user_input, transcription_id)}>
        Send
      </Button> */}
      </Flex>
    </Box>
  );
};

export default Chat;
