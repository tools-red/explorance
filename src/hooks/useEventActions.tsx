import { useState } from "react";
import { useCampusEventsAtom } from "~/lib/atom";
import { CampusEventsData } from "~/types";
import { api } from "~/utils/api";

const useEventActions = () => {
  const [, setSelectedCampusAtom] = useCampusEventsAtom();
  const [isRedirecting, setIsRedirecting] = useState<boolean>(false);
  const [campusEventsData, setCampusEventData] = useState<CampusEventsData>([]);

  const { refetch: fetchCampusEventsData } =
    api.supabaseDB.fetchCampusEvents.useQuery(undefined, {
      enabled: false,
    });

  const handleCampusFetchData = async () => {
    const data = await fetchCampusEventsData();
    const DB_response = await data?.data?.DB_response;
    if (DB_response) {
      const parsed_data = DB_response.map((event: any) => ({
        guestSpeakerName: event.event_speaker_name,
        talkTitle: event.event_title,
        tags: event.video_tags as string[],
        talkDate: event.event_date,
        eventType: event.event_type,
        talkVideo: event.event_video,
        thumbnail_url: event.event_guest_picture,
        eventSlug: event.event_slug,
      }));

      setCampusEventData(parsed_data);
    }
  };

  const handleTestSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  const redirectToEventPage = async (event: CampusEventsData[0]) => {
    setIsRedirecting(true);
    await setSelectedCampusAtom({ selectedEvent: event });
    window.location.href = `/events/${event.eventSlug}`;
    setIsRedirecting(false);
  };

  return {
    handleTestSearch,
    redirectToEventPage,
    handleCampusFetchData,
    campusEventsData,
    isRedirecting,
  };
};

export default useEventActions;
