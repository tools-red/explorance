import { Flex, Spacer, Text } from "@chakra-ui/react";
import { URLs } from "~/constants";

import Navbar from "../../../global/Navbar";
import PrimaryGradientText from "~/components/global/Text/PrimaryGradientText";

const HeroSection = () => {
  return (
    <Flex flexDir="column">
      <Navbar URLs={URLs} />
      <Text
        pt={120}
        bgGradient="linear(to-b, #A1AEE5 0%, #ECF0FF 100%)"
        bgClip="text"
        fontSize="xxx-large"
        fontFamily="SFPro"
        fontWeight={600}
        textAlign="center"
      >
        Transform Your Exploration Journey <br /> with out Innovative AI
        Solutions
      </Text>
    </Flex>
  );
};

export default HeroSection;
