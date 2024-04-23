import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Input,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import { useState } from "react";
import ReactPlayer from "react-player";
import EventVideoPlayerContainer from "~/components/pages/events/EventVideo/EventVideoPlayer";
import { useCampusEventsAtom } from "~/lib/atom";

const EventSlugPage = () => {
  const [{ selectedEvent }] = useCampusEventsAtom();
  const [testInput, setTestInput] = useState<string>("");

  return (
    <Box h="100vh" bg="#121212">
      <Flex justify="center" flexDir="column" align="center" w="full">
        <Flex mt={5} gap={3} flexDir="column" w={1200}>
          <Flex bg="red">hi</Flex>
          <Grid gap={5} templateColumns="2fr 5fr">
            <GridItem>
              <Flex h="100%" bg="yellow" gap={3} flexDir="column">
                <Box
                  border="1px"
                  borderColor="#181818"
                  borderRadius={20}
                  overflow="hidden"
                  h={290}
                  position="relative"
                >
                  <Text
                    position="absolute"
                    zIndex={1}
                    top={3}
                    left={3}
                    px={3}
                    py={2}
                    borderRadius={15}
                    bg="rgba(255, 255, 255, 0.1)"
                    color="white"
                    fontSize="x-small"
                    // rgba(0, 0, 0, 0.5)
                  >
                    {selectedEvent?.guestSpeakerName}
                  </Text>
                  <Flex
                    justify="center"
                    align="center"
                    flexDir="column"
                    w="full"
                    zIndex={1}
                    bottom={2}
                    position="absolute"
                  >
                    <Text
                      px={3}
                      py={2}
                      borderRadius={15}
                      bg="rgba(0, 0, 0, 0.5)"
                      backdropFilter="blur(10px)"
                      color="white"
                      fontSize="11px"
                    >
                      {selectedEvent?.eventType}
                    </Text>
                    <Text
                      px={2}
                      textAlign={"center"}
                      fontSize="22px"
                      color="white"
                    >
                      {selectedEvent?.talkTitle}
                    </Text>
                  </Flex>
                  <Image
                    alt="card_thumbnail"
                    layout="fill"
                    src={
                      `${process.env.NEXT_PUBLIC_CLOUDFLARE_PUBLIC_URL}${selectedEvent?.thumbnail_url}` ??
                      ""
                    }
                  />
                </Box>
                <Box h={300} borderRadius={20} bg="red.400">
                  <Input onChange={(e) => setTestInput(e.target.value)} />
                  <Button>Send</Button>
                </Box>
              </Flex>
            </GridItem>
            <GridItem
              position="relative"
              overflow="hidden"
              borderRadius={20}
              height="470px"
              width="100%"
            >
              <EventVideoPlayerContainer selectedEvent={selectedEvent} />
            </GridItem>
          </Grid>
        </Flex>
      </Flex>
    </Box>
  );
};

export default EventSlugPage;
