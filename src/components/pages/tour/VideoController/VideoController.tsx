import { Flex } from "@chakra-ui/react";
import { Md360 } from "react-icons/md";
import { BsCompass } from "react-icons/bs";
import { IoVolumeHigh } from "react-icons/io5";

import VideoControllerNavigator from "./VideoControllerNavigator";
import VideoControllerCTA from "./VideoControllerCTA";
import React from "react";

interface VideoControllerProps {
  displayState: boolean;
  videoCount: number;
}

const VideoControler: React.FC<VideoControllerProps> = ({
  displayState,
  videoCount,
}) => {
  return (
    <Flex
      display={displayState ? "flex" : "none"}
      justify="space-between"
      bg="rgba(0, 0, 0, 0.6)"
      bottom={10}
      position="absolute"
      backdropFilter="blur(10px)"
      p="6px"
      borderRadius={40}
      align="center"
      gap={3}
    >
      <VideoControllerNavigator videoCount={videoCount} direction={true} />
      <VideoControllerCTA iconSize={5} icon={Md360} label="360° View" />
      <VideoControllerCTA iconSize={5} icon={BsCompass} label="Navigate" />
      <VideoControllerCTA iconSize={5} icon={IoVolumeHigh} label="Volume" />
      <VideoControllerNavigator videoCount={videoCount} direction={false} />
    </Flex>
  );
};

export default VideoControler;
