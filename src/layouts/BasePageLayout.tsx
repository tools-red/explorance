import { Box } from "@chakra-ui/react";
import React from "react";
import Navigation from "~/components/global/Navigation";
import { type ContentLakeProductsType } from "~/types/contentLake";

interface BasePageLayoutProps {
  children: React.ReactNode;
  products: ContentLakeProductsType[];
}

const BasePageLayout: React.FC<BasePageLayoutProps> = ({
  children,
  products,
}) => {
  return (
    <Box>
      <Navigation products={products} />
      <Box>{children}</Box>
      {/* <Footer /> */}
    </Box>
  );
};

export default BasePageLayout;
