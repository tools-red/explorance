import { Box, Flex, Grid, GridItem, Spinner, Text } from "@chakra-ui/react";
import ProductCard from "./ProductCard";
import { type ContentLakeProductsType } from "~/types/contentLake";

interface ProductDisplayProps {
  products: ContentLakeProductsType[];
  addToCart: (
    product: ContentLakeProductsType,
    productQuantity?: number
  ) => void;
}

const ProductDisplay: React.FC<ProductDisplayProps> = ({
  addToCart,
  products,
}) => {
  return (
    <Box>
      {products && products.length > 0 ? (
        <Grid templateColumns="repeat(3, 1fr)" flexDir="column" rowGap={5}>
          {products?.map((product, index) => {
            return (
              <GridItem key={index}>
                <ProductCard addToCart={addToCart} product={product} />
              </GridItem>
            );
          })}
        </Grid>
      ) : (
        <Flex justify="center" align="center">
          <Flex p={5} gap={3}>
            <Spinner />
            <Text>Loading Data</Text>
          </Flex>
        </Flex>
      )}
    </Box>
  );
};

export default ProductDisplay;
