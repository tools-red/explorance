import { Flex, Text } from "@chakra-ui/react";

import { GoArrowUpRight } from "react-icons/go";
import { FaArrowsDownToPeople } from "react-icons/fa6";
import { MdKeyboardCommandKey } from "react-icons/md";

import CampusTourGuideImage from "../../../../../public/StaticImages/CampusTourGuide.png";
import CampusTourInteractionImage from "../../../../../public/StaticImages/CampusTourInteraction.png";

import PrimaryLinkCTA from "~/components/global/Buttons/PrimaryLinkCTA";
import PrimaryCardType from "~/components/pages/landing/Cards/PrimaryCardType";

import PrimaryGradientText from "~/components/global/Text/PrimaryGradientText";
import Tag from "~/components/global/Text/Tag";

const ProductsSection = () => {
  return (
    <Flex gap={20} flexDir="column">
      <Flex px={10} align="flex-end" justify="space-between">
        <Flex gap={5} maxW={350} align="flex-start" flexDir="column">
          <Tag
            customColorHex="#A1AEE5"
            customColor={true}
            tag_label="Our Products"
            addOnLogo={true}
            addOnLogoSize={4}
            addOnLogoColor="rgba(161, 174, 229, 0.65)"
            addOnLogoValue={GoArrowUpRight}
          />
          <PrimaryGradientText
            fontSize="40px"
            lineHeight="115.5%"
            label={`Discover Our AI-
            Powered Solutions`}
          />
        </Flex>
        <Flex gap={6} align="flex-start" flexDir="column">
          <Text fontFamily="SFPro" fontSize="medium" color="#A0AEE5">
            Explore our innovative AI solutions designed to revolutionize <br />
            your exploration and learning experiences. sessions.
          </Text>
          <PrimaryLinkCTA
            CTA_labelSize="small"
            CTA_location="/"
            CTA_addOn={false}
            CTA_label="Get Started"
          />
        </Flex>
      </Flex>
      <Flex justify="space-between">
        <PrimaryCardType
          CardWidth="49%"
          CardTitle="AI Powered Campus Tours"
          CardIcon={FaArrowsDownToPeople}
          CardImage={CampusTourGuideImage}
          CardText="Enjoy real-time guided tours, interactive 360-degree views, intuitive navigation, and accessibility features."
        />
        <PrimaryCardType
          CardWidth="49%"
          CardTitle="Interactive Speaker Sessions"
          CardIcon={MdKeyboardCommandKey}
          CardImage={CampusTourInteractionImage}
          CardText="Access real-time interactions, request quick summaries, and navigate session content efficiently."
        />
      </Flex>
    </Flex>
  );
};

export default ProductsSection;
