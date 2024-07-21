import { type SetStateAction } from "jotai";
import { type Dispatch } from "react";
import { type CheckoutFormType } from "~/types/form";
import {
  type CreatePurchasePromiseType,
  type FetchPurchasePromiseType,
} from "~/types/promises";
import { type Cart } from "~/types/purchase";
import { api } from "~/utils/api";

const useOrder = () => {
  const createPurchaseMut = api.purchase.createPurchase.useMutation();
  const dispatchPurchaseMut =
    api.purchase.dispatchPurchaseRequest.useMutation();

  const { refetch: fetchPurchaseOrders } = api.purchase.fetchPurchases.useQuery(
    undefined,
    {
      enabled: false,
    }
  );

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

  const handleFetchOrders = async (): Promise<
    FetchPurchasePromiseType[] | undefined
  > => {
    try {
      const { data, error } = await fetchPurchaseOrders();
      const purchase_orders_response = data?.orders;

      if (error)
        throw new Error(`Something went wrong while fetching prodcut data`);

      return purchase_orders_response as FetchPurchasePromiseType[] | undefined;
    } catch (err) {}
  };

  const handleDispatchOrder = async (
    customer_email: string,
    customer_name: string,
    id: string,
    purchase_Id: string,
    setError: Dispatch<SetStateAction<boolean>>,
    setErrorMessage: Dispatch<SetStateAction<string>>
  ): Promise<boolean> => {
    try {
      const { data, dispatch_status } = await dispatchPurchaseMut.mutateAsync({
        customer_email,
        customer_name,
        id,
        purchase_Id,
      });

      if (!data) {
        setError(true);
        setErrorMessage("Error while recieving server update reponse");
        throw new Error("Error while recieving server update reponse");
      }

      return dispatch_status;
    } catch (err) {
      setError(true);
      setErrorMessage("Something went wrong, view console");
      throw new Error(`Handle Reqeuest went wrong`);
    }
  };

  return { createOrder, handleFetchOrders, handleDispatchOrder };
};

export default useOrder;
