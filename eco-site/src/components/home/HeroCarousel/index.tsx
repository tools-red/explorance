import { Box, Flex, Text } from "@chakra-ui/react";
import { Autoplay, Navigation } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";

import "swiper/css";
import CarouselSlide from "./CarouselSlide";

interface HeroCarouselProps {}

const HeroCarousel: React.FC<HeroCarouselProps> = () => {
  return (
    <Box>
      <Swiper
        direction="horizontal"
        modules={[Autoplay, Navigation]}
        loop={true}
        autoplay={{ delay: 2000 }}
        slidesPerView={1}
      >
        <SwiperSlide>
          <CarouselSlide color="green.500" carouselImage="Slide 1" />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselSlide color="blue.500" carouselImage="Slide 2" />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselSlide color="orange.400" carouselImage="Slide 3" />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default HeroCarousel;
