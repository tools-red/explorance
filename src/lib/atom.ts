import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { videoSequenceAtomState } from "~/types";

export const VideoSequenceAtom = atomWithStorage<videoSequenceAtomState>(
  "videoSequenceAtomState",
  {
    sequence: 1,
  }
);

export const useVideoSequenceAtom = () => useAtom(VideoSequenceAtom);
