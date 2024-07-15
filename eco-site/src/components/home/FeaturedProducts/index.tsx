import { Box, Flex, Text } from "@chakra-ui/react";
import { ContentLakeProductsType } from "~/types/contentLake";

interface FeaturedProductsProps {
  featuredProducts: ContentLakeProductsType[];
}

const FeaturedProducts: React.FC<FeaturedProductsProps> = ({
  featuredProducts,
}) => {
  return (
    <Box bg="#FAF1EC">
      <Flex py={10} w={1150} marginX="auto" flexDir="column">
        <Flex gap={20} flexDir="column">
          <Flex mb={10} gap={3} flexDir={"column"}>
            <Flex flexDir="column">
              <Text fontSize="lg" className="marcellus-regular" color="#CC723F">
                New
              </Text>
              <Text className="marcellus-regular" fontSize="40px" w={500}>
                Featured Products
              </Text>
            </Flex>
            <Text color="gray.500" w={500}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
              massa mi. Aliquam in hendrerit urna.
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default FeaturedProducts;
