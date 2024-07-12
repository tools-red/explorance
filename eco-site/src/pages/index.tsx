import { Box, Text } from "@chakra-ui/react";
import HeroCarousel from "~/components/home/HeroCarousel";
import BasePageLayout from "~/layouts/BasePageLayout";

const Home = () => {
  return (
    <BasePageLayout>
      <Box>
        <HeroCarousel />
      </Box>
    </BasePageLayout>
  );
};

export default Home;
