import { Button, Flex, Text } from "@chakra-ui/react";
import useServerSideActions from "~/hooks/useServerSideActions";

export default function Home() {
  const { data, isLoading, fetchBucketContent } = useServerSideActions();
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
        <Button
          onClick={() => {
            fetchBucketContent();
          }}
        >
          Fetch Bucket Items
        </Button>
      </Flex>
    </Flex>
  );
}
