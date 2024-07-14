import { Flex } from "@chakra-ui/react";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import HeroCarousel from "~/components/home/HeroCarousel";
import Products from "~/components/home/Products";
import useSanityContentLake from "~/hooks/useSanityContentLake";
import BasePageLayout from "~/layouts/BasePageLayout";
import { ContentLakeProductsType } from "~/types/contentLake";

export const getServerSideProps = (async () => {
  const { fetchProductsFromContentLake } = useSanityContentLake();
  const products = await fetchProductsFromContentLake();
  // Pass data to the page via props
  return { props: { products } };
}) satisfies GetServerSideProps<{ products: ContentLakeProductsType[] }>;

const Home = ({
  products,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  console.log({ products });
  return (
    <BasePageLayout>
      <Flex flexDir="column">
        <HeroCarousel />
      </Flex>
      <Products products={products} />
    </BasePageLayout>
  );
};

export default Home;
