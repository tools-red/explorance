// data types
type WalkthroughData = {
  sequenceNumber: string;
  videoFile: string;
  aiAvatarVideo: string;
  videoDataType: string;
}[];

type CampusEventsData = {
  guestSpeakerName: string;
  talkTitle: string;
  tags: string[];
  talkDate: string;
  eventType: string[];
  talkVideo: string;
  thumbnailPicture: {
    url: string;
  };
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

export {
  type WalkthroughData,
  type CampusEventsData,
  type videoSequenceAtomState,
  type responseWindowAtomState,
  type videoPlayState,
};
