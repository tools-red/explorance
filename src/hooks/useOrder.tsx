import { type SetStateAction } from "jotai";
import { type Dispatch } from "react";
import { type CheckoutFormType } from "~/types/form";
import { type CreatePurchasePromiseType } from "~/types/promises";
import { type Cart } from "~/types/purchase";
import { api } from "~/utils/api";

const useOrder = () => {
  const createPurchaseMut = api.purchase.createPurchase.useMutation();

  const createOrder = async (
    values: CheckoutFormType,
    cart: Cart,
    setError: Dispatch<SetStateAction<boolean>>,
    setErrorMessage: Dispatch<SetStateAction<string>>
  ): Promise<CreatePurchasePromiseType | undefined> => {
    try {
      const create_purchase_response = await createPurchaseMut.mutateAsync({
        formData: values,
        purchaseDetails: cart,
      });
      return create_purchase_response as CreatePurchasePromiseType;
    } catch (err) {
      console.log(err);
      setError(true);
      setErrorMessage("Error while generating order");
      throw new Error("Error while generating order");
    }
  };
  return { createOrder };
};

export default useOrder;
