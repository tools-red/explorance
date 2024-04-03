import { Grid, GridItem } from "@chakra-ui/react";
import { WalkthroughData } from "~/types";

import React, { useEffect, useState } from "react";
import EvitarContainer from "../VideoAvatar/EvitarContainer";
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
    <Grid gap={3} p={3} h="full" templateColumns="1fr 5fr">
      <Grid gap={3} templateRows="2fr 1fr">
        <EvitarContainer />
        <VoiceChatContainer />
      </Grid>
      <GridItem>
        <VideoPlayerContainer
          displayPlayer={displayPlayer}
          selectedVideo={selectedVideo}
          walkthroughData={walkthroughData}
        />
      </GridItem>
    </Grid>
  );
};

export default VideoExperiencePage;
