import { useCartAtom } from "~/lib/atom";
import { ContentLakeProductsType } from "~/types/contentLake";
import { CartItem } from "~/types/purchase";

const useCart = () => {
  const [{ cartItems }, setCartState] = useCartAtom();

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
          return { ...item, cartItemAmount: item.cartItemAmount + 1 };
        } else {
          return item;
        }
      });

      const newTotalPrice =
        cartItems.totalPrice + product.productPrice * (productQuantity ?? 1);

      setCartState({
        cartItems: { items: updatedCart, totalPrice: newTotalPrice },
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

  return { addToCart, removeFromCart };
};

export default useCart;
