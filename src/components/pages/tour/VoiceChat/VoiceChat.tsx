import { Button, Flex } from "@chakra-ui/react";
import useAudioActions from "~/hooks/useAudioActions";

const VoiceChat = () => {
  const {
    initiateRecording,
    endRecording,
    isRecording,
    transcribeAudio,
    exportAudio,
  } = useAudioActions();
  return (
    <Flex gap={3} flexDir="column" color="white">
      <Button onClick={isRecording ? endRecording : initiateRecording}>
        {isRecording ? "Stop Recording" : "Start Recording"}
      </Button>
      {!isRecording && (
        <Button
          onClick={() => {
            transcribeAudio();
          }}
        >
          Transcribe Audio
        </Button>
      )}
    </Flex>
  );
};

export default VoiceChat;
