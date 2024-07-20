import { Button, Divider, Flex, Text } from "@chakra-ui/react";
import { type Cart } from "~/types/purchase";

import Image from "next/image";

interface OrderSummaryProps {
  cartItems: Cart;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ cartItems }) => {
  return (
    <Flex justify="space-between" flexDir="column" w={400}>
      <Flex pr={1} h={300} overflowY="auto" gap={3} flexDir="column">
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
      <Flex flexDir="column" gap={3}>
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
        <Button
          onClick={() => (window.location.href = "/")}
          color="white"
          bg="#CC723F"
          _hover={{ bg: "#B45722" }}
        >
          Cancel Purchase
        </Button>
      </Flex>
    </Flex>
  );
};

export default OrderSummary;
