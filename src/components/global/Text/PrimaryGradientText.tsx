import { Flex, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { IconType } from "react-icons/lib";

interface PrimaryGradientTextProps {
  label: string;
  fontSize: string;
  textPosition?: string;
  lineHeight?: string;
  customColor?: boolean;
  customColorHex?: string;
  addOnLogo?: boolean;
  addOnLogoSize?: number;
  addOnLogoColor?: string;
  addOnLogoValue?: IconType;
}

const PrimaryGradientText: React.FC<PrimaryGradientTextProps> = ({
  label,
  fontSize,
  lineHeight,
  customColor,
  customColorHex,
  addOnLogo,
  addOnLogoSize,
  addOnLogoColor,
  addOnLogoValue,
}) => {
  return (
    <Flex gap={1} bg="none" align="center">
      {customColor ? (
        <Text
          bg="none"
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
      {addOnLogo ? (
        <Icon
          color={addOnLogoColor}
          bg="none"
          boxSize={addOnLogoSize}
          as={addOnLogoValue}
        />
      ) : (
        <></>
      )}
    </Flex>
  );
};

export default PrimaryGradientText;
