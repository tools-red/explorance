import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { PiSealWarningFill } from "react-icons/pi";
import { useVideoPlayStateAtom } from "~/lib/atom";

import VoiceChat from "./VoiceChat";
import { MotionBox } from "~/lib/framer";

const VoiceChatContainer = () => {
  const [{ paused }] = useVideoPlayStateAtom();
  return (
    <Flex
      justify="center"
      align="center"
      position="relative"
      backgroundColor="#1E1E1E"
      borderRadius={22}
      flexDir="column"
    >
      <MotionBox
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
        display={paused ? "" : "none"}
        color="white"
        borderRadius={10}
        bg="rgba(0, 0, 0, 0.6)"
        backdropFilter="blur(10px)"
        borderTop="solid 2px"
        borderColor="purple.500"
        textAlign="center"
        p={4}
        w={250}
        fontSize="small"
        zIndex={1}
        position="absolute"
      >
        <Flex gap={1} align="center" flexDir="column">
          <Icon boxSize="5" as={PiSealWarningFill} />
          <Text>Voice Chat will be available when tour is paused</Text>
        </Flex>
      </MotionBox>
      <VoiceChat />
    </Flex>
  );
};

export default VoiceChatContainer;
