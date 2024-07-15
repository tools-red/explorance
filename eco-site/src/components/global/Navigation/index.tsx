import { Box, Button, Flex, Text, useDisclosure } from "@chakra-ui/react";
import { signIn } from "next-auth/react";
import Cart from "../Cart";

interface NavigationProps {}

const Navigation: React.FC<NavigationProps> = ({}) => {
  const {
    isOpen: isCartOpen,
    onOpen: onCartOpen,
    onClose: onCartClose,
  } = useDisclosure();

  return (
    <Box>
      <Flex p={3} align="center" justify="space-between">
        <Text className="marcellus-regular">Product Logo</Text>
        <Flex align="center" gap={3}>
          <Button
            onClick={() =>
              signIn("google", {
                redirect: true,
                callbackUrl: "/",
              })
            }
          >
            Sign In
          </Button>
          <Button onClick={onCartOpen}>Cart</Button>
        </Flex>
      </Flex>
      <Cart isOpen={isCartOpen} onClose={onCartClose} />
    </Box>
  );
};

export default Navigation;
