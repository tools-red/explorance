// data types
type WalkthroughData = {
  sequenceNumber: string;
  videoFile: string;
  aiAvatarVideo: string;
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
  type videoSequenceAtomState,
  type responseWindowAtomState,
  type videoPlayState,
};
