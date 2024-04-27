import { chatMessagesSenders, videoDataType } from "./enums";

// data types
type WalkthroughData = {
  sequenceNumber: string;
  videoFile: string;
  aiAvatarVideo: string;
  videoDataType: videoDataType;
  captionsFile: string;
}[];

type CampusEventsData = {
  guestSpeakerName: string;
  talkTitle: string;
  tags: string[];
  talkDate: string;
  eventType: string[];
  talkVideo: string;
  thumbnail_url: string;
  eventSlug: string;
  transcription_id: string;
}[];

type ChatMessages = {
  sender: chatMessagesSenders;
  content: string;
}[];

// atom state types
type videoSequenceAtomState = {
  sequence: number;
};

type responseWindowAtomState = {
  prompt: string;
  response: string;
};

type videoPlayState = {
  paused: boolean;
};

type selectedEventAtom = {
  selectedEvent: {
    guestSpeakerName: string;
    talkTitle: string;
    tags: string[];
    talkDate: string;
    eventType: string[];
    talkVideo: string;
    thumbnail_url: string;
    eventSlug: string;
    transcription_id: string;
  } | null;
};

// response types
type DBResponseType = {
  captions_file: string | null;
  created_at: string;
  event_date: string;
  event_guest_picture: string;
  event_slug: string;
  event_speaker_name: string;
  event_title: string;
  event_type: string;
  event_video: string;
  id: number;
  transcript_id: string;
  video_tags: string[];
};

export {
  type WalkthroughData,
  type CampusEventsData,
  type ChatMessages,
  type videoSequenceAtomState,
  type responseWindowAtomState,
  type videoPlayState,
  type selectedEventAtom,
};
