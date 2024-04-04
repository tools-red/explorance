import { Box } from "@chakra-ui/react";
import type { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { graphQL } from "~/lib/graphQL";
import { WalkthroughData } from "~/types";

import React, { useEffect } from "react";
import VideoExperiencePage from "~/components/pages/tour/PageComponents/VideoExperiencePage";
import useServerSideActions from "~/hooks/useServerSideActions";

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
          })
        ) ?? [],
    },
  };
};

const CampusWalkthrough: React.FC<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ walkthroughData }) => {
  const { loadIntroductionVideo } = useServerSideActions();
  useEffect(() => {
    loadIntroductionVideo();
  }, []);
  return (
    <Box bg="#121212" h="100vh">
      <VideoExperiencePage walkthroughData={walkthroughData} />
    </Box>
  );
};

export default CampusWalkthrough;
