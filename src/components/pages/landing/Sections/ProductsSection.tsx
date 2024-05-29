import { Flex } from "@chakra-ui/react";
import { GoArrowUpRight } from "react-icons/go";

import PrimaryGradientText from "~/components/global/Text/PrimaryGradientText";
import Tag from "~/components/global/Text/Tag";

const ProductsSection = () => {
  return (
    <Flex flexDir="column">
      <Flex>
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
        <Flex flexDir="column"></Flex>
      </Flex>
    </Flex>
  );
};

export default ProductsSection;
