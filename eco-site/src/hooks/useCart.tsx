import { cartAtomStateType } from "~/types/atom";

const useCart = () => {
  const addToCart = (cart: cartAtomStateType) => {};
  return { addToCart };
};

export default useCart;
