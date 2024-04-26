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
import { useEffect, useState } from "react";
import Chat from "~/components/pages/events/EventSlugSpecific/Chat";
import EventVideoPlayerContainer from "~/components/pages/events/EventVideo/EventVideoPlayer";
import { chatMessagesSenders } from "~/enums";
import useEventActions from "~/hooks/useEventActions";
import { useCampusEventsAtom } from "~/lib/atom";
import { ChatMessages } from "~/types";

const EventSlugPage = () => {
  const { handleSendQueryToAi } = useEventActions();
  const [{ selectedEvent }] = useCampusEventsAtom();

  const [user_input, setInput] = useState<string>("");
  const [chatMessages, setChatMessages] = useState<ChatMessages>([]);

  useEffect(() => {
    // Define the testMessages function directly within useEffect
    const testMessages = () => {
      const messages: ChatMessages = [
        { content: "Hi", sender: chatMessagesSenders.User },
        { content: "Umm Hi...?", sender: chatMessagesSenders.AI },
        {
          content: "Do you wanna go out with me ?",
          sender: chatMessagesSenders.User,
        },
        {
          content: "Omg noooo, I have a bf....",
          sender: chatMessagesSenders.AI,
        },
      ];

      setChatMessages(messages);
      console.log(chatMessages); // Logs the messages array
    };

    // Call testMessages and add an empty dependency array
    testMessages();
  }, []);

  console.log(chatMessages);

  return (
    <Box
      boxShadow={`inset 0px 1.32px 1.32px rgba(255, 255, 255, 0.25)`}
      h="100vh"
      bg="#121212"
    >
      <Flex justify="center" flexDir="column" align="center" w="full">
        <Flex mt={5} gap={3} flexDir="column" w={1200}>
          <Flex bg="red">hi</Flex>
          <Grid gap={5} templateColumns="2fr 5fr">
            <GridItem>
              <Flex h="100%" gap={3} flexDir="column">
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
                <Chat
                  chatMessages={chatMessages}
                  handleSendQueryToAi={handleSendQueryToAi}
                  setInput={setInput}
                  user_input={user_input}
                  transcription_id={selectedEvent?.transcription_id ?? ""}
                />
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
