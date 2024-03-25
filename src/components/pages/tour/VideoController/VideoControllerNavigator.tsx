import { Button } from "@chakra-ui/react";

interface VideoControllerNavigatorProps {
  direction: boolean; // true for left and false for right
  icon: string;
  handler: () => void;
}

const VideoControllerNavigator: React.FC<
  VideoControllerNavigatorProps
> = () => {
  return <Button></Button>;
};

export default VideoControllerNavigator;
