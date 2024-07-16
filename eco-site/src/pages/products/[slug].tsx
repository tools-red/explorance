import { Flex, Spinner, Text } from "@chakra-ui/react";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";
import BreadCrumbs from "~/components/global/BreadCrumbs";
import ProductView from "~/components/product/ProductView";
import useCart from "~/hooks/useCart";
import useSanityContentLake from "~/hooks/useSanityContentLake";
import BasePageLayout from "~/layouts/BasePageLayout";
import { ContentLakeProductsType } from "~/types/contentLake";
import { toTitleCase } from "~/utils/helpers";

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
  const { addToCart } = useCart();

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
      </Flex>
    </BasePageLayout>
  );
};

export default ProductViewPage;
