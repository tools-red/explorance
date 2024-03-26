import { Button, Flex, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import useServerSideActions from "~/hooks/useServerSideActions";
import VideoPlayer from "./VideoPlayer";
import VideoControler from "../VideoController/VideoController";
import { useVideoSelectedAtom } from "~/lib/atom";

interface VideoPlayerProps {
  walkthroughData: {
    sequenceNumber: string;
    scriptContent: string;
    videoFile: string;
  }[];
}

const VideoPlayerContainer: React.FC<VideoPlayerProps> = ({
  walkthroughData,
}) => {
  const { loadExperience, isLoading, scriptData } = useServerSideActions();

  const [sequence, setSequence] = useVideoSelectedAtom();
  const [displayPlayer, setDisplayPlayer] = useState<boolean>(false);

  useEffect(() => {
    if (scriptData.length != 0) {
      setDisplayPlayer(true);
      const VideoInSequence = walkthroughData.filter(
        (script) => parseInt(script.sequenceNumber) === 1
      );
      setSequence({
        video:
          {
            scriptContent: VideoInSequence[0]?.scriptContent,
            sequenceNumber: VideoInSequence[0]?.sequenceNumber,
            videoFile: VideoInSequence[0]?.videoFile,
          } ?? null,
      });
    }
  }, [scriptData]);
  return (
    <Flex h="full" borderRadius={22} w="full" bg="green" flexDir="column">
      <Flex
        h="full"
        align="center"
        justify="center"
        w="full"
        position="relative"
      >
        {displayPlayer ? (
          <VideoPlayer videoFile={sequence.video?.videoFile} />
        ) : (
          <Flex gap={2} flexDir="column">
            <Text>{isLoading ? `Fetching Videos...` : `Video Data`}</Text>
            <Button onClick={() => loadExperience(walkthroughData)}>
              Begin Tour
            </Button>
          </Flex>
        )}
        <VideoControler
          walkthroughData={walkthroughData}
          videoCount={walkthroughData.length}
          displayState={displayPlayer}
        />
      </Flex>
    </Flex>
  );
};

export default VideoPlayerContainer;
