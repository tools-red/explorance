import { Flex } from "@chakra-ui/react";
import HeroSection from "~/components/pages/landing/Sections/HeroSection";

export default function Home() {
  return (
    <Flex flexDir="column">
      <HeroSection />
    </Flex>
  );
}
