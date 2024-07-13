import { client } from "../../sanity/lib/client";
import { fetchAllProducts } from "../../sanity/lib/queries";
import { ContentLakeProductsType } from "~/types/contentLake";

const useSanityContentLake = () => {
  const fetchProductsFromContentLake = async (): Promise<
    ContentLakeProductsType[]
  > => {
    try {
      const productsData = await client.fetch(fetchAllProducts);
      return productsData as ContentLakeProductsType[];
    } catch (err) {
      console.log("Error");
      throw new Error("Error while fetching products");
    }
  };
  return {
    fetchProductsFromContentLake,
  };
};

export default useSanityContentLake;
