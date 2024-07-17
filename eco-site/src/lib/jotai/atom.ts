import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { cartAtomStateType } from "~/types/atom";

const cartAtom = atomWithStorage<cartAtomStateType>("CartAtomState", {
  cartItems: { items: [], totalPrice: 0 },
});

export const useCartAtom = () => useAtom(cartAtom);
