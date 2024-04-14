import { Box, Circle, Flex, Text } from "@chakra-ui/react";
import SearchBar from "~/components/pages/events/EventNavigation/SearchBar";
import useEventActions from "~/hooks/useEventActions";

const CampusEvents = () => {
  const { handleTestSearch } = useEventActions();

  return (
    <Box overflowX="hidden" position="relative" bg="#121212" h="100vh">
      <Circle
        position="absolute"
        left={-450}
        top={0}
        bg="#9747FF"
        filter="blur(250px)"
        size="lg"
      />
      <Circle
        position="absolute"
        right={-450}
        top={0}
        bg="#9747FF"
        filter="blur(250px)"
        size="lg"
      />
      <Flex gap={3} mt={150} zIndex={1} align="center" flexDir="column">
        <Box
          borderRadius={20}
          px={4}
          py={2}
          bg="#181818"
          border="1px solid"
          borderColor="#4B4B4B"
          fontSize="small"
          color="#A4A4A4"
        >
          Upcoming Events
        </Box>
        <Text
          textAlign="center"
          maxW={900}
          fontSize="6xl"
          fontWeight={600}
          lineHeight={"120%"}
          color="white"
        >
          Stay Ahead in Today's Dynamic Landscape
        </Text>
        <Text
          textAlign="center"
          maxW={490}
          fontWeight={200}
          color="#A4A4A4"
          fontSize="16px"
          lineHeight="136.1%"
        >
          Explore our diverse range of upcoming events featuring industry
          experts sharing insights on cutting-edge topics.
        </Text>
        <SearchBar handleTypeEvent={handleTestSearch} />
      </Flex>
    </Box>
  );
};

export default CampusEvents;
