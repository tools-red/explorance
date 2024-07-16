import { Flex, Grid, GridItem, Icon, Text } from "@chakra-ui/react";
import { FaInstagram } from "react-icons/fa";
import { RiWhatsappFill, RiInstagramFill } from "react-icons/ri";
import Image from "next/image";
import { ContentLakeProductsType } from "~/types/contentLake";
import AddCartCTA from "./AddCartCTAs";

interface ProductViewProps {
  addToCart: (
    product: ContentLakeProductsType,
    productQuantity?: number
  ) => void;
  productData: ContentLakeProductsType | undefined;
}

const ProductView: React.FC<ProductViewProps> = ({
  productData,
  addToCart,
}) => {
  return (
    <Flex align="center" justify="space-between" mt={10}>
      <Flex gap={10} flexDir="column">
        <Flex gap={3} flexDir="column">
          <Text fontSize="6xl">{productData?.productTitle}</Text>
          <Text className="marcellus-regular" fontSize="2xl">
            ${productData?.productPrice.toFixed(2)}
          </Text>
          <Text mt={3} color="#797979" w={500}>
            {productData?.productDescription}
          </Text>
        </Flex>
        <AddCartCTA
          product={productData as ContentLakeProductsType}
          addToCart={addToCart}
        />
        <Flex align="center" gap={2}>
          <Text color="#797979">Share :</Text>
          <Flex gap={2}>
            <Icon as={RiWhatsappFill} />
            <Icon as={RiInstagramFill} />
          </Flex>
        </Flex>
      </Flex>
      <Flex gap={3}>
        <Image
          width={400}
          height={600}
          src={productData?.ImageURL as string}
          alt={`Image-Product-${productData?.productId}`}
        />
        <Grid templateColumns="repeat(1,1fr)">
          <GridItem bg="gray.300" w={70} h={120} />
          <GridItem bg="gray.300" w={70} h={120} />
          <GridItem bg="gray.300" w={70} h={120} />
          <GridItem bg="gray.300" w={70} h={120} />
        </Grid>
      </Flex>
    </Flex>
  );
};

export default ProductView;
