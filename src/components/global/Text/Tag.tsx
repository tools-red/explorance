import { Box, Text } from "@chakra-ui/react";
import React from "react";
import PrimaryGradientText from "./PrimaryGradientText";
import { IconType } from "react-icons/lib";

interface TagProps {
  tag_label: string;
  customColor?: boolean;
  customColorHex?: string;
  addOnLogo?: boolean;
  addOnLogoSize?: number;
  addOnLogoColor?: string;
  addOnLogoValue?: IconType;
}

const Tag: React.FC<TagProps> = ({
  tag_label,
  customColor,
  customColorHex,
  addOnLogo,
  addOnLogoSize,
  addOnLogoColor,
  addOnLogoValue,
}) => {
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
      <PrimaryGradientText
        customColor={customColor}
        customColorHex={customColorHex}
        label={tag_label}
        fontSize="small"
        addOnLogo={addOnLogo}
        addOnLogoSize={addOnLogoSize}
        addOnLogoColor={addOnLogoColor}
        addOnLogoValue={addOnLogoValue}
      />
    </Box>
  );
};

export default Tag;
