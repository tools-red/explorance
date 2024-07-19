/* eslint-disable */
import { Flex, Grid, GridItem, Icon, Text } from "@chakra-ui/react";
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
          <Text className="marcellus-regular" fontSize="6xl">
            {productData?.productTitle}
          </Text>
          <Flex align="center" gap={3}>
            <Text fontSize="2xl">${productData?.productPrice?.toFixed(2)}</Text>
            {productData?.stockCount === 0 ? (
              <Text fontWeight={500} color="red.500">
                Out of Stock
              </Text>
            ) : productData?.stockCount! < 5 ? (
              <Text fontWeight={500} color="orange.500">
                {`Few in Stock (${productData?.stockCount})`}
              </Text>
            ) : (
              <Flex gap={2}>
                <Text fontWeight={500}>{`Availability:`}</Text>
                <Text color="gray.500">{`${productData?.stockCount} in stock`}</Text>
              </Flex>
            )}
          </Flex>
          <Text mt={3} color="#797979" w={500}>
            {productData?.productDescription}
          </Text>
        </Flex>
        <AddCartCTA
          stockCount={productData?.stockCount!}
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
          src={productData?.ImageURL!}
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
