import { Flex, Text } from "@chakra-ui/react";

export const EvitarContainer = () => {
  return (
    <Flex
      borderRadius={22}
      backgroundColor="#1E1E1E"
      flexDir="column"
      justify="center"
      align="center"
      height={400}
      width={250}
    >
      <Text color="white">Evitar Container</Text>
    </Flex>
  );
};

export default EvitarContainer;
