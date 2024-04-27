import { useState } from "react";
import { chatMessagesSenders } from "~/enums";
import { useCampusEventsAtom } from "~/lib/atom";
import { CampusEventsData, ChatMessages, DBResponseType } from "~/types";
import { api } from "~/utils/api";

const useEventActions = () => {
  const [, setSelectedCampusAtom] = useCampusEventsAtom();
  const [isRedirecting, setIsRedirecting] = useState<boolean>(false);
  const [campusEventsData, setCampusEventData] = useState<CampusEventsData>([]);
  const [uniqueTags, setUniqueTags] = useState<string[]>([]);
  const [chatMessages, setChatMessages] = useState<ChatMessages>([]);
  const [isResponding, setIsResponding] = useState<boolean>(false);

  const sendQueryToAIMut = api.assemblyAI.sendChatQuery.useMutation();

  const { refetch: fetchCampusEventsData } =
    api.supabaseDB.fetchCampusEvents.useQuery(undefined, {
      enabled: false,
    });

  const handleCampusFetchData = async () => {
    const data = await fetchCampusEventsData();
    const DB_response = data?.data?.DB_response;
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
        transcription_id: event.transcript_id,
      }));

      setCampusEventData(parsed_data as CampusEventsData);
    }
  };

  const fetchEventTags = async () => {
    const data = await fetchCampusEventsData();
    const DB_response = data?.data?.DB_response;

    console.log(DB_response);

    const parsedTags: string[] = [];

    if (DB_response) {
      DB_response.forEach((event: DBResponseType) => {
        event?.video_tags?.forEach((tag) => {
          if (tag && !parsedTags.includes(tag)) {
            parsedTags.push(tag);
          }
        });
      });

      setUniqueTags(parsedTags);
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

  const handleSendQueryToAi = async (
    user_query: string,
    transcription_id: string
  ) => {
    const newUserMessage: ChatMessages[0] = {
      sender: chatMessagesSenders.User,
      content: user_query,
    };

    setChatMessages((prevMessages) => [...prevMessages, newUserMessage]);
    setIsResponding(true);
    const response = await sendQueryToAIMut.mutateAsync({
      query: user_query,
      transcription_id: transcription_id,
    });

    if (response.LeMUR_response) {
      const aiMessage: ChatMessages[0] = {
        sender: chatMessagesSenders.AI,
        content: response.LeMUR_response,
      };

      // Update chat messages state by concatenating the new messages
      setChatMessages((prevMessages) => [...prevMessages, aiMessage]);
      setIsResponding(false);
    }

    console.log({ LeMUR_Response: response.LeMUR_response });
  };

  return {
    handleTestSearch,
    redirectToEventPage,
    handleCampusFetchData,
    handleSendQueryToAi,
    fetchEventTags,
    uniqueTags,
    campusEventsData,
    isRedirecting,
    isResponding,
    chatMessages,
  };
};

export default useEventActions;
