import { Box, Button, Input } from "@chakra-ui/react";

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
    <Box h={300} borderRadius={20} bg="red.400">
      <Input onChange={(e) => setInput(e.target.value)} />
      <Button onClick={() => handleSendQueryToAi(user_input, transcription_id)}>
        Send
      </Button>
    </Box>
  );
};

export default Chat;
