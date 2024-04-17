import { Grid, Text } from "@chakra-ui/react";
import { CampusEventsData } from "~/types";

interface EventsViewProps {
  campusEvents: CampusEventsData;
}

const EventsView: React.FC<EventsViewProps> = ({ campusEvents }) => {
  return <Grid templateColumns="repeat(3,1fr)"></Grid>;
};

export default EventsView;
