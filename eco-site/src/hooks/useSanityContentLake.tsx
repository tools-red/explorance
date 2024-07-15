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

  const fetchProductDetailsFromContentLake = async (
    slug: string
  ): Promise<ContentLakeProductsType[]> => {
    try {
      const productData =
        await client.fetch(`*[_type == "product" && slug.current == "${slug}"]{
        productId,
        productTitle,
        productPrice,
        productType,
        "slug": slug.current,
        productDescription,
        "ImageURL" : productImage.asset->url,
        }`);

      return productData as ContentLakeProductsType[];
    } catch (err) {
      console.log("Error");
      throw new Error("Error while fetching productData");
    }
  };

  return {
    fetchProductsFromContentLake,
    fetchProductDetailsFromContentLake,
  };
};

export default useSanityContentLake;
