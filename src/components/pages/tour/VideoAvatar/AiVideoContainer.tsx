import { Flex, Text } from "@chakra-ui/react";
import AiVideoPlayer from "./AiVideoPlayer";

export const AiVideoContainer = () => {
  return (
    <Flex
      borderRadius={22}
      backgroundColor="#1E1E1E"
      justifyContent="center"
      alignItems="center"
      width="full" // Make the container full width
      height="full" // Make the container full height
      position="relative" // Ensure positioning context for the absolute-positioned child
      overflow="hidden" // Hide overflow to prevent scrollbars
    >
      <AiVideoPlayer videoFile="" />
    </Flex>
  );
};

export default AiVideoContainer;
