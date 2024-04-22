import { Box, Circle, Flex, Grid, Icon, Text } from "@chakra-ui/react";
import { MdOutlineArrowOutward } from "react-icons/md";

import { CampusEventsData } from "~/types";

import Image from "next/image";
import { formatDate } from "~/utils/helpers";
import EventsCard from "./EventsCard";

interface EventsViewProps {
  campusEvents: CampusEventsData;
}

const EventsView: React.FC<EventsViewProps> = ({ campusEvents }) => {
  return (
    <Grid w="full" rowGap={10} templateColumns="repeat(3,1fr)">
      {campusEvents.map((event, index) => {
        return <EventsCard event={event} index={index} />;
      })}
    </Grid>
  );
};

export default EventsView;
