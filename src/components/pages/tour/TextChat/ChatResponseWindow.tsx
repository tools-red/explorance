import { Flex, Icon, Text } from "@chakra-ui/react";
import { MotionBox } from "~/lib/framer";
import { IoSparklesSharp } from "react-icons/io5";
import { MdOutlineClose } from "react-icons/md";
import { useState } from "react";

const ChatResponseWindow = () => {
  const [displayResponseWindow, setDisplayResponseWindow] =
    useState<boolean>(false);

  return (
    displayResponseWindow && (
      <MotionBox
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        bg="rgba(0, 0, 0, 0.6)"
        backdropFilter="blur(20px)"
        borderRadius={20}
        p={6}
        w={600}
        bottom={40}
        position="absolute"
      >
        <Flex gap={3} flexDir="column">
          <Flex
            align="start"
            color="purple.200"
            w="full"
            justify="space-between"
          >
            <Flex align="center" gap={3}>
              <Icon boxSize={4} as={IoSparklesSharp} />
              <Text fontSize="15px">{prompt}</Text>
            </Flex>
            <Icon
              transition="all 0.3s ease-in-out"
              cursor="pointer"
              _hover={{ color: "red.400" }}
              onClick={() => setDisplayResponseWindow(false)}
              color="purple.300"
              boxSize={4}
              as={MdOutlineClose}
            />
          </Flex>
          <Text lineHeight="155.5%" color="white">
            {response}
          </Text>
        </Flex>
      </MotionBox>
    )
  );
};

export default ChatResponseWindow;
