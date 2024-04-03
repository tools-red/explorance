import { Flex, Text } from "@chakra-ui/react";
import useAvatarActions from "~/hooks/useAvatarActions";

export const EvitarContainer = () => {
  const { aiVideos } = useAvatarActions();

  return (
    <Flex
      borderRadius={22}
      backgroundColor="#1E1E1E"
      justifyContent="center"
      alignItems="center"
      width="full" // Make the container full width
      height="full" // Make the container full height
      position="relative" // Ensure positioning context for the absolute-positioned child
      overflow="hidden" // Hide overflow to prevent scrollbars
    >
      {/* {videosFiltered.length > 0 && (
        <IntroductionPlayer
          setIntroEnd={setIntroEnd}
          videoFile={aiVideos[1]?.Key as string}
        />
      )} */}
    </Flex>
  );
};

export default EvitarContainer;
