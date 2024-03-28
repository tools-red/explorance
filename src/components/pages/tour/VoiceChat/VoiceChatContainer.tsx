import { Flex, Text } from "@chakra-ui/react";
import VoiceChat from "./VoiceChat";

const VoiceChatContainer = () => {
  return (
    <Flex
      justify="center"
      align="center"
      backgroundColor="#1E1E1E"
      borderRadius={22}
      flexDir="column"
    >
      <VoiceChat />
    </Flex>
  );
};

export default VoiceChatContainer;
