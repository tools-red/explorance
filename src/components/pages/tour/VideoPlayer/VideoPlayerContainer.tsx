import { Button, Flex, Text, filter } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import useServerSideActions from "~/hooks/useServerSideActions";
import VideoPlayer from "./VideoPlayer";
import VideoControler from "../VideoController/VideoController";
import { useVideoSequenceAtom } from "~/lib/atom";
import { WalkthroughData } from "~/types";

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
  const [{ sequence }] = useVideoSequenceAtom();

  const [displayPlayer, setDisplayPlayer] = useState<boolean>(false);
  const [selectedVideo, setSelectedVideo] = useState<WalkthroughData>([]);

  useEffect(() => {
    if (scriptData.length != 0) setDisplayPlayer(true);
    const filterVideo = scriptData.filter(
      (script) => parseInt(script.sequenceNumber) === 1
    );
    setSelectedVideo(filterVideo ?? null);
  }, [scriptData]);

  useEffect(() => {
    const filterVideo = scriptData.filter(
      (script) => parseInt(script.sequenceNumber) === sequence
    );
    setSelectedVideo(filterVideo ?? null);
  }, [sequence]);

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
          <VideoPlayer videoFile={selectedVideo[0]?.videoFile} />
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
