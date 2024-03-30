import { Circle, Flex, Icon, Text } from "@chakra-ui/react";
import { FaMicrophone } from "react-icons/fa";

interface MicrophoneDisplayProps {
  isRecording: boolean | undefined;
  startRecording: () => void;
  endRecording: () => void;
}

const MicrophoneDisplay: React.FC<MicrophoneDisplayProps> = ({
  isRecording,
  endRecording,
  startRecording,
}) => {
  return (
    <>
      <Circle
        _hover={{ cursor: "pointer" }}
        onClick={isRecording ? endRecording : startRecording}
        p={3}
        bg="black"
      >
        <Icon boxSize={8} as={FaMicrophone} />
      </Circle>
      <Text fontSize="small">{isRecording ? `Listening` : `Talk to me`}</Text>
    </>
  );
};

export default MicrophoneDisplay;
