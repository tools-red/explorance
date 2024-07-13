import { Box, Button, Flex, Icon, Text } from "@chakra-ui/react";
import { ContentLakeProductsType } from "~/types/contentLake";
import { FaCartPlus } from "react-icons/fa";

interface ProductCardProps {
  product: ContentLakeProductsType;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Flex w={180} flexDir="column">
      <Box h={200} w="full" bgColor="purple.500" />
      <Flex mt={2} flexDir="column">
        <Text fontWeight={600}>{product.productTitle}</Text>
        <Flex align="center" justify="space-between">
          <Text>${product.productPrice}</Text>
          <Button
            variant="none"
            bg="green.200"
            size="small"
            p={2}
            fontSize="small"
            rightIcon={<Icon as={FaCartPlus} />}
          >
            Add to Cart
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ProductCard;
