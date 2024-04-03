import { Flex, Text } from "@chakra-ui/react";
import AiVideoPlayer from "./AiVideoPlayer";
import React from "react";
import { WalkthroughData } from "~/types";

interface AiVideoContainerProps {
  selectedScript: WalkthroughData;
}

export const AiVideoContainer: React.FC<AiVideoContainerProps> = ({
  selectedScript,
}) => {
  console.log(selectedScript);
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
      {selectedScript && selectedScript.length > 0 ? (
        <AiVideoPlayer videoFile={selectedScript[0]?.aiAvatarVideo} />
      ) : (
        <Text>No video Loaded right now</Text>
      )}
    </Flex>
  );
};

export default AiVideoContainer;
