import "swiper/css";

import { Box, Flex, Text } from "@chakra-ui/react";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";
import { fetchAllProductsQuery } from "../../../sanity/lib/queries";
import { ContentLakeProductsType } from "~/types/contentLake";
import { toTitleCase } from "~/utils/helpers";

import BreadCrumbs from "~/components/global/BreadCrumbs";
import ProductView from "~/components/product/ProductView";
import useCart from "~/hooks/useCart";
import useSanityContentLake from "~/hooks/useSanityContentLake";
import BasePageLayout from "~/layouts/BasePageLayout";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import ProductCard from "~/components/home/Products/ProductCard";

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
  const { addToCart } = useCart();
  const { query } = useRouter();

  const otherProducts = products?.filter(
    (product) => product.slug !== query.slug
  );

  return (
    <BasePageLayout>
      <Flex w={1150} marginX="auto" mt={10} flexDir="column">
        <BreadCrumbs
          crumbArray={[
            { crumbLabel: "Home", isSelected: false },
            {
              crumbLabel: `${toTitleCase(productData[0]?.productType ?? "")}`,
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
        <Box my={20}>
          <Flex gap={10} flexDir="column">
            <Text fontSize="2xl" className="marcellus-regular">
              Like what you see ? Checkout our other products
            </Text>
            <Swiper
              direction="horizontal"
              spaceBetween={10}
              slidesPerView={4}
              modules={[Autoplay, Navigation]}
              loop={true}
              autoplay={{ delay: 2000 }}
              style={{ flexDirection: "row", width: 1150 }} // Override flexDirection (optional)
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
                <Box>Couldn't load data, please refresh page</Box>
              )}
            </Swiper>
          </Flex>
        </Box>
      </Flex>
    </BasePageLayout>
  );
};

export default ProductViewPage;
