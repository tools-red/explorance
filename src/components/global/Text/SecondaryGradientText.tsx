import { Text } from "@chakra-ui/react";
import React from "react";

interface SecondaryGradientTextProps {
  label: string;
  fontSize: string;
  textPosition?: string;
}

const SecondaryGradientText: React.FC<SecondaryGradientTextProps> = ({
  label,
  fontSize,
}) => {
  return (
    <Text
      bgGradient="linear(to-b, #A1AEE5 0%, #ECF0FF 100%)"
      bgClip="text"
      fontFamily="SFPro"
      fontSize={fontSize}
      fontWeight={600}
    >
      {label}
    </Text>
  );
};

export default SecondaryGradientText;
