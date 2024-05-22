import { Button } from "@chakra-ui/react";
import React from "react";

interface PrimaryCTALinkProps {
  CTA_label: string;
  CTA_location: string;
  CTA_addOn: boolean;
  CTA_addOnLabel?: string;
}

const PrimaryLinkCTA: React.FC<PrimaryCTALinkProps> = ({
  CTA_label,
  CTA_location,
}) => {
  return (
    <Button as="a" href={CTA_location}>
      {CTA_label}
    </Button>
  );
};

export default PrimaryLinkCTA;
