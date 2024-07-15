import { Box, Button, Flex, Text, useDisclosure } from "@chakra-ui/react";
import { signIn } from "next-auth/react";

import LogoArt from "../../../../public/Indibliss_Logo.svg";

import Image from "next/image";
import Cart from "../Cart";
import { StaticImageData } from "next/image";

interface NavigationProps {}

const Navigation: React.FC<NavigationProps> = ({}) => {
  const {
    isOpen: isCartOpen,
    onOpen: onCartOpen,
    onClose: onCartClose,
  } = useDisclosure();

  return (
    <Box marginX="auto" w={1150}>
      <Flex p={3} align="center" justify="space-between">
        <Image
          alt="Logo Art"
          width={130}
          height={130}
          src={LogoArt as StaticImageData}
        />
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
