import {
  Box,
  Button,
  Icon,
  Input,
  InputGroup,
  InputRightAddon,
} from "@chakra-ui/react";

import { IoMicOutline } from "react-icons/io5";

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
  return (
    <Box h={300} borderRadius={20} bg="rgba(24, 24, 24, 0.5)">
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
    </Box>
  );
};

export default Chat;
