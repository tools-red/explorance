// data types
type WalkthroughData = {
  sequenceNumber: string;
  videoFile: string;
  scriptContent: string;
}[];

// atom body types
type videoSelectedAtomBody = {
  sequenceNumber: string;
  videoFile: string;
  scriptContent: string;
};

// atom state types
type videoSequenceAtomState = {
  sequence: number;
};

type videoSelectedAtomState = {
  video: videoSelectedAtomBody | null;
};

export {
  type WalkthroughData,
  type videoSequenceAtomState,
  type videoSelectedAtomState,
};
