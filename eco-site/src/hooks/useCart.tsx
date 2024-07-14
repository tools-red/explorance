import { ContentLakeProductsType } from "~/types/contentLake";
import { CartItem } from "~/types/purchase";
import { useCartAtom } from "~/lib/atom";

const useCart = () => {
  const [{ cartItems }, setCart] = useCartAtom();

  const addToCart = (purchaseItem: ContentLakeProductsType, amt: number) => {
    const itemToBeAdded: CartItem = {
      productDetails: purchaseItem,
      cartItemAmount: amt,
    };

    if (cartItems.items) {
      setCart((prevCart) => {
        const updatedCart = { ...prevCart };

        if (!updatedCart.cartItems.items.includes(itemToBeAdded)) {
          updatedCart.cartItems.items.push(itemToBeAdded);
        } else {
        }

        return updatedCart;
      });
    } else {
      // Handle initial cart or empty cart scenario
      setCart({ cartItems: { items: [itemToBeAdded], totalPrice: 0 } });
    }
  };

  return { addToCart };
};

export default useCart;
