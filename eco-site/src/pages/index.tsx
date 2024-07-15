import { Flex } from "@chakra-ui/react";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import {
  fetchAllProductsQuery,
  fetchAllFeaturedProductsQuery,
} from "../../sanity/lib/queries";
import HeroCarousel from "~/components/home/HeroCarousel";
import HeroText from "~/components/home/HeroText";
import Products from "~/components/home/Products";
import useSanityContentLake from "~/hooks/useSanityContentLake";
import BasePageLayout from "~/layouts/BasePageLayout";
import { ContentLakeProductsType } from "~/types/contentLake";
import FeaturedProducts from "~/components/home/FeaturedProducts";

export const getServerSideProps = (async () => {
  const { fetchProductsFromContentLake } = useSanityContentLake();
  const products = await fetchProductsFromContentLake(fetchAllProductsQuery);
  const featuredProducts = await fetchProductsFromContentLake(
    fetchAllFeaturedProductsQuery
  );
  // Pass data to the page via props
  return { props: { products, featuredProducts } };
}) satisfies GetServerSideProps<{
  products: ContentLakeProductsType[];
  featuredProducts: ContentLakeProductsType[];
}>;

const Home = ({
  products,
  featuredProducts,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  console.log({ products, featuredProducts });
  return (
    <BasePageLayout>
      <Flex flexDir="column">
        <HeroText />
        <HeroCarousel />
      </Flex>
      <FeaturedProducts featuredProducts={featuredProducts} />
      <Products products={products} />
    </BasePageLayout>
  );
};

export default Home;
