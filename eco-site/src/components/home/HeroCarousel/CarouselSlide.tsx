import { Flex, Text } from "@chakra-ui/react";
import React from "react";

interface CarouselSlideProps {
  color: string; // to be removed later
  carouselImage: string; // to be changed to StaticImageData later
}

const CarouselSlide: React.FC<CarouselSlideProps> = ({
  carouselImage,
  color,
}) => {
  return (
    <Flex align="center" justify="center" w="full" bg={color} h={450}>
      <Text>{carouselImage}</Text>
    </Flex>
  );
};

export default CarouselSlide;
