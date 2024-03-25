import { Flex, Text } from "@chakra-ui/react";

export const EvitarContainer = () => {
  return (
    <Flex
      borderRadius={22}
      border="2px solid"
      backgroundColor="blue"
      flexDir="column"
      justify="center"
      align="center"
      height={400}
      width={250}
    >
      <Text>Evitar Container</Text>
    </Flex>
  );
};

export default EvitarContainer;
