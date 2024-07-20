import { useToast } from "@chakra-ui/react";
import { useCartAtom } from "~/lib/jotai/atom";
import { type ContentLakeProductsType } from "~/types/contentLake";
import { type CartItem } from "~/types/purchase";

const useCart = () => {
  const [{ cartItems }, setCartState] = useCartAtom();
  const toast = useToast();

  const addToCart = (
    product: ContentLakeProductsType,
    productQuantity?: number
  ) => {
    const existingItem = cartItems.items.find(
      (item) => item.productDetails.productId === product.productId
    );

    if (existingItem) {
      const updatedCart = cartItems.items.map((item) => {
        if (item.productDetails.productId === product.productId) {
          return {
            ...item,
            cartItemAmount: item.cartItemAmount + (productQuantity ?? 1),
          };
        } else {
          return item;
        }
      });

      const newTotalPrice =
        cartItems.totalPrice + product.productPrice * (productQuantity ?? 1);

      setCartState({
        cartItems: { items: updatedCart, totalPrice: newTotalPrice },
      });

      toast({
        title: "Added to cart",
        description: `Added ${product.productTitle} to cart`,
        status: "success",
        position: "bottom-left",
        duration: 9000,
        isClosable: true,
      });
    } else {
      const newItem: CartItem = {
        productDetails: product,
        cartItemAmount: productQuantity ?? 1,
      };

      const newTotalPrice =
        cartItems.totalPrice + product.productPrice * (productQuantity ?? 1);

      setCartState({
        cartItems: {
          items: [...cartItems.items, newItem],
          totalPrice: newTotalPrice,
        },
      });

      toast({
        title: "Added to cart",
        description: `Added ${product.productTitle} to cart`,
        status: "success",
        position: "bottom-left",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  const removeFromCart = (productId: string) => {
    const existingItem = cartItems.items.find(
      (item) => item.productDetails.productId === productId
    );

    if (existingItem) {
      const updatedCart = cartItems.items.filter(
        (item) => item.productDetails.productId !== productId
      );

      const newTotalPrice =
        cartItems.totalPrice -
        existingItem?.productDetails.productPrice *
          existingItem?.cartItemAmount;

      setCartState({
        cartItems: { items: updatedCart, totalPrice: newTotalPrice },
      });
    }
  };

  const clearCart = () => {
    setCartState({
      cartItems: {
        items: [],
        totalPrice: 0,
      },
    });
  };

  return { addToCart, removeFromCart, clearCart };
};

export default useCart;
