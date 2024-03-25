import { Button, Circle, Icon } from "@chakra-ui/react";
import { MdOutlineArrowBackIos } from "react-icons/md";

interface VideoControllerNavigatorProps {
  direction: boolean; // true for left and false for right
}

const VideoControllerNavigator: React.FC<VideoControllerNavigatorProps> = ({
  direction,
}) => {
  return (
    <Circle p={2} bg="rgba(255, 255, 255, 0.1)">
      <Icon
        color="white"
        boxSize={3.5}
        transform={direction ? "" : "rotate(180deg)"}
        as={MdOutlineArrowBackIos}
      />
    </Circle>
  );
};

export default VideoControllerNavigator;
