import { Flex } from "@chakra-ui/react";
import React from "react";

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <Flex justify="center">
      <Flex flexDir="column" w={1100}>
        {children}
      </Flex>
    </Flex>
  );
};

export default PageLayout;
