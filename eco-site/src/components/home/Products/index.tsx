import { Box, Flex, Grid, GridItem, Spinner, Text } from "@chakra-ui/react";
import { ContentLakeProductsType } from "~/types/contentLake";
import ProductCard from "./ProductCard";
import useCart from "~/hooks/useCart";
import { useCartAtom } from "~/lib/atom";
import { useEffect } from "react";
import ProductDisplay from "./ProductDisplay";

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
    <Flex flexDir="column">
      <Flex flexDir="column"></Flex>
      <ProductDisplay products={products} addToCart={addToCart} />
    </Flex>
  );
};

export default Products;
