import { Box, Button, Flex, Icon, useDisclosure } from "@chakra-ui/react";
import { FiUser, FiShoppingCart } from "react-icons/fi";
import { signIn } from "next-auth/react";

import LogoArt from "../../../../public/Indibliss_Logo.svg";

import Image from "next/image";
import Cart from "../Cart";
import { StaticImageData } from "next/image";
import SearchBar from "../SearchBar";
import IconCTA from "~/components/buttons/IconCta";

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
          width={150}
          height={150}
          src={LogoArt as StaticImageData}
        />
        <Flex align="center" gap={6}>
          <SearchBar />
          <Flex gap={4}>
            <IconCTA CTAIcon={FiUser} EventHandler={() => {}} />
            <IconCTA CTAIcon={FiShoppingCart} EventHandler={onCartOpen} />
          </Flex>
        </Flex>
      </Flex>
      <Cart isOpen={isCartOpen} onClose={onCartClose} />
    </Box>
  );
};

export default Navigation;
