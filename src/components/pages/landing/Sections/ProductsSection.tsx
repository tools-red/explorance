import { Flex, Text } from "@chakra-ui/react";
import { GoArrowUpRight } from "react-icons/go";
import PrimaryLinkCTA from "~/components/global/Buttons/PrimaryLinkCTA";

import PrimaryGradientText from "~/components/global/Text/PrimaryGradientText";
import Tag from "~/components/global/Text/Tag";

const ProductsSection = () => {
  return (
    <Flex flexDir="column">
      <Flex align="flex-end" justify="space-between">
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
            Explore our innovative AI solutions designed to revolutionize <br />{" "}
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
    </Flex>
  );
};

export default ProductsSection;
