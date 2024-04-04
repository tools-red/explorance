import { Box, Button } from "@chakra-ui/react";
import React from "react";
import { WalkthroughData } from "~/types";

interface VideoPlayerStaticProps {
  loadExperience: (input: WalkthroughData) => void;
  walkthroughData: WalkthroughData;
}

const VideoPlayerStatic: React.FC<VideoPlayerStaticProps> = ({
  loadExperience,
  walkthroughData,
}) => {
  return (
    <Box w="full" h="full" bg="red" borderRadius={22}>
      <Button onClick={() => loadExperience(walkthroughData)}>
        Load Experience
      </Button>
    </Box>
  );
};

export default VideoPlayerStatic;
