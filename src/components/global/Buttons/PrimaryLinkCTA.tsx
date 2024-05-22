import { Box, Button, Flex, Icon, Text } from "@chakra-ui/react";
import { GoArrowUpRight } from "react-icons/go";

import React from "react";
import PrimaryGradientText from "../Text/PrimaryGradientText";

interface PrimaryCTALinkProps {
  CTA_label: string;
  CTA_location: string;
  CTA_addOn: boolean;
  CTA_addOnLabel?: string;
  CTA_addOnLabelSize?: string;
}

const PrimaryLinkCTA: React.FC<PrimaryCTALinkProps> = ({
  CTA_label,
  CTA_location,
  CTA_addOn,
  CTA_addOnLabel,
  CTA_addOnLabelSize,
}) => {
  return (
    <Button
      py={5}
      border="1px solid"
      borderRadius={20}
      borderColor="rgba(161, 174, 229, 0.2)"
      variant="none"
      as="a"
      href={CTA_location}
    >
      {CTA_addOn ? (
        <Flex gap={2} align="center">
          <PrimaryGradientText fontSize="small" label={CTA_label} />
          <Text color="rgba(161, 174, 229, 0.65)" bg="none">
            &#x2022;
          </Text>
          <Flex align="center" gap={1}>
            <Text
              fontSize={CTA_addOnLabelSize}
              color="rgba(161, 174, 229, 0.65)"
            >
              {CTA_addOnLabel}
            </Text>
            <Icon
              boxSize={4}
              color="rgba(161, 174, 229, 0.65)"
              as={GoArrowUpRight}
            />
          </Flex>
        </Flex>
      ) : (
        <Flex gap={1} align="center">
          <PrimaryGradientText fontSize="small" label={CTA_label} />
          <Icon
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
