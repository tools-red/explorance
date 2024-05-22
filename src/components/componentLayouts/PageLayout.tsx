import { Box } from "@chakra-ui/react";
import React from "react";

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <Box bg="yellow" maxW={1200}>
      {children}
    </Box>
  );
};

export default PageLayout;
