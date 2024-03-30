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
          <MotionCircle
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            top={-560}
            position="absolute"
            bg="purple"
            size="2xl"
            filter="blur(250px)"
          />
          <MotionCircle
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            bottom={-560}
            position="absolute"
            bg="purple"
            size="2xl"
            filter="blur(250px)"
          />
          <MotionBox
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
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
                Embark on an immersive journey through our campus from the
                comfort of your own device.
              </Text>
              <Box position="relative">
                <MotionBox
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7 }}
                  zIndex={1}
                  right={0}
                  top={3}
                  position="absolute"
                >
                  <Icon
                    zIndex={1}
                    right={0}
                    top={3}
                    filter="drop-shadow(0px 10px 10px #9747FF)"
                    borderColor="#9747FF"
                    boxSize={6}
                    color="white"
                    as={IoSparklesSharp}
                    animation={`${shiningAnimation} 2s linear infinite`}
                  />
                </MotionBox>
                <Button
                  border="1px solid"
                  borderColor="#4B4B4B"
                  px={6}
                  py={5}
                  fontWeight={500}
                  color="gray.100"
                  bg="#181818"
                  mt={6}
                  onClick={() => loadExperience(walkthroughData)}
                >
                  Start Exploring Now
                </Button>
              </Box>
            </Flex>
          </MotionBox>
        </Flex>
      )}
    </Box>
  );
};

export default CampusWalkthrough;
