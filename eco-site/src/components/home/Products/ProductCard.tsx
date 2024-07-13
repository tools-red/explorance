import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { ContentLakeProductsType } from "~/types/contentLake";

interface ProductCardProps {
  product: ContentLakeProductsType;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Flex flexDir="column">
      <Box h={200} w={150} bgColor="purple.500" />
      <Flex mt={2} flexDir="column">
        <Text fontWeight={600}>{product.productTitle}</Text>
        <Flex>
          <Text>{product.productPrice}</Text>
          <Button>Open</Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ProductCard;
