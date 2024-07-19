import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import Image, { StaticImageData } from "next/image";

interface CarouselSlideProps {
  color: string; // to be removed later
  carouselImage: StaticImageData; // to be changed to StaticImageData later
}

const CarouselSlide: React.FC<CarouselSlideProps> = ({
  carouselImage,
  color,
}) => {
  return (
    <Flex align="center" justify="center" w="full" bg={color} h={550}>
      <Image
        src={carouselImage.src}
        alt={"Carousel Image here"} // Ensure proper alt text
        layout="fill" // Key for fitting the image
        objectFit="cover" // Maintain aspect ratio while covering the Flex container
      />
    </Flex>
  );
};

export default CarouselSlide;
