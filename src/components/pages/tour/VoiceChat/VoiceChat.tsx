import { Button, Flex, Text } from "@chakra-ui/react";
import useAudioActions from "~/hooks/useAudioActions";
import MicrophoneDisplay from "./MicrophoneDisplay";
import { useEffect } from "react";

const VoiceChat = () => {
  const {
    initiateRecording,
    endRecording,
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
    </Flex>
  );
};

export default VoiceChat;
