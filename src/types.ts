// data types
type WalkthroughData = {
  sequenceNumber: string;
  videoFile: string;
  scriptContent: string;
}[];

// atom body types
type videoSelectedAtomBody = {
  sequenceNumber: string | undefined;
  videoFile: string | undefined;
  scriptContent: string | undefined;
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
