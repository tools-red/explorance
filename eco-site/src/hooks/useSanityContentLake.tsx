import { CartItem } from "~/types/purchase";
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

  const updateContentLakeProductStock = async (cartItems: CartItem[]) => {
    try {
      const stock_updates = cartItems.map((item) => {
        // Validate product data (optional but recommended)
        console.log({
          patchID: item.productDetails.patchId,
          stockCount: item.productDetails.stockCount,
        });
        // if (!item.productDetails.patchId || !item.productDetails.stockCount) {
        //   throw new Error("Missing required product data: id or stock");
        // }

        // Construct the patch operation using the appropriate library function
        return client
          .patch(item.productDetails.patchId)
          .dec({ stockCount: item.cartItemAmount })
          .commit();
      });

      await Promise.all(stock_updates);
    } catch (err) {
      console.log(err);
      throw new Error(`Error while updating Sanity Content: ${err}`);
    }
  };

  return {
    fetchProductsFromContentLake,
    fetchProductDetailsFromContentLake,
    updateContentLakeProductStock,
  };
};

export default useSanityContentLake;
