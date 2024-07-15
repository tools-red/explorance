import { Flex, Text } from "@chakra-ui/react";
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
  productData: ContentLakeProductsType | undefined;
}>;

const ProductViewPage = ({
  productData,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const router = useRouter();
  return (
    <BasePageLayout>
      <ProductView
        productNameCrumb={productData?.productTitle ?? ""}
        productTypeCrumb={productData?.productType ?? ""}
      />
    </BasePageLayout>
  );
};

export default ProductViewPage;
