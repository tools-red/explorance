import { Text } from "@chakra-ui/react";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { WalkthroughScriptsCollectionQuery } from "~/lib/__generated/sdk";
import { graphQL } from "~/lib/graphql";

const VideoPlayer = () => {
  return <Text>Video Data here</Text>;
};

export default VideoPlayer;
