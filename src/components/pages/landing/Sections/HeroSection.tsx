import Navbar from "../Navbar";
import { Flex } from "@chakra-ui/react";
import { URLs } from "~/constants";

const HeroSection = () => {
  return (
    <Flex flexDir="column">
      <Navbar URLs={URLs} />
    </Flex>
  );
};

export default HeroSection;
