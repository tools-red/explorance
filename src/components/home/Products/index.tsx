import { Flex, Text } from "@chakra-ui/react";
import { type ContentLakeProductsType } from "~/types/contentLake";
import useCart from "~/hooks/useCart";
import { useCartAtom } from "~/lib/jotai/atom";
import { useEffect } from "react";
import ProductDisplay from "./ProductDisplay";
import BreadCrumbs from "~/components/global/BreadCrumbs";

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
    <Flex
      px={[5, 5, 0]}
      my={10}
      w="100%"
      maxW={1150}
      marginX="auto"
      flexDir="column"
    >
      <Flex gap={[10, 10, 20]} flexDir="column">
        <BreadCrumbs
          selectedIndex={0}
          crumbArray={[
            { crumbLabel: "Home", isSelected: false },
            { crumbLabel: "Collections", isSelected: false },
            { crumbLabel: "Shopping", isSelected: true },
          ]}
        />
        <Flex mb={10} gap={3} flexDir={"column"}>
          <Text
            className="marcellus-regular"
            fontSize={["30px", "30px", "40px"]}
            w="100%"
            maxW={500}
          >
            Shop All Natural Delights
          </Text>
          <Text
            fontSize={["sm", "sm", "regular"]}
            color="gray.500"
            w="100%"
            maxW={700}
          >
            Experience the essence of nature&apos;s luxury with our organically
            crafted foods. Enriched with pure ingredients inspired by Ayurveda,
            our collection includes the finest coconut oil, honey, tea, jaggery
            powder, and special filter coffee
          </Text>
        </Flex>
      </Flex>
      <ProductDisplay products={products} addToCart={addToCart} />
    </Flex>
  );
};

export default Products;
