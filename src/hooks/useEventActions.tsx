import { useState } from "react";
import { useCampusEventsAtom } from "~/lib/atom";
import { CampusEventsData } from "~/types";

const useEventActions = () => {
  const [, setSelectedCampusAtom] = useCampusEventsAtom();
  const [isRedirecting, setIsRedirecting] = useState<boolean>(false);

  const handleTestSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  const redirectToEventPage = async (event: CampusEventsData[0]) => {
    setIsRedirecting(true);
    await setSelectedCampusAtom({ selectedEvent: event });
    window.location.href = `/events/${event.eventSlug}`;
    setIsRedirecting(false);
  };

  return { handleTestSearch, redirectToEventPage, isRedirecting };
};

export default useEventActions;
