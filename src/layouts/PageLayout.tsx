import { Flex } from "@chakra-ui/react";
import React from "react";

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <Flex bg="#030515" justify="center">
      <Flex gap={20} flexDir="column" w={1100}>
        {children}
      </Flex>
    </Flex>
  );
};

export default PageLayout;
