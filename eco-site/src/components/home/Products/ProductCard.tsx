import { Box, Button, Flex, Icon, Text, useToast } from "@chakra-ui/react";
import { ContentLakeProductsType } from "~/types/contentLake";
import { FaCartPlus } from "react-icons/fa";

import Image from "next/image";
import { useState } from "react";

interface ProductCardProps {
  product: ContentLakeProductsType;
  addToCart: (
    product: ContentLakeProductsType,
    productQuantity?: number
  ) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, addToCart }) => {
  const [buttonOpacity, setButtonOpacity] = useState<number>(0);
  return (
    <Flex
      onMouseEnter={() => setButtonOpacity(1)}
      onMouseLeave={() => setButtonOpacity(0)}
      w={300}
      flexDir="column"
      overflow="hidden"
    >
      {/* Added overflow: hidden */}
      <Box position="relative" width={300} height={400}>
        <Image
          src={product.ImageURL}
          alt={`Image-Product-${product.productId}`}
          layout="fill"
          objectFit="cover"
        />
        <Button
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
        </Button>
      </Box>
      <Flex mt={3} align="center" flexDir="column">
        <Text fontSize="large" className="marcellus-regular">
          {product.productTitle}
        </Text>
        <Text fontWeight={300}>{`$${product.productPrice}`}</Text>
      </Flex>
    </Flex>
  );
};

export default ProductCard;
