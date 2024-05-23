import { Box, Text } from "@chakra-ui/react";
import React from "react";
import PrimaryGradientText from "./PrimaryGradientText";

interface TagProps {
  tag_label: string;
}

const Tag: React.FC<TagProps> = ({ tag_label }) => {
  return (
    <Box
      borderRadius={20}
      px={4}
      py={1}
      border="1px solid"
      borderColor="rgba(161, 174, 229, 0.2)"
      bg="rgba(255, 255, 255, 0.05)" // Semi-transparent background
      backdropFilter="blur(20px)" // Blur effect
      boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)" // Subtle shadow for depth
    >
      <PrimaryGradientText label={tag_label} fontSize="small" />
    </Box>
  );
};

export default Tag;
