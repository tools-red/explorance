import { atom, useAtom } from "jotai";
import { videoSequenceAtomState, responseWindowAtomState } from "~/types";

export const VideoSequenceAtom = atom<videoSequenceAtomState>({
  sequence: 1,
});

export const ResponseWindowAtom = atom<responseWindowAtomState>({
  prompt: "",
  response: "",
});
export const useVideoSequenceAtom = () => useAtom(VideoSequenceAtom);
export const useResponseWindowAtom = () => useAtom(ResponseWindowAtom);
