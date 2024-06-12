import { Button, Flex, Icon, Text } from "@chakra-ui/react";
import { IconType } from "react-icons/lib";

interface VideoControlerProps {
  label?: string;
  icon: IconType;
  alternateStateIndicate?: boolean;
  iconSize: number;
  handleOperation?: () => void;
}

const VideoControllerCTA: React.FC<VideoControlerProps> = ({
  icon,
  label,
  iconSize,
  alternateStateIndicate,
  handleOperation,
}) => {
  return (
    <Button
      borderRadius={20}
      p={2}
      h={8}
      bg={alternateStateIndicate ? "white" : "rgba(255, 255, 255, 0.1)"}
      variant="none"
      color={alternateStateIndicate ? "black" : "white"}
      _hover={
        alternateStateIndicate
          ? {}
          : {
              color: "#1E1E1E",
              bg: "white",
            }
      }
      onClick={handleOperation}
    >
      <Flex align="center" gap={2}>
        <Icon boxSize={iconSize} as={icon} />
        {label ? (
          <Text fontWeight={300} fontSize="small">
            {label}
          </Text>
        ) : (
          <></>
        )}
      </Flex>
    </Button>
  );
};

export default VideoControllerCTA;
