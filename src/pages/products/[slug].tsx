import "swiper/css";

import { Box, Flex, Text } from "@chakra-ui/react";
import {
  type GetServerSideProps,
  type InferGetServerSidePropsType,
} from "next";
import { useRouter } from "next/router";
import { fetchAllProductsQuery } from "../../../sanity/lib/queries";
import { type ContentLakeProductsType } from "~/types/contentLake";

import BreadCrumbs from "~/components/global/BreadCrumbs";
import ProductView from "~/components/product/ProductView";
import useCart from "~/hooks/useCart";
import useSanityContentLake from "~/hooks/useSanityContentLake";
import BasePageLayout from "~/layouts/BasePageLayout";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import ProductCard from "~/components/home/Products/ProductCard";
import useWindowDimensions from "~/hooks/useWindowDemensions";

export const getServerSideProps = (async (context) => {
  const { fetchProductDetailsFromContentLake, fetchProductsFromContentLake } =
    useSanityContentLake();
  const productData = await fetchProductDetailsFromContentLake(
    context.query.slug as string
  );
  const products = await fetchProductsFromContentLake(fetchAllProductsQuery);
  return { props: { productData, products } };
}) satisfies GetServerSideProps<{
  productData: ContentLakeProductsType[];
  products: ContentLakeProductsType[];
}>;

const ProductViewPage = ({
  productData,
  products,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { width } = useWindowDimensions();
  const { query } = useRouter();

  const { addToCart } = useCart();

  const otherProducts = products?.filter(
    (product) => product.slug !== query.slug
  );

  return (
    <BasePageLayout products={products}>
      <Flex w="100%" maxW={1150} marginX="auto" mt={10} flexDir="column">
        <BreadCrumbs
          crumbArray={[
            { crumbLabel: "Home", isSelected: false },
            {
              crumbLabel: "Collection",
              isSelected: false,
            },
            {
              crumbLabel: `${productData[0]?.productTitle ?? ""}`,
              isSelected: true,
            },
          ]}
          selectedIndex={2}
        />
        <ProductView addToCart={addToCart} productData={productData[0]} />
        <Box px={[5, 5, 0]} my={[10, 10, 20]}>
          <Flex justify="center" gap={10} flexDir="column">
            <Text fontSize={["xl", "xl", "2xl"]} className="marcellus-regular">
              Like what you see ? Checkout our other products
            </Text>
            <Box ml={[10, 10, 0]}>
              <Swiper
                direction="horizontal"
                spaceBetween={10}
                slidesPerView={
                  width && width < 600 ? 1 : width && width < 900 ? 3 : 4
                }
                modules={[Autoplay, Navigation]}
                loop={true}
                autoplay={{ delay: 2000 }}
                style={{
                  flexDirection: "row",
                  width: "100%",
                  maxWidth: 1150,
                }} // Override flexDirection (optional)
              >
                {otherProducts?.length && otherProducts.length >= 1 ? (
                  otherProducts.map((product, i) => (
                    <SwiperSlide key={i}>
                      <Box>
                        <ProductCard
                          width={250}
                          height={350}
                          addToCart={addToCart}
                          product={product}
                        />
                      </Box>
                    </SwiperSlide>
                  ))
                ) : (
                  <Box>Couldn&apos;t load data, please refresh page</Box>
                )}
              </Swiper>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </BasePageLayout>
  );
};

export default ProductViewPage;
