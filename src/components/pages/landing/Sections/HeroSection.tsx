import { Flex, Spacer, Text } from "@chakra-ui/react";
import { URLs } from "~/constants";

import Navbar from "../../../global/Navbar";
import PrimaryGradientText from "~/components/global/Text/PrimaryGradientText";

const HeroSection = () => {
  return (
    <Flex flexDir="column">
      <Navbar URLs={URLs} />
      <Text
        pt={150}
        fontSize="xxx-large"
        fontWeight={600}
        bgGradient="linear(to-b, #B6C2F1 0%, #EBEFFF 100%)"
        bgClip="text"
        textAlign="center"
      >
        Transform your exploration journey <br /> with out innovative AI
        solutions
      </Text>
    </Flex>
  );
};

export default HeroSection;
