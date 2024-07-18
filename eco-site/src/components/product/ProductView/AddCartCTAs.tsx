import { Button, Flex, Icon, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { ContentLakeProductsType } from "~/types/contentLake";

interface AddCartCTAProps {
  product: ContentLakeProductsType;
  stockCount: number;
  addToCart: (
    product: ContentLakeProductsType,
    productQuantity?: number
  ) => void;
}

const AddCartCTA: React.FC<AddCartCTAProps> = ({
  addToCart,
  product,
  stockCount,
}) => {
  const [quanity, setQuantity] = useState<number>(1);

  const handleQuantityIncrease = () => {
    if (quanity === stockCount) {
      return;
    } else {
      setQuantity(quanity + 1);
    }
  };
  const handleQuantityDecrease = () => {
    if (quanity > 1) {
      setQuantity(quanity - 1);
    } else {
      setQuantity(1);
    }
  };

  return (
    <Flex align="center" gap={3}>
      <Flex
        color={stockCount === 0 ? "gray.400" : ""}
        borderRadius={5}
        px={4}
        py={3}
        border="1px solid"
        gap={4}
        align="center"
      >
        <Icon
          cursor={stockCount === 0 ? "not-allowed" : "pointer"}
          onClick={stockCount === 0 ? () => {} : handleQuantityDecrease}
          as={FaMinus}
        />
        <Text>{quanity}</Text>
        <Icon
          cursor={stockCount === 0 ? "not-allowed" : "pointer"}
          onClick={stockCount === 0 ? () => {} : handleQuantityIncrease}
          as={FaPlus}
        />
      </Flex>
      <Button
        isDisabled={stockCount === 0 ? true : false}
        color="white"
        bg="black"
        p={6}
        fontSize="small"
        textTransform="uppercase"
        _hover={{}}
        onClick={() => {
          setQuantity(1);
          addToCart(product, quanity);
        }}
      >
        Add to Cart
      </Button>
    </Flex>
  );
};

export default AddCartCTA;
