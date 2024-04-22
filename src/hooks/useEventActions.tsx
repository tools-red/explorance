import { useState } from "react";
import { useCampusEventsAtom } from "~/lib/atom";
import { CampusEventsData } from "~/types";
import { api } from "~/utils/api";

const useEventActions = () => {
  const [, setSelectedCampusAtom] = useCampusEventsAtom();
  const [isRedirecting, setIsRedirecting] = useState<boolean>(false);

  const { refetch: fetchCampusEventsData } =
    api.supabaseDB.fetchCampusEvents.useQuery(undefined, {
      enabled: false,
    });

  const handleCampusFetchData = async () => {
    const data = await fetchCampusEventsData();
    const DB_response = await data?.data?.DB_response;
    console.log({ DB_response });
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
    isRedirecting,
  };
};

export default useEventActions;
