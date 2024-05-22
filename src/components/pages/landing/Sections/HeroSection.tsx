import { Flex } from "@chakra-ui/react";
import { URLs } from "~/constants";

import Navbar from "../../../global/Navbar";

const HeroSection = () => {
  return (
    <Flex flexDir="column">
      <Navbar URLs={URLs} />
    </Flex>
  );
};

export default HeroSection;
