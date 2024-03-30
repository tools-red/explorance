import { Circle, Flex, Icon, Text } from "@chakra-ui/react";
import { FaMicrophone } from "react-icons/fa";

interface MicrophoneDisplayProps {
  isRecording: boolean | undefined;
  isSpeaking: boolean | undefined;
  startRecording: () => void;
  endRecording: () => void;
}

const MicrophoneDisplay: React.FC<MicrophoneDisplayProps> = ({
  isRecording,
  isSpeaking,
  endRecording,
  startRecording,
}) => {
  return (
    <>
      <Circle
        transition="all 0.3s ease-in-out"
        _hover={{ cursor: "pointer" }}
        onClick={isRecording ? endRecording : startRecording}
        p={3}
        bg={isSpeaking ? "rgba(0, 0, 0, 0.2)" : "black"}
      >
        <Icon boxSize={8} as={FaMicrophone} />
      </Circle>
      <Text fontSize="small">{isRecording ? `Listening` : `Talk to me`}</Text>
    </>
  );
};

export default MicrophoneDisplay;
