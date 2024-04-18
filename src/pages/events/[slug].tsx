import { Text } from "@chakra-ui/react";
import { useCampusEventsAtom } from "~/lib/atom";

const EventSlugPage = () => {
  const [{ selectedEvent }] = useCampusEventsAtom();
  return <Text>{selectedEvent?.talkTitle}</Text>;
};

export default EventSlugPage;
