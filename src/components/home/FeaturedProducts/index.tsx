import { Box, Flex, Text } from "@chakra-ui/react";
import { type ContentLakeProductsType } from "~/types/contentLake";
import ProductDisplay from "../Products/ProductDisplay";
import useCart from "~/hooks/useCart";

interface FeaturedProductsProps {
  featuredProducts: ContentLakeProductsType[];
}

const FeaturedProducts: React.FC<FeaturedProductsProps> = ({
  featuredProducts,
}) => {
  const { addToCart } = useCart();
  return (
    <Box bg="#FAF1EC">
      <Flex py={20} w={1150} marginX="auto" flexDir="column">
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
        <ProductDisplay products={featuredProducts} addToCart={addToCart} />
      </Flex>
    </Box>
  );
};

export default FeaturedProducts;
