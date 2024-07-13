import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import Navigation from "~/components/global/Navigation";

interface BasePageLayoutProps {
  children: React.ReactNode;
}

const BasePageLayout: React.FC<BasePageLayoutProps> = ({ children }) => {
  return (
    <Flex flexDir={"column"}>
      <Navigation />
      <Box>{children}</Box>
    </Flex>
  );
};

export default BasePageLayout;
