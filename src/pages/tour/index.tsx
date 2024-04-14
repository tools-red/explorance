import { Box } from "@chakra-ui/react";
import type { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { graphQL } from "~/lib/graphQL";
import { WalkthroughData } from "~/types";

import React from "react";
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
            aiAvatarVideo: object?.aiAvatarVideo ?? "",
            sequenceNumber: object?.sequenceNumber ?? "",
            videoFile: object?.videoFile ?? "",
            videoDataType: object?.videoDataType ?? "",
          })
        ) ?? [],
    },
  };
};

const CampusWalkthrough: React.FC<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ walkthroughData }) => {
  return (
    <Box bg="#121212" h="100vh">
      <VideoExperiencePage walkthroughData={walkthroughData} />
    </Box>
  );
};

export default CampusWalkthrough;
