import { Flex, Spinner, Text } from "@chakra-ui/react";
import { ContentLakeProductsType } from "~/types/contentLake";

interface ProductsProps {
  products: ContentLakeProductsType[];
}

const Products: React.FC<ProductsProps> = ({ products }) => {
  return (
    <>
      {products && products.length > 0 ? (
        <Flex flexDir="column">
          {products?.map((product, index) => {
            return <Text key={index}>{product?.productTitle}</Text>;
          })}
        </Flex>
      ) : (
        <Flex justify="center" align="center">
          <Flex p={5} gap={3}>
            <Spinner />
            <Text>Loading Data</Text>
          </Flex>
        </Flex>
      )}
    </>
  );
};

export default Products;
