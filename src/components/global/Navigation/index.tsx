import { Box, Flex, Text, useDisclosure } from "@chakra-ui/react";
import { FiUser, FiShoppingCart } from "react-icons/fi";
import { signIn } from "next-auth/react";

import LogoArt from "../../../../public/Indibliss_Logo.svg";

import Image from "next/image";
import Cart from "../Cart";
import { type StaticImageData } from "next/image";
import SearchBar from "../SearchBar";
import IconCTA from "~/components/global/Buttons/IconCta";
import { useCartAtom } from "~/lib/jotai/atom";
import { type ContentLakeProductsType } from "~/types/contentLake";

interface NavigationProps {
  products: ContentLakeProductsType[];
}

const Navigation: React.FC<NavigationProps> = ({ products }) => {
  const [{ cartItems }] = useCartAtom();
  const {
    isOpen: isCartOpen,
    onOpen: onCartOpen,
    onClose: onCartClose,
  } = useDisclosure();

  return (
    <Box mt={6} marginX="auto" w={1150}>
      <Flex align="center" justify="space-between">
        <Box cursor="pointer" onClick={() => (window.location.href = "/")}>
          <Image
            alt="Logo Art"
            width={150}
            height={150}
            src={LogoArt as StaticImageData}
          />
        </Box>
        <Flex align="center" gap={6}>
          <SearchBar products={products} />
          <Flex gap={4}>
            <IconCTA CTAIcon={FiUser} EventHandler={() => signIn("google")} />
            <Box pos="relative">
              <IconCTA CTAIcon={FiShoppingCart} EventHandler={onCartOpen} />
              {cartItems.items.length > 0 ? (
                <Text
                  color="white"
                  fontSize="small"
                  borderRadius={20}
                  bg="#CC723F"
                  px={2}
                  pos="absolute"
                  top={-4}
                  right={-5}
                >
                  {cartItems.items.length}
                </Text>
              ) : (
                <></>
              )}
            </Box>
          </Flex>
        </Flex>
      </Flex>
      <Cart isOpen={isCartOpen} onClose={onCartClose} />
    </Box>
  );
};

export default Navigation;
