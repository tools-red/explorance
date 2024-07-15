import { Flex, Text } from "@chakra-ui/react";
import LinkButton from "~/components/buttons/LinkButton";

const HeroText = () => {
  return (
    <Flex
      my={10}
      align="center"
      justify="space-between"
      w={1150}
      marginX={"auto"}
      flexDir="row"
    >
      <Text className="marcellus-regular" fontSize="40px" w={500}>
        Discover Pure Organics Bliss & Ayurvedic Delights with Indiibliss
      </Text>
      <Flex flexDir="column">
        <Text w={500}>
          Experience the pure luxury of Ayurvedic-inspired organic foods. From
          coconut oil and honey to tea, jaggery powder, and special filter
          coffee, each product is crafted to enrich your health and well-being
        </Text>
        <Flex mt={4} gap={3}>
          <LinkButton altScheme={false} href="/" ctaLabel="Shop Now" />
          <LinkButton altScheme={true} href="/" ctaLabel="Featued Products" />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default HeroText;
