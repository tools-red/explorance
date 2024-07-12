import { Button, Flex, Text } from "@chakra-ui/react";

interface NavigationProps {}

const Navigation: React.FC<NavigationProps> = ({}) => {
  return (
    <Flex p={3} align="center" justify="space-between">
      <Text>Product Logo</Text>
      <Flex align="center" gap={3}>
        <Button>Sign In</Button>
        <Button>Cart</Button>
      </Flex>
    </Flex>
  );
};

export default Navigation;
