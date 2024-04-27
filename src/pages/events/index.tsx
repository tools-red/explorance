import React, { useEffect, useState } from "react";
import EventsLandingPage from "~/components/pages/events/PageComponents/EventsLandingPage";
import useEventActions from "~/hooks/useEventActions";

const CampusEvents = () => {
  const {
    handleTestSearch,
    handleCampusFetchData,
    fetchEventTags,
    campusEventsData,
    uniqueTags,
  } = useEventActions();

  useEffect(() => {
    handleCampusFetchData();
    fetchEventTags();
  }, []);

  return (
    <EventsLandingPage
      uniqueTags={uniqueTags}
      handleSearch={handleTestSearch}
      campusEventsData={campusEventsData}
    />
  );
};

export default CampusEvents;
