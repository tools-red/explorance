import { atom, useAtom } from "jotai";
import {
  videoSequenceAtomState,
  responseWindowAtomState,
  videoPlayState,
} from "~/types";

export const VideoSequenceAtom = atom<videoSequenceAtomState>({
  sequence: 1,
});

export const ResponseWindowAtom = atom<responseWindowAtomState>({
  prompt: "",
  response: "",
});

export const VideoPlayAtom = atom<videoPlayState>({
  paused: false,
});
export const useVideoSequenceAtom = () => useAtom(VideoSequenceAtom);
export const useResponseWindowAtom = () => useAtom(ResponseWindowAtom);
