import { Flex, Text } from "@chakra-ui/react";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import React from "react";
import VideoPlayer from "~/components/tour_page/VideoPlayer";
import { graphQL } from "~/lib/graphql";

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
    <Flex flexDir="column">
      <Text>Walkthrough here page</Text>
      <VideoPlayer />
    </Flex>
  );
};

export default CampusWalkthrough;
