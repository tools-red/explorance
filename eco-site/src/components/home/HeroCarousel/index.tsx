import { Box, Flex, Text } from "@chakra-ui/react";
import { Autoplay, Navigation } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";

import "swiper/css";

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
          <Flex align="center" justify="center" w="full" bg="green.500" h={450}>
            <Text>Slide 1</Text>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Flex align="center" justify="center" w="full" bg="blue.500" h={450}>
            <Text>Slide 2</Text>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Flex
            align="center"
            justify="center"
            w="full"
            bg="orange.500"
            h={450}
          >
            <Text>Slide 3</Text>
          </Flex>
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default HeroCarousel;
