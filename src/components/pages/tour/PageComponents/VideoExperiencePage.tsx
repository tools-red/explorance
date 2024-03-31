import { Grid, GridItem } from "@chakra-ui/react";
import { WalkthroughData } from "~/types";

import React from "react";
import EvitarContainer from "../EvitarContainer";
import VoiceChatContainer from "../VoiceChat/VoiceChatContainer";
import VideoPlayerContainer from "../VideoPlayer/VideoPlayerContainer";

interface VideoExperiencePageProps {
  sequence: number;
  scriptData: WalkthroughData;
  walkthroughData: WalkthroughData;
  isLoading: boolean;
}

const VideoExperiencePage: React.FC<VideoExperiencePageProps> = ({
  scriptData,
  sequence,
  walkthroughData,
}) => {
  return (
    <Grid gap={3} p={3} h="full" templateColumns="1fr 5fr">
      <Grid gap={3} templateRows="2fr 1fr">
        <EvitarContainer />
        <VoiceChatContainer />
      </Grid>
      <GridItem>
        <VideoPlayerContainer
          sequence={sequence}
          scriptData={scriptData}
          walkthroughData={walkthroughData}
        />
      </GridItem>
    </Grid>
  );
};

export default VideoExperiencePage;
