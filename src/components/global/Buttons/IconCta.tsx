import { Icon } from "@chakra-ui/react";
import React from "react";
import { type IconType } from "react-icons/lib";

interface IconCTAProps {
  EventHandler: React.MouseEventHandler<SVGElement> | undefined;
  CTAIcon: IconType;
}

const IconCTA: React.FC<IconCTAProps> = ({ EventHandler, CTAIcon }) => {
  return (
    <Icon
      transition="all 0.3s"
      onClick={EventHandler}
      cursor="pointer"
      _hover={{ color: "#CC723F" }}
      boxSize={5}
      as={CTAIcon}
    />
  );
};

export default IconCTA;
