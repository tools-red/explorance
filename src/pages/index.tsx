import { Button, Flex, Text } from "@chakra-ui/react";
import { api } from "~/utils/api";

export default function Home() {
  const hello = api.user.hello.useQuery({ text: "from server" });
  console.log(hello);
  return (
    <Flex flexDir="column">
      <Text>Index Page</Text>
      <Flex gap={2}>
        <Button as="a" href="/tour">Campus Tour</Button>
        <Button as="a" href="/events">Campus Events</Button>
      </Flex>
      <Text>{JSON.stringify(hello.data?.greeting)}</Text>
    </Flex>
  );
}
