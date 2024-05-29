import { Flex, Text } from "@chakra-ui/react";
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
