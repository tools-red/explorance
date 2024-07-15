import { client } from "../../sanity/lib/client";
import { ContentLakeProductsType } from "~/types/contentLake";

const useSanityContentLake = () => {
  const fetchProductsFromContentLake = async (
    query: string
  ): Promise<ContentLakeProductsType[]> => {
    try {
      const productsData = await client.fetch(query);
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
