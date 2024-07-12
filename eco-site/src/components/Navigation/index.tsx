import { Button, Flex, Text } from "@chakra-ui/react";

interface NavigationProps {}

const Navigation = () => {
  return (
    <Flex>
      <Text>Product Logo</Text>
      <Flex>
        <Button>Sign In</Button>
        <Button>Cart</Button>
      </Flex>
    </Flex>
  );
};

export default Navigation;
