import { Button, Flex, Icon, Text } from "@chakra-ui/react";
import { IconType } from "react-icons/lib";

interface VideoControlerProps {
  label: string;
  icon: IconType;
  iconSize: number;
}
const VideoControllerCTA: React.FC<VideoControlerProps> = ({
  icon,
  label,
  iconSize,
}) => {
  return (
    <Button
      borderRadius={20}
      p={2}
      h={8}
      bg="rgba(255, 255, 255, 0.1)"
      variant="none"
    >
      <Flex align="center" gap={2}>
        <Icon color="white" boxSize={iconSize} as={icon} />
        <Text fontWeight={400} color="white" fontSize="small">
          {label}
        </Text>
      </Flex>
    </Button>
  );
};

export default VideoControllerCTA;
