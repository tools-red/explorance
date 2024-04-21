import { Box } from "@chakra-ui/react";
import type { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { graphQL } from "~/lib/graphQL";
import { WalkthroughData } from "~/types";

import React, { useEffect, useState } from "react";
import VideoExperiencePage from "~/components/pages/tour/PageComponents/VideoExperiencePage";
import useServerSideActions from "~/hooks/useServerSideActions";

const CampusWalkthrough = () => {
  const [walkthroughData, setWalkthroughData] = useState<WalkthroughData>([]);
  const { filterWalkthroughData, isFetchingWalkthroughData } =
    useServerSideActions();

  useEffect(() => {
    const FetchData = async () => {
      const data = await filterWalkthroughData();
      console.log({ data });
    };

    FetchData();

    console.log({ isFetchingWalkthroughData });
  }, [isFetchingWalkthroughData]);
  return (
    <Box bg="#121212" h="100vh">
      <VideoExperiencePage walkthroughData={walkthroughData} />
    </Box>
  );
};

export default CampusWalkthrough;
