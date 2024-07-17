import { Flex, Text } from "@chakra-ui/react";
import { useCartAtom } from "~/lib/jotai/atom";

import CheckoutModal from "~/components/checkout/CheckoutModal";

const CheckoutPage = () => {
  const [{ cartItems }] = useCartAtom();

  return (
    <Flex h="100vh" align="center" justify="center">
      <Flex gap={3} flexDir="column">
        <Text className="marcellus-regular" fontSize="3xl">
          Checkout Summary
        </Text>
        <CheckoutModal cartItems={cartItems} />
      </Flex>
    </Flex>
  );
};

export default CheckoutPage;
