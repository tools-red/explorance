import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { videoSelectedAtomState, videoSequenceAtomState } from "~/types";

export const VideoSequenceAtom = atomWithStorage<videoSequenceAtomState>(
  "videoSequenceAtomState",
  {
    sequence: 1,
  }
);

export const VideoSelectedAtom = atomWithStorage<videoSelectedAtomState>(
  "videoSelectedAtomState",
  {
    video: null,
  }
);

export const useVideoSequenceAtom = () => useAtom(VideoSequenceAtom);
export const useVideoSelectedAtom = () => useAtom(VideoSelectedAtom);
