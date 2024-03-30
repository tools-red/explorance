import {
  Box,
  Button,
  Circle,
  Flex,
  Grid,
  GridItem,
  Icon,
  Text,
} from "@chakra-ui/react";
import { IoSparklesSharp } from "react-icons/io5";
import type { GetServerSideProps, InferGetServerSidePropsType } from "next";
import React from "react";
import EvitarContainer from "~/components/pages/tour/EvitarContainer";
import VideoPlayerContainer from "~/components/pages/tour/VideoPlayer/VideoPlayerContainer";
import VoiceChatContainer from "~/components/pages/tour/VoiceChat/VoiceChatContainer";
import useServerSideActions from "~/hooks/useServerSideActions";
import { useVideoSequenceAtom } from "~/lib/atom";
import { MotionBox, MotionCircle } from "~/lib/framer";
import { graphQL } from "~/lib/graphQL";
import { WalkthroughData } from "~/types";
import { shiningAnimation } from "~/lib/keyframes";
import BeginExperiencePage from "~/components/pages/tour/PageComponents/BeginExperiencePage";

export const getServerSideProps: GetServerSideProps<{
  walkthroughData: WalkthroughData;
}> = async () => {
  const contentfulWalkthroughData =
    await graphQL.walkthroughScriptsCollection();
  return {
    props: {
      walkthroughData:
        contentfulWalkthroughData.walkthroughScriptsCollection?.items.map(
          (object) => ({
            scriptContent: object?.scriptContent ?? "",
            sequenceNumber: object?.sequenceNumber ?? "",
            videoFile: object?.videoFile ?? "",
          })
        ) ?? [],
    },
  };
};

const CampusWalkthrough: React.FC<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ walkthroughData }) => {
  const { scriptData, loadExperience } = useServerSideActions();
  const [{ sequence }] = useVideoSequenceAtom();

  return (
    <Box bg="#121212" h="100vh">
      {scriptData && scriptData.length > 0 ? (
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
      ) : (
        <BeginExperiencePage
          loadExperience={loadExperience}
          walkthroughData={walkthroughData}
        />
      )}
    </Box>
  );
};

export default CampusWalkthrough;
