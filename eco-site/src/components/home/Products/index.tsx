import { Box, Flex, Grid, GridItem, Spinner, Text } from "@chakra-ui/react";
import { ContentLakeProductsType } from "~/types/contentLake";
import ProductCard from "./ProductCard";
import useCart from "~/hooks/useCart";
import { useCartAtom } from "~/lib/atom";
import { useEffect } from "react";

interface ProductsProps {
  products: ContentLakeProductsType[];
}

const Products: React.FC<ProductsProps> = ({ products }) => {
  const { addToCart } = useCart();
  const [{ cartItems }] = useCartAtom();

  useEffect(() => {
    console.log({ cartItems });
  }, [cartItems]);
  return (
    <Box p={5}>
      {products && products.length > 0 ? (
        <Grid templateColumns="repeat(4, 1fr)" flexDir="column">
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

export default Products;
