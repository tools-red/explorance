import { Flex, Text } from "@chakra-ui/react";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import HeroCarousel from "~/components/home/HeroCarousel";
import useSanityContentLake from "~/hooks/useSanityContentLake";
import BasePageLayout from "~/layouts/BasePageLayout";
import { ContentLakeProductsType } from "~/types/contentLake";

export const getServerSideProps = (async () => {
  const { fetchProductsFromContentLake } = useSanityContentLake();
  const products = await fetchProductsFromContentLake();
  return { props: { products } };
}) satisfies GetServerSideProps<{ products: ContentLakeProductsType[] }>;

const Home = ({
  products,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <BasePageLayout>
      <Flex flexDir="column">
        <HeroCarousel />
      </Flex>
      <Flex flexDir="column">
        {products?.map((product, index) => {
          return <Text key={index}>{product?.productTitle}</Text>;
        })}
      </Flex>
    </BasePageLayout>
  );
};

export default Home;
