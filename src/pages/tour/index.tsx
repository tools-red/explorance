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
import VideoExperiencePage from "~/components/pages/tour/PageComponents/VideoExperiencePage";

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
        <VideoExperiencePage
          scriptData={scriptData}
          sequence={sequence}
          walkthroughData={walkthroughData}
        />
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
