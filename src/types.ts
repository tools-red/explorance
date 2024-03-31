// data types
type WalkthroughData = {
  sequenceNumber: string;
  videoFile: string;
  scriptContent: string;
}[];

// atom state types
type videoSequenceAtomState = {
  sequence: number;
};

type responseWindowAtomState = {
  prompt: string;
  response: string;
};

export {
  type WalkthroughData,
  type videoSequenceAtomState,
  type responseWindowAtomState,
};
