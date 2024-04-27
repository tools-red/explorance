import React, { useEffect, useState } from "react";
import EventsLandingPage from "~/components/pages/events/PageComponents/EventsLandingPage";
import useEventActions from "~/hooks/useEventActions";

const CampusEvents = () => {
  const {
    handleTestSearch,
    handleCampusFetchData,
    fetchEventTags,
    campusEventsData,
  } = useEventActions();

  useEffect(() => {
    handleCampusFetchData();
    fetchEventTags();
  }, []);

  return (
    <EventsLandingPage
      handleSearch={handleTestSearch}
      campusEventsData={campusEventsData}
    />
  );
};

export default CampusEvents;
