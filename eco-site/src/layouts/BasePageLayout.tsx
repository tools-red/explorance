import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import Footer from "~/components/global/Footer/Footer";
import Navigation from "~/components/global/Navigation";
import { ContentLakeProductsType } from "~/types/contentLake";

interface BasePageLayoutProps {
  children: React.ReactNode;
  products: ContentLakeProductsType[];
}

const BasePageLayout: React.FC<BasePageLayoutProps> = ({
  children,
  products,
}) => {
  return (
    <Flex flexDir={"column"}>
      <Navigation products={products} />
      <Box>{children}</Box>
      <Footer />
    </Flex>
  );
};

export default BasePageLayout;
