import { Button, Flex, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import useServerSideActions from "~/hooks/useServerSideActions";

interface VideoPlayerProps {
  walkthroughData: {
    sequenceNumber: string;
    scriptContent: string;
    videoFile: string;
  }[];
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ walkthroughData }) => {
  const { loadExperience, isLoading, scriptData } = useServerSideActions();
  useEffect(() => {}, [scriptData]);
  return (
    <Flex h="full" borderRadius={22} w="full" bg="green" flexDir="column">
      <Flex h="full" align="center" justify="center" w="full">
        <Flex gap={2} flexDir="column">
          <Text>{isLoading ? `Fetching Videos...` : `Video Data`}</Text>
          <Button onClick={() => loadExperience(walkthroughData)}>
            Begin Tour
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default VideoPlayer;
