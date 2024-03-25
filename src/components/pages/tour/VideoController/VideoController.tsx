import { Flex } from "@chakra-ui/react";
import { Md360 } from "react-icons/md";
import { BsCompass } from "react-icons/bs";
import { IoVolumeHigh } from "react-icons/io5";

import VideoControllerNavigator from "./VideoControllerNavigator";
import VideoControllerCTA from "./VideoControllerCTA";

const VideoControler = () => {
  return (
    <Flex
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
      <VideoControllerNavigator direction={true} />
      <VideoControllerCTA iconSize={5} icon={Md360} label="360° View" />
      <VideoControllerCTA iconSize={5} icon={BsCompass} label="Navigate" />
      <VideoControllerCTA iconSize={5} icon={IoVolumeHigh} label="Volume" />
      <VideoControllerNavigator direction={false} />
    </Flex>
  );
};

export default VideoControler;
