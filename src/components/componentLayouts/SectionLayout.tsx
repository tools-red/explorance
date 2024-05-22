import { Box } from "@chakra-ui/react";
import React from "react";

interface SectionLayoutProps {
  children: React.ReactNode;
}

const SectionLayout: React.FC<SectionLayoutProps> = ({ children }) => {
  return (
    <Box bg="yellow" maxW={1200}>
      {children}
    </Box>
  );
};

export default SectionLayout;
