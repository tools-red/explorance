import { Flex, useDisclosure } from "@chakra-ui/react";
import { Md360 } from "react-icons/md";
import { BsCompass } from "react-icons/bs";
import { IoVolumeHigh } from "react-icons/io5";
import { FaPause, FaPlay } from "react-icons/fa6";
import { BiCaptions, BiSolidCaptions } from "react-icons/bi";

import VideoControllerNavigator from "./VideoControllerNavigator";
import VideoControllerCTA from "./VideoControllerCTA";
import React from "react";
import { WalkthroughData } from "~/types";
import VideoControllerChat from "../TextChat/VideoControllerChat";
import { useVideoPlayStateAtom } from "~/lib/atom";
import useVideoControllerActions from "~/hooks/useVideoControllerActions";

interface VideoControllerProps {
  displayState: boolean;
  videoCount: number;
  walkthroughData: WalkthroughData;
  showNavigator: boolean;
  showCaptions: boolean;
  showThreeSixty: boolean;
  alternateThreeSixtyBtnStyle: boolean;
  SetShowNavigator: (state: boolean) => void;
  SetShowCaptions: (state: boolean) => void;
  setShowThreeSixty: (state: boolean) => void;
  setAlternateThreeSixtyBtnStyle: (state: boolean) => void;
}

const VideoController: React.FC<VideoControllerProps> = ({
  displayState,
  videoCount,
  walkthroughData,
  showNavigator,
  showCaptions,
  showThreeSixty,
  alternateThreeSixtyBtnStyle,
  SetShowNavigator,
  SetShowCaptions,
  setShowThreeSixty,
  setAlternateThreeSixtyBtnStyle,
}) => {
  const { handleVideoPauseState, handleVideoSwitchDisplay } =
    useVideoControllerActions();
  const [videoPauseState] = useVideoPlayStateAtom();

  return (
    <Flex
      display={displayState ? "flex" : "none"}
      justify="space-between"
      bg="rgba(0, 0, 0, 0.6)"
      transition="all 0.3s"
      bottom={showCaptions ? 20 : 10}
      position="absolute"
      backdropFilter="blur(10px)"
      p="6px"
      borderRadius={40}
      align="center"
      gap={3}
    >
      <VideoControllerNavigator
        walkthroughData={walkthroughData}
        videoCount={videoCount}
        direction={true}
      />
      <VideoControllerCTA iconSize={5} icon={IoVolumeHigh} />
      <VideoControllerCTA
        handleOperation={handleVideoPauseState}
        iconSize={5}
        icon={videoPauseState.paused ? FaPause : FaPlay}
      />
      <VideoControllerChat />
      <VideoControllerCTA
        handleOperation={() =>
          handleVideoSwitchDisplay(
            showThreeSixty,
            alternateThreeSixtyBtnStyle,
            setShowThreeSixty,
            setAlternateThreeSixtyBtnStyle
          )
        }
        alternateStateIndicate={alternateThreeSixtyBtnStyle}
        iconSize={5}
        icon={Md360}
        label="360° View"
      />
      <VideoControllerCTA
        handleOperation={() => SetShowNavigator(!showNavigator)}
        iconSize={5}
        icon={BsCompass}
        label="Navigate"
      />
      <VideoControllerCTA
        handleOperation={() => SetShowCaptions(!showCaptions)}
        iconSize={5}
        icon={showCaptions ? BiSolidCaptions : BiCaptions}
        label="Captions"
      />
      <VideoControllerNavigator
        walkthroughData={walkthroughData}
        videoCount={videoCount}
        direction={false}
      />
    </Flex>
  );
};

export default VideoController;
