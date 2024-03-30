import { Button, Flex, Text } from "@chakra-ui/react";
import useAudioActions from "~/hooks/useAudioActions";
import MicrophoneDisplay from "./MicrophoneDisplay";
import { useEffect } from "react";

const VoiceChat = () => {
  const {
    initiateRecording,
    endRecording,
    GenerateSpeech,
    isRecording,
    isSpeaking,
    isResponding,
  } = useAudioActions();
  return (
    <Flex gap={3} flexDir="column" color="white">
      <MicrophoneDisplay
        isResponding={isResponding}
        isSpeaking={isSpeaking}
        endRecording={endRecording}
        isRecording={isRecording}
        startRecording={initiateRecording}
      />
      <Button onClick={GenerateSpeech}>Gen</Button>
      {/* <Button onClick={isRecording ? endRecording : initiateRecording}>
        {isRecording ? "Stop Recording" : "Start Recording"}
      </Button>
      {!isRecording && (
        <Button
          onClick={() => {
            GenerateSpeech();
          }}
        >
          Audio
        </Button>
      )} */}
    </Flex>
  );
};

export default VoiceChat;
