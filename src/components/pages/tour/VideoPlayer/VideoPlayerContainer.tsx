import { Flex, Text } from "@chakra-ui/react";

import VideoPlayer from "./VideoPlayer";
import VideoController from "../VideoController/VideoController";
import { WalkthroughData } from "~/types";
import ChatResponseWindow from "../TextChat/ChatResponseWindow";

interface VideoPlayerProps {
  walkthroughData: WalkthroughData;
  displayPlayer: boolean;
  selectedScript: WalkthroughData;
}

const VideoPlayerContainer: React.FC<VideoPlayerProps> = ({
  displayPlayer,
  selectedScript,
  walkthroughData,
}) => {
  return (
    <Flex h="full" borderRadius={22} w="full" bg="green" flexDir="column">
      <Flex
        h="full"
        align="center"
        justify="center"
        w="full"
        position="relative"
      >
        {walkthroughData && walkthroughData.length > 0 ? (
          <VideoPlayer videoFile={selectedScript[0]?.videoFile} />
        ) : (
          <Text>Nothing to play right now</Text>
        )}

        <ChatResponseWindow />

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
