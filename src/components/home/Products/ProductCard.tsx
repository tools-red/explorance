import { Box, Flex, Text } from "@chakra-ui/react";
import { type ContentLakeProductsType } from "~/types/contentLake";

import Image from "next/legacy/image";
import { useState } from "react";

interface ProductCardProps {
  product: ContentLakeProductsType;
  width?: number;
  height?: number;
  addToCart: (
    product: ContentLakeProductsType,
    productQuantity?: number
  ) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  height,
  width,
  // addToCart,
}) => {
  const [buttonOpacity, setButtonOpacity] = useState<number>(0);
  return (
    <Flex
      cursor="pointer"
      onMouseEnter={() => setButtonOpacity(1)}
      onMouseLeave={() => setButtonOpacity(0)}
      w="100%"
      maxW={300}
      flexDir="column"
      overflow="hidden"
    >
      {/* Added overflow: hidden */}
      <Box
        onClick={() => (window.location.href = `/products/${product.slug}`)}
        position="relative"
        width={width ?? 300}
        height={height ?? 400}
      >
        <Image
          src={product.ImageURL}
          alt={`Image-Product-${product.productId}`}
          layout="fill"
          objectFit="cover"
        />
        {/* <Button
          bg="#CC723F"
          color="white"
          top={0}
          position="absolute"
          opacity={buttonOpacity} // Initial opacity set to 0
          onClick={() => addToCart(product)}
          transition="all 0.3s ease-in-out" // Added transition for smooth hover effect
          _hover={{
            bg: "#AB4C15",
          }}
        >
          Add to Cart
        </Button> */}
      </Box>
      <Flex mt={3} align="center" flexDir="column">
        <Text
          transition="all 0.3s"
          onClick={() => (window.location.href = `/products/${product.slug}`)}
          color={buttonOpacity === 1 ? "#CC724F" : ""}
          fontSize="large"
          className="marcellus-regular"
        >
          {product.productTitle}
        </Text>
        <Flex gap={3}>
          <Text fontWeight={300}>{`$${product.productPrice.toFixed(2)}`}</Text>
          {product.stockCount === 0 ? (
            <Text fontWeight={500} color="red.500">
              Out of Stock
            </Text>
          ) : product.stockCount < 5 ? (
            <Text fontWeight={500} color="orange.500">
              Few in Stock
            </Text>
          ) : (
            <></>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ProductCard;
