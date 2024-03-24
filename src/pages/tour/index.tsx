import { Flex, Text } from "@chakra-ui/react";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import React from "react";
import EvitarContainer from "~/components/pages/tour/EvitarContainer";
import VideoPlayer from "~/components/pages/tour/VideoPlayer";
import VoiceChatContainer from "~/components/pages/tour/VoiceChatContainer";
import { graphQL } from "~/lib/graphQL";

export const getServerSideProps: GetServerSideProps<{
  walkthroughData: {
    sequenceNumber: string;
    videoFile: string;
    scriptContent: string;
  }[];
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
  console.log(walkthroughData);
  return (
    <Flex bg="red" w="full">
      <Flex flexDir="column">
        <EvitarContainer />
        <VoiceChatContainer />
      </Flex>
      <VideoPlayer />
    </Flex>
  );
};

export default CampusWalkthrough;
