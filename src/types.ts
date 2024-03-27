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

export { type WalkthroughData, type videoSequenceAtomState };
