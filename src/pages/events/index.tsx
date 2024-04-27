import React, { useEffect } from "react";
import EventsLandingPage from "~/components/pages/events/PageComponents/EventsLandingPage";
import useEventActions from "~/hooks/useEventActions";

const CampusEvents = () => {
  const { handleTestSearch, handleCampusFetchData, campusEventsData } =
    useEventActions();

  useEffect(() => {
    handleCampusFetchData();
  }, []);

  console.log(campusEventsData);

  return (
    <EventsLandingPage
      handleSearch={handleTestSearch}
      campusEventsData={campusEventsData}
    />
  );
};

export default CampusEvents;
