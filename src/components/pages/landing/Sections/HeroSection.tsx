import { Box, Flex, Text } from "@chakra-ui/react";
import { URLs } from "~/constants";

import { FaCompass } from "react-icons/fa6";
import { FaMicrophone } from "react-icons/fa";

import HeroImage from "../../../../../public/StaticImages/HeroImg.png";

import Navbar from "../../../global/Navbar";
import Tag from "~/components/global/Text/Tag";
import PrimaryLinkCTA from "~/components/global/Buttons/PrimaryLinkCTA";
import Image from "next/image";

const HeroSection = () => {
  return (
    <Flex flexDir="column">
      <Navbar URLs={URLs} />
      <Flex mt="80px" gap={4} align="center" w="full" flexDir="column">
        <Tag tag_label="Experience more in less time with AI" />
        <Text
          bgGradient="linear(to-b, #A1AEE5 0%, #ECF0FF 100%)"
          bgClip="text"
          fontSize="50px"
          fontFamily="SFPro"
          fontWeight={600}
          textAlign="center"
          lineHeight={"120%"}
          maxW={800}
        >
          Transform Your Exploration Journey with out Innovative AI Solutions
        </Text>
        <Text
          fontFamily="SFPro"
          fontSize="large"
          color="#A0AEE5"
          textAlign="center"
        >
          Discover more and save time with our cutting-edge AI technology. Enjoy{" "}
          <br />
          personalized, real-time guided tours and interactive speaker sessions.
        </Text>
        <Flex mt={2} gap={3}>
          <PrimaryLinkCTA
            CTA_addOnIcon={true}
            CTA_addOnIconValue={FaCompass}
            CTA_labelSize="small"
            CTA_addOn={false}
            CTA_label="Explore Campus Tours"
            CTA_location="/tour"
          />
          <PrimaryLinkCTA
            CTA_addOnIcon={true}
            CTA_addOnIconValue={FaMicrophone}
            CTA_labelSize="small"
            CTA_addOn={false}
            CTA_label="Explore Campus Events"
            CTA_location="/events"
          />
        </Flex>
        <Box
          border="1px solid"
          borderColor="rgba(161, 174, 229, 0.2)"
          borderRadius={40}
          overflow={"hidden"}
          mt={8}
          width={1050}
        >
          <Image alt="Hero-Image" src={HeroImage} objectFit="cover" />
        </Box>
      </Flex>
    </Flex>
  );
};

export default HeroSection;
