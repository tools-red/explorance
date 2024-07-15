import { Flex, Spinner, Text } from "@chakra-ui/react";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";
import ProductView from "~/components/product/ProductView";
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
  productData: ContentLakeProductsType[];
}>;

const ProductViewPage = ({
  productData,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  console.log({ productData });
  return (
    <BasePageLayout>
      <ProductView
        productNameCrumb={productData[0]?.productTitle ?? ""}
        productTypeCrumb={productData[0]?.productType ?? ""}
      />
    </BasePageLayout>
  );
};

export default ProductViewPage;
