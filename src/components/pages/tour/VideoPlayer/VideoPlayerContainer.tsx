import { Button, Flex, Text, filter } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import useServerSideActions from "~/hooks/useServerSideActions";
import VideoPlayer from "./VideoPlayer";
import VideoController from "../VideoController/VideoController";
import { useVideoSequenceAtom } from "~/lib/atom";
import { WalkthroughData } from "~/types";

interface VideoPlayerProps {
  walkthroughData: {
    sequenceNumber: string;
    scriptContent: string;
    videoFile: string;
  }[];
  scriptData: {
    sequenceNumber: string;
    scriptContent: string;
    videoFile: string;
  }[];
  sequence: number;
}

const VideoPlayerContainer: React.FC<VideoPlayerProps> = ({
  walkthroughData,
  scriptData,
  sequence,
}) => {
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
        {scriptData && scriptData.length > 0 ? (
          <VideoPlayer videoFile={selectedVideo[0]?.videoFile} />
        ) : (
          <Text>Nothing to play right now</Text>
        )}

        <VideoController
          walkthroughData={walkthroughData}
          videoCount={walkthroughData.length}
          displayState={displayPlayer}
        />
      </Flex>
    </Flex>
  );
};

export default VideoPlayerContainer;
