import { Flex, Text } from "@chakra-ui/react";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";
import useSanityContentLake from "~/hooks/useSanityContentLake";
import BasePageLayout from "~/layouts/BasePageLayout";
import { ContentLakeProductsType } from "~/types/contentLake";

export const getServerSideProps = (async (context) => {
  const { fetchProductDetailsFromContentLake } = useSanityContentLake();
  const productData = await fetchProductDetailsFromContentLake(
    context.query.slug as string
  );
  return { props: { productData } };
}) satisfies GetServerSideProps<{
  productData: ContentLakeProductsType | undefined;
}>;

const ProductViewPage = ({
  productData,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const router = useRouter();
  console.log({ productData });
  return (
    <BasePageLayout>
      <Text>Hi this page is for {router.query.slug}</Text>
    </BasePageLayout>
  );
};

export default ProductViewPage;
