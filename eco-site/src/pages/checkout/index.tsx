import { Box, Flex, Text } from "@chakra-ui/react";
import { useCartAtom } from "~/lib/atom";

const CheckoutPage = () => {
  const [{ cartItems }] = useCartAtom();

  return (
    <Flex h="100vh" align="center" justify="center">
      <Flex flexDir="row" h={500}>
        <Text bg="blue">Hi</Text>
        <Box bg="red">
          <Flex bg="yellow" flexDir="column">
            {cartItems.items.map((item, index) => {
              return (
                <Flex key={index}>{item.productDetails.productTitle}</Flex>
              );
            })}
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
};

export default CheckoutPage;
