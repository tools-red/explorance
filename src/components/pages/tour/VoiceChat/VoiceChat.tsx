import { Box, Button, Flex, Text } from "@chakra-ui/react";
import useAudioActions from "~/hooks/useAudioActions";

const VoiceChat = () => {
  const { initiateRecording, endRecording, exportAudio, isRecording } =
    useAudioActions();
  return (
    <Flex gap={3} flexDir="column" color="white">
      <Button onClick={isRecording ? endRecording : initiateRecording}>
        {isRecording ? "Stop Recording" : "Start Recording"}
      </Button>
      {!isRecording && <Button onClick={exportAudio}>Export Audio</Button>}
    </Flex>
  );
};

export default VoiceChat;
