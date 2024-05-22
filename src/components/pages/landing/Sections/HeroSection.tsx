import { Flex } from "@chakra-ui/react";
import { URLs } from "~/constants";

import Navbar from "../../../global/Navbar";
import PrimaryGradientText from "~/components/global/Text/PrimaryGradientText";

const HeroSection = () => {
  return (
    <Flex flexDir="column">
      <Navbar URLs={URLs} />
      <PrimaryGradientText
        fontSize="40px"
        label="Transform Your Exploration Journey With Our Innovation AI Solutions"
      />
    </Flex>
  );
};

export default HeroSection;
