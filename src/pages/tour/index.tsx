import { Box } from "@chakra-ui/react";
import type { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useVideoSequenceAtom } from "~/lib/atom";
import { graphQL } from "~/lib/graphQL";
import { WalkthroughData } from "~/types";

import React from "react";
import useServerSideActions from "~/hooks/useServerSideActions";
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
  const { scriptData, isLoading, loadExperience } = useServerSideActions();
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
          isLoading={isLoading as boolean}
          loadExperience={loadExperience}
          walkthroughData={walkthroughData}
        />
      )}
    </Box>
  );
};

export default CampusWalkthrough;
