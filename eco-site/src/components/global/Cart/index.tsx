import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Text,
} from "@chakra-ui/react";
import { useCartAtom } from "~/lib/atom";

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

const Cart: React.FC<CartProps> = ({ isOpen, onClose }) => {
  const [{ cartItems }] = useCartAtom();
  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Your Shopping Cart</DrawerHeader>

        <DrawerBody>
          {cartItems.items.length > 0 ? (
            <Flex gap={3} flexDir="column">
              {cartItems.items.map((item, index) => {
                return (
                  <Flex gap={2} key={index} flexDir="column">
                    <Flex flexDir="column">
                      <Text fontSize="large" fontWeight={600}>
                        {item.productDetails.productTitle}
                      </Text>
                      <Text>${item.productDetails.productPrice}</Text>
                    </Flex>
                    <Text>{`Quantity : ${item.cartItemAmount}`}</Text>
                  </Flex>
                );
              })}
            </Flex>
          ) : (
            <Text>Cart is empty...</Text>
          )}
        </DrawerBody>

        <DrawerFooter>
          <Flex gap={3} w="full" flexDir="column">
            {" "}
            <Text>Total: $ {cartItems.totalPrice}</Text>
            <Button variant="outline" mr={3} onClick={onClose}>
              Clear Cart
            </Button>
            <Button colorScheme="blue">Purchase</Button>
          </Flex>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default Cart;
