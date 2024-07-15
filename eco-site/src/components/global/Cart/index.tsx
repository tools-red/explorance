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
  Icon,
  Text,
} from "@chakra-ui/react";
import { IoCloseCircle } from "react-icons/io5";
import useCart from "~/hooks/useCart";
import { useCartAtom } from "~/lib/atom";

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

const Cart: React.FC<CartProps> = ({ isOpen, onClose }) => {
  const [{ cartItems }] = useCartAtom();
  const { clearCart, removeFromCart } = useCart();

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
                      <Flex align="center" justify="space-between">
                        <Text fontSize="large" fontWeight={600}>
                          {item.productDetails.productTitle}
                        </Text>
                        <Icon
                          onClick={() =>
                            removeFromCart(item.productDetails.productId)
                          }
                          color="red"
                          boxSize={5}
                          as={IoCloseCircle}
                        />
                      </Flex>
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
            <Button variant="outline" mr={3} onClick={clearCart}>
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
