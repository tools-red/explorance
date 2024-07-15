import { Box, Flex, Text } from "@chakra-ui/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";

import SliderImage1 from "../../../../public/SliderImage1.png";
import SliderImage2 from "../../../../public/SliderImage2.jpg";
import SliderImage3 from "../../../../public/SliderImage3.jpg";
import SliderImage4 from "../../../../public/SliderImage4.jpg";

import "swiper/css";
import CarouselSlide from "./CarouselSlide";

interface HeroCarouselProps {}

const HeroCarousel: React.FC<HeroCarouselProps> = () => {
  return (
    <Box>
      <Swiper
        direction="horizontal"
        modules={[Autoplay, Navigation, Pagination]}
        loop={true}
        pagination={true}
        autoplay={{ delay: 2000 }}
        slidesPerView={1}
      >
        <SwiperSlide>
          <CarouselSlide color="green.500" carouselImage={SliderImage1} />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselSlide color="green.500" carouselImage={SliderImage2} />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselSlide color="blue.500" carouselImage={SliderImage3} />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselSlide color="orange.400" carouselImage={SliderImage4} />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default HeroCarousel;
