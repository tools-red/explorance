import { Button, Flex, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import useServerSideActions from "~/hooks/useServerSideActions";

export default function Home() {
  const { filterWalkthroughData } = useServerSideActions();
  useEffect(() => {
    filterWalkthroughData();
  }, []);
  return (
    <Flex flexDir="column">
      <Text>Index Page</Text>
      <Flex gap={2}>
        <Button as="a" href="/tour">
          Campus Tour
        </Button>
        <Button as="a" href="/events">
          Campus Events
        </Button>
      </Flex>
    </Flex>
  );
}
