import { Box, Circle, Flex, Text } from "@chakra-ui/react";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import React from "react";
import SearchBar from "~/components/pages/events/EventNavigation/SearchBar";
import EventsLandingPage from "~/components/pages/events/PageComponents/EventsLandingPage";
import useEventActions from "~/hooks/useEventActions";
import { graphQL } from "~/lib/graphQL";
import { CampusEventsData } from "~/types";

// @ts-ignore
export const getServerSideProps: GetServerSideProps<{
  campusEventsData: CampusEventsData;
}> = async () => {
  const contentfulCampusEventsData = await graphQL.campusEventsCollection();
  return {
    props: {
      campusEventsData:
        contentfulCampusEventsData.campusEventsCollection?.items.map(
          (object) => ({
            guestSpeakerName: object?.guestspeakerName ?? "",
            eventType: object?.eventType ?? "",
            tags: object?.tags ?? [],
            talkDate: object?.talkDate ?? "",
            talkTitle: object?.talkTitle ?? "",
            talkVideo: object?.talkVideo ?? "",
            thumbnailPicture: {
              url: object?.thumbnailPicture?.url ?? "",
            },
          })
        ) ?? [],
    },
  };
};

const CampusEvents: React.FC<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ campusEventsData }) => {
  const { handleTestSearch } = useEventActions();
  console.log(campusEventsData);

  return (
    <EventsLandingPage
      handleSearch={handleTestSearch}
      campusEventsData={campusEventsData}
    />
  );
};

export default CampusEvents;
