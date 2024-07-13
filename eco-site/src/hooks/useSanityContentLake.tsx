import { FetchProductsFromSanityContentLakeType } from "~/types/promises";
import { client } from "../../sanity/lib/client";
import { fetchAllProducts } from "../../sanity/lib/queries";
import { Dispatch, SetStateAction } from "react";
import { ContentLakeProductsType } from "~/types/contentLake";

const useSanityContentLake = (
  setIsFetching: Dispatch<SetStateAction<boolean>>,
  setContentLakeProducts: Dispatch<SetStateAction<ContentLakeProductsType>>,
  setErrorMessage: Dispatch<SetStateAction<string>>
) => {
  const fetchProductsFromContentLake =
    async (): Promise<FetchProductsFromSanityContentLakeType> => {
      try {
        setIsFetching(true);
        const productsData = await client.fetch(fetchAllProducts);
        setIsFetching(false);
        setContentLakeProducts(productsData as ContentLakeProductsType);
        return productsData as FetchProductsFromSanityContentLakeType;
      } catch (err) {
        console.log("Error");
        setErrorMessage(
          "Error while fetching products, try reloading the page"
        );
        setIsFetching(false);
        throw new Error("Error while fetching products");
      }
    };
  return {
    fetchProductsFromContentLake,
  };
};

export default useSanityContentLake;
