import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import Navigation from "~/components/Navigation";

interface BasePageLayoutProps {
  children: React.ReactNode;
}

const BasePageLayout: React.FC<BasePageLayoutProps> = ({ children }) => {
  return (
    <Flex flexDir={"column"}>
      <Navigation />
      <Box bg="red">{children}</Box>
    </Flex>
  );
};

export default BasePageLayout;
