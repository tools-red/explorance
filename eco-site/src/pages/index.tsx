import { Flex } from "@chakra-ui/react";
import HeroCarousel from "~/components/home/HeroCarousel";
import BasePageLayout from "~/layouts/BasePageLayout";

const Home = () => {
  return (
    <BasePageLayout>
      <Flex flexDir="column">
        <HeroCarousel />
      </Flex>
    </BasePageLayout>
  );
};

export default Home;
