import { Flex, Text } from "@chakra-ui/react";

const VoiceChatContainer = () => {
  return (
    <Flex
      justify="center"
      align="center"
      backgroundColor="#1E1E1E"
      // h={250}
      borderRadius={22}
      flexDir="column"
    >
      <iframe
        src="https://app.zenfluence.ai/talkToEVI"
        allow="camera; microphone"
        width="205px"
        height="250px"
      ></iframe>
    </Flex>
  );
};

export default VoiceChatContainer;
