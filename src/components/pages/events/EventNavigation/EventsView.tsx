import { Box, Flex, Grid } from "@chakra-ui/react";
import Image from "next/image";
import CampusEvents from "~/pages/events";
import { CampusEventsData } from "~/types";

interface EventsViewProps {
  campusEvents: CampusEventsData;
}

const EventsView: React.FC<EventsViewProps> = ({ campusEvents }) => {
  return (
    <Grid templateColumns="repeat(3,1fr)">
      {campusEvents.map((events, index) => {
        return (
          <Flex flexDir="column" key={index}>
            <Box>
              <Image
                alt="card_thumbnail"
                height={100}
                width={100}
                src={events.thumbnailPicture.url}
              />
            </Box>
          </Flex>
        );
      })}
    </Grid>
  );
};

export default EventsView;
