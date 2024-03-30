import { Box, Button, Flex, Grid, GridItem } from "@chakra-ui/react";
import type { GetServerSideProps, InferGetServerSidePropsType } from "next";
import React from "react";
import EvitarContainer from "~/components/pages/tour/EvitarContainer";
import VideoPlayerContainer from "~/components/pages/tour/VideoPlayer/VideoPlayerContainer";
import VoiceChatContainer from "~/components/pages/tour/VoiceChat/VoiceChatContainer";
import useServerSideActions from "~/hooks/useServerSideActions";
import { useVideoSequenceAtom } from "~/lib/atom";
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
        <Flex justify="center" align="center" h="full" w="full">
          <Button onClick={() => loadExperience(walkthroughData)}>
            Load Experience
          </Button>
        </Flex>
      )}
    </Box>
  );
};

export default CampusWalkthrough;
