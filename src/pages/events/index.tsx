import React, { useEffect, useState } from "react";
import EventsLandingPage from "~/components/pages/events/PageComponents/EventsLandingPage";
import useEventActions from "~/hooks/useEventActions";

const CampusEvents = () => {
  const { handleTestSearch, handleCampusFetchData, campusEventsData } =
    useEventActions();
  const [uniqueTags, setUniqueTags] = useState<string[]>([]);

  useEffect(() => {
    handleCampusFetchData();
  }, []);

  useEffect(() => {
    const handleUniqueTags = () => {
      const filteredTags: string[] = [];
      campusEventsData?.forEach((event) => {
        event?.tags.forEach((tag) => {
          if (tag && !uniqueTags.includes(tag)) {
            filteredTags.push(tag);
          }
        });
      });

      setUniqueTags(filteredTags);
      console.log({ uniqueTags });
    };

    handleUniqueTags();
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
