import { Button, Flex, Text } from "@chakra-ui/react";
import { api } from "~/utils/api";
import useServerActions from "./_hooks/useServerActions";
import { useState } from "react";

export default function Home() {
  const [showLoader, setShowLoader] = useState<boolean>(false);

  const hello = api.user.hello.useQuery({ text: "from server" });

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
          onClick={async () => {
            setShowLoader(true);
            const bucketItems = api.r2.fetchBucketContent.useQuery();
            console.log(bucketItems);
          }}
        >
          Fetch Bucket Items
        </Button>
      </Flex>
      <Text>{JSON.stringify(hello.data?.greeting)}</Text>
    </Flex>
  );
}
