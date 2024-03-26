import { Flex, Grid, GridItem } from "@chakra-ui/react";
import type { GetServerSideProps, InferGetServerSidePropsType } from "next";
import React from "react";
import EvitarContainer from "~/components/pages/tour/EvitarContainer";
import VideoPlayerContainer from "~/components/pages/tour/VideoPlayer/VideoPlayerContainer";
import VoiceChatContainer from "~/components/pages/tour/VoiceChatContainer";
import { graphQL } from "~/lib/graphQL";
import { WalkthroughData } from "~/types";

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
  return (
    <Grid bg="#121212" gap={3} p={3} h="100vh" templateColumns="1fr 5fr">
      <Grid gap={3} templateRows="2fr 1fr">
        <EvitarContainer />
        <VoiceChatContainer />
      </Grid>
      <GridItem>
        <VideoPlayerContainer walkthroughData={walkthroughData} />
      </GridItem>
    </Grid>
  );
};

export default CampusWalkthrough;
