import { client } from "../../sanity/lib/client";
import { fetchAllProducts } from "../../sanity/lib/queries";

const useSanityContentLake = () => {
  const fetchProductsFromContentLake = async () => {
    try {
      const productsData = await client.fetch(fetchAllProducts);
      return;
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
