import { Text } from "@chakra-ui/react";
import React from "react";

interface PrimaryGradientTextProps {
  label: string;
  fontSize: string;
  textPosition: string;
}

const PrimaryGradientText: React.FC<PrimaryGradientTextProps> = ({
  label,
  fontSize,
}) => {
  return (
    <Text
      bgGradient="linear(to-b, #B6C2F1 0%, #EBEFFF 100%)"
      bgClip="text"
      fontSize={fontSize}
      fontWeight={600}
    >
      {label}
    </Text>
  );
};

export default PrimaryGradientText;
