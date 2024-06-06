import { Flex, Text } from "@chakra-ui/react";
import FaqDropDown from "../Interactive/FaqDropDown";
import { FAQAccordingContent } from "~/constants";
import Tag from "~/components/global/Text/Tag";
import PrimaryGradientText from "~/components/global/Text/PrimaryGradientText";
import { GoArrowUpRight } from "react-icons/go";
import PrimaryLinkCTA from "~/components/global/Buttons/PrimaryLinkCTA";

const FaqSection = () => {
  return (
    <Flex fontFamily="SFPro" mb={30} mt={200} justify="space-between" w="full">
      <Flex justify="space-between" maxW={400} flexDir="column">
        <Flex gap={5} align="flex-start" flexDir="column">
          <Tag
            customColorHex="#A1AEE5"
            customColor={true}
            tag_label="Enhanced Solutions"
            addOnLogo={true}
            addOnLogoSize={4}
            addOnLogoColor="rgba(161, 174, 229, 0.65)"
            addOnLogoValue={GoArrowUpRight}
          />
          <PrimaryGradientText
            fontSize="40px"
            lineHeight="115.5%"
            label={`Frequently Asked Questions`}
          />
        </Flex>
        <Flex flexDir="column" align="flex-start" gap={5}>
          <Text color="#A0AEE5">
            Explore commonly asked questions about <br />
            our AI-powered solutions for campus tours and <br /> speaker
            sessions.
          </Text>
          <PrimaryLinkCTA
            CTA_labelSize="small"
            CTA_location="/"
            CTA_addOn={false}
            CTA_label="Get Started"
          />
        </Flex>
      </Flex>
      <Flex color="white" flexDir="column">
        <FaqDropDown
          allowMultiple={true}
          accordianContentArray={FAQAccordingContent}
        />
      </Flex>
    </Flex>
  );
};

export default FaqSection;
