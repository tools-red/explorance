import { Box, Flex, Grid, GridItem, Spinner, Text } from "@chakra-ui/react";
import { ContentLakeProductsType } from "~/types/contentLake";
import ProductCard from "./ProductCard";

interface ProductsProps {
  products: ContentLakeProductsType[];
}

const Products: React.FC<ProductsProps> = ({ products }) => {
  return (
    <Box p={5}>
      {products && products.length > 0 ? (
        <Grid templateColumns="repeat(4, 1fr)" flexDir="column">
          {products?.map((product, index) => {
            return (
              <GridItem key={index}>
                <ProductCard product={product} />
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

export default Products;
