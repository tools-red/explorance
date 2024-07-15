import { Flex, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import BasePageLayout from "~/layouts/BasePageLayout";

const ProductViewPage = () => {
  const router = useRouter();
  console.log(router.query.slug);
  return (
    <BasePageLayout>
      <Text>Hi this page is for {router.query.slug}</Text>
    </BasePageLayout>
  );
};

export default ProductViewPage;
