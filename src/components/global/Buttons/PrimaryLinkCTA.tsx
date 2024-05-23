import { Box, Button, Flex, Icon, Text } from "@chakra-ui/react";
import { GoArrowUpRight } from "react-icons/go";

import React from "react";
import PrimaryGradientText from "../Text/PrimaryGradientText";
import { IconType } from "react-icons/lib";

interface PrimaryCTALinkProps {
  CTA_label: string;
  CTA_labelSize: string;
  CTA_location: string;
  CTA_addOn: boolean;
  CTA_addOnIcon?: boolean;
  CTA_addOnIconValue?: IconType;
  CTA_addOnLabel?: string;
  CTA_addOnLabelSize?: string;
}

const PrimaryLinkCTA: React.FC<PrimaryCTALinkProps> = ({
  CTA_label,
  CTA_labelSize,
  CTA_location,
  CTA_addOn,
  CTA_addOnIcon,
  CTA_addOnLabel,
  CTA_addOnLabelSize,
  CTA_addOnIconValue,
}) => {
  return (
    <Button
      px={6}
      py={5}
      border="1px solid"
      borderRadius={20}
      borderColor="rgba(161, 174, 229, 0.2)"
      variant="none"
      bg="rgba(255, 255, 255, 0.05)" // Semi-transparent background
      backdropFilter="blur(20px)" // Blur effect
      boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
      as="a"
      href={CTA_location}
    >
      {CTA_addOn ? (
        <Flex bg="none" gap={2} align="center">
          {CTA_addOnIcon ? (
            <Icon color="#A1AEE5" bg="none" as={CTA_addOnIconValue} />
          ) : (
            <></>
          )}
          <PrimaryGradientText fontSize={CTA_labelSize} label={CTA_label} />
          <Text color="rgba(161, 174, 229, 0.65)" bg="none">
            &#x2022;
          </Text>
          <Flex bg="none" align="center" gap={2}>
            <Text
              bg="none"
              fontSize={CTA_addOnLabelSize}
              color="rgba(161, 174, 229, 0.65)"
            >
              {CTA_addOnLabel}
            </Text>
            <Icon
              bg="none"
              boxSize={4}
              color="rgba(161, 174, 229, 0.65)"
              as={GoArrowUpRight}
            />
          </Flex>
        </Flex>
      ) : (
        <Flex bg="none" gap={2} align="center">
          {CTA_addOnIcon ? (
            <Icon color="#A1AEE5" bg="none" as={CTA_addOnIconValue} />
          ) : (
            <></>
          )}
          <PrimaryGradientText fontSize={CTA_labelSize} label={CTA_label} />
          <Icon
            bg="none"
            boxSize={4}
            color="rgba(161, 174, 229, 0.65)"
            as={GoArrowUpRight}
          />
        </Flex>
      )}
    </Button>
  );
};

export default PrimaryLinkCTA;
