import { Text } from "@chakra-ui/react";
import React from "react";

interface PrimaryGradientTextProps {
  label: string;
}

const PrimaryGradientText: React.FC<PrimaryGradientTextProps> = ({ label }) => {
  return (
    <Text
      bgGradient="linear(to-b, #B6C2F1 0%, #EBEFFF 100%)"
      bgClip="text"
      fontSize="xl"
      fontWeight={600}
    >
      {label}
    </Text>
  );
};

export default PrimaryGradientText;
