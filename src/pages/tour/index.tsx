import {
  Box,
  Button,
  Circle,
  Flex,
  Grid,
  GridItem,
  Text,
} from "@chakra-ui/react";
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
        <Flex
          justify="center"
          align="center"
          h="full"
          w="full"
          position="relative"
          overflow="hidden"
        >
          <Circle
            top={-560}
            position="absolute"
            bg="purple"
            size="2xl"
            filter="blur(250px)"
          />
          <Circle
            bottom={-560}
            position="absolute"
            bg="purple"
            size="2xl"
            filter="blur(250px)"
          />
          <Flex zIndex={1} align="center" flexDir="column">
            <Text fontSize="7xl" fontWeight={600} color="white">
              Virtual Campus Tour
            </Text>
            <Text
              textAlign="center"
              maxW={490}
              fontWeight={200}
              color={"rgba(255, 255, 255, 0.4)"}
              fontSize="lg"
            >
              Embark on an immersive journey through our campus from the comfort
              of your own device.
            </Text>
            <Button mt={6}>Start Exploring Now</Button>
          </Flex>
        </Flex>
      )}
    </Box>
  );
};

export default CampusWalkthrough;
