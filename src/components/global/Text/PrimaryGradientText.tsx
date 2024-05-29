import { Text } from "@chakra-ui/react";
import React from "react";

interface PrimaryGradientTextProps {
  label: string;
  fontSize: string;
  textPosition?: string;
  lineHeight?: string;
  customColor?: boolean;
  customColorHex?: string;
}

const PrimaryGradientText: React.FC<PrimaryGradientTextProps> = ({
  label,
  fontSize,
  lineHeight,
  customColor,
  customColorHex,
}) => {
  return (
    <>
      {customColor ? (
        <Text
          color={customColorHex}
          fontFamily="SFPro"
          fontSize={fontSize}
          fontWeight={600}
          lineHeight={lineHeight ?? ""}
        >
          {label}
        </Text>
      ) : (
        <Text
          bgGradient="linear(to-b, #B6C2F1 0%, #EBEFFF 100%)"
          bgClip="text"
          fontFamily="SFPro"
          fontSize={fontSize}
          fontWeight={600}
          lineHeight={lineHeight ?? ""}
        >
          {label}
        </Text>
      )}
    </>
  );
};

export default PrimaryGradientText;
