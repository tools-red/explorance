import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { cartAtomStateType } from "~/types/atom";

const cartAtom = atomWithStorage<cartAtomStateType>("CartAtomState", {
  cartItems: [],
});

export const useCartAtom = () => useAtom(cartAtom);
