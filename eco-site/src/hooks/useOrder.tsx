import { SetStateAction } from "jotai";
import { Dispatch } from "react";
import { CheckoutFormType } from "~/types/form";
import { CreatePurchasePromiseType } from "~/types/promises";
import { Cart } from "~/types/purchase";
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
