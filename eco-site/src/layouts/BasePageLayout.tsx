import { Box, Flex } from "@chakra-ui/react";
import React from "react";

interface BasePageLayoutProps {
  children: React.ReactNode;
}

const BasePageLayout: React.FC<BasePageLayoutProps> = ({ children }) => {
  return (
    <Flex flexDir={"column"}>
      <Box bg="red">{children}</Box>
    </Flex>
  );
};

export default BasePageLayout;
