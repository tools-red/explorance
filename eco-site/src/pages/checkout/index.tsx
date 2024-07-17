import { Box, Button, Divider, Flex, Grid, Text } from "@chakra-ui/react";
import { useCartAtom } from "~/lib/atom";

import Image from "next/image";

const CheckoutPage = () => {
  const [{ cartItems }] = useCartAtom();

  return (
    <Flex h="100vh" align="center" justify="center">
      <Flex flexDir="row" h={500}>
        <Text bg="blue">Hi</Text>
        <Flex justify="space-between" flexDir="column" w={400}>
          <Flex h={250} overflowY="auto" gap={3} flexDir="column">
            {cartItems.items.map((item, index) => {
              return (
                <Flex justify="space-between" key={index}>
                  <Flex gap={3}>
                    <Image
                      src={item.productDetails.ImageURL}
                      alt={`Image-Product-${item.productDetails.productId}`}
                      width={80}
                      height={100}
                    />
                    <Flex flexDir="column">
                      <Text fontWeight={500} fontSize="lg">
                        {item.productDetails.productTitle}
                      </Text>
                      <Text>
                        {`$${(
                          item.productDetails.productPrice * item.cartItemAmount
                        ).toFixed(2)}`}
                      </Text>
                    </Flex>
                  </Flex>
                  <Text>{`x${item.cartItemAmount}`}</Text>
                </Flex>
              );
            })}
          </Flex>
          <Flex gap={1} flexDir="column">
            <Flex justify="space-between">
              <Text>Subtotal</Text>
              <Text>{`$${cartItems.totalPrice.toFixed(2)}`}</Text>
            </Flex>
            <Flex justify="space-between">
              <Text>Shipping</Text>
              <Text>{`$${(90).toFixed(2)}`}</Text>
            </Flex>
            <Divider my={1.5} borderColor="gray.300" />
            <Flex justify="space-between">
              <Text>Total</Text>
              <Text>{`$${(cartItems.totalPrice + 90).toFixed(2)}`}</Text>
            </Flex>
          </Flex>
          <Flex gap={1} flexDir="column">
            <Button color="white" bg="#CC723F" _hover={{ bg: "#B45722" }}>
              Checkout
            </Button>
            <Button color="#CC723F" bg="#FAF1EC" _hover={{bg: "#F8E5DB"}}>
              Cancel
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default CheckoutPage;
