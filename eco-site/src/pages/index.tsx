import { Flex } from "@chakra-ui/react";
import { useEffect } from "react";
import HeroCarousel from "~/components/home/HeroCarousel";
import useSanityContentLake from "~/hooks/useSanityContentLake";
import BasePageLayout from "~/layouts/BasePageLayout";

const Home = () => {
  const { fetchProductsFromContentLake } = useSanityContentLake();
  useEffect(() => {
    fetchProductsFromContentLake();
  }, []);
  return (
    <BasePageLayout>
      <Flex flexDir="column">
        <HeroCarousel />
      </Flex>
    </BasePageLayout>
  );
};

export default Home;
