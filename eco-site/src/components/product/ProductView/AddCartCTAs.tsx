import { Button, Flex, Icon, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { ContentLakeProductsType } from "~/types/contentLake";

interface AddCartCTAProps {
  product: ContentLakeProductsType;
  addToCart: (
    product: ContentLakeProductsType,
    productQuantity?: number
  ) => void;
}

const AddCartCTA: React.FC<AddCartCTAProps> = ({ addToCart, product }) => {
  const [quanity, setQuantity] = useState<number>(1);

  const handleQuantityIncrease = () => {
    setQuantity(quanity + 1);
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
        borderRadius={5}
        px={4}
        py={3}
        border="1px solid"
        gap={4}
        align="center"
      >
        <Icon cursor="pointer" onClick={handleQuantityDecrease} as={FaMinus} />
        <Text>{quanity}</Text>
        <Icon cursor="pointer" onClick={handleQuantityIncrease} as={FaPlus} />
      </Flex>
      <Button
        color="white"
        bg="black"
        p={6}
        fontSize="small"
        textTransform="uppercase"
        _hover={{}}
        onClick={() => addToCart(product, quanity)}
      >
        Add to Cart
      </Button>
    </Flex>
  );
};

export default AddCartCTA;
