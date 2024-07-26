import { Flex, Text } from "@chakra-ui/react";
import LinkButton from "~/components/global/Buttons/LinkButton";

const HeroText = () => {
  return (
    <Flex
      px={[5, 5, 0]}
      flexDirection={["column", "column", "row"]}
      my={10}
      align="center"
      justify="space-between"
      w="100%"
      maxW={1150}
      marginX={"auto"}
    >
      <Text
        className="marcellus-regular"
        fontSize={["30px", "30px", "40px"]}
        w="full"
        maxW={500}
      >
        Discover Pure Organics Bliss & Ayurvedic Delights with Indibliss
      </Text>
      <Flex flexDir="column">
        <Text
          my={[3, 0, 0]}
          color="#797979"
          fontSize={["sm", "sm", "regular"]}
          w="100%"
          maxW={500}
        >
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
