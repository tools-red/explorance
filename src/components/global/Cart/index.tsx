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
import { IoClose } from "react-icons/io5";
import { useCartAtom } from "~/lib/jotai/atom";

import useCart from "~/hooks/useCart";
import Image from "next/image";

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
      <DrawerContent color="white" bg="#222121">
        <DrawerCloseButton />
        <DrawerHeader fontWeight={300} className="marcellus-regular">
          Cart
        </DrawerHeader>

        <DrawerBody>
          {cartItems.items.length > 0 ? (
            <Flex gap={3} flexDir="column">
              {cartItems.items.map((item, index) => {
                return (
                  <Flex key={index} gap={5}>
                    <Image
                      src={item.productDetails.ImageURL}
                      width={50}
                      height={50}
                      alt={`Image-Product-${item.productDetails.productId}`}
                    />
                    <Flex w="full" gap={2} flexDir="column">
                      <Flex gap={1} flexDir="column">
                        <Flex align="center" justify="space-between">
                          <Text
                            fontWeight={300}
                            className="marcellus-regular"
                            fontSize="large"
                          >
                            {item.productDetails.productTitle}
                          </Text>
                          <Icon
                            onClick={() =>
                              removeFromCart(item.productDetails.productId)
                            }
                            cursor="pointer"
                            color="white"
                            boxSize={4}
                            as={IoClose}
                          />
                        </Flex>
                        <Text fontSize="small" fontWeight={300}>
                          ${item.productDetails.productPrice}
                        </Text>
                      </Flex>
                      <Text
                        color="#949494"
                        fontSize="small"
                      >{`Quantity : ${item.cartItemAmount}`}</Text>
                    </Flex>
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
            <Flex justify="space-between">
              <Text className="marcellus-regular">Total:</Text>
              <Text>${cartItems.totalPrice}</Text>
            </Flex>
            <Button
              bg="#CC724F"
              border="none"
              color="white"
              variant="outline"
              _hover={{ bg: "#AB4C15" }}
              onClick={clearCart}
            >
              Clear Cart
            </Button>
            <Button
              isDisabled={cartItems.items.length === 0 ? true : false}
              onClick={() => (window.location.href = "/checkout")}
              bg="#FAF1EC"
              color="#CC724F"
            >
              Purchase
            </Button>
          </Flex>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default Cart;
