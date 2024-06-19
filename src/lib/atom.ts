import { atom, useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import {
  videoSequenceAtomState,
  responseWindowAtomState,
  videoPlayState,
  selectedEventAtom,
  PlayVideoCTADisabledAtomState,
} from "~/types";

export const VideoSequenceAtom = atom<videoSequenceAtomState>({
  sequence: 1,
});

export const ResponseWindowAtom = atom<responseWindowAtomState>({
  prompt: "",
  response: "",
});

export const VideoPlayAtom = atom<videoPlayState>({
  paused: true,
});

export const PlayVideoCTADisabledAtom = atom<PlayVideoCTADisabledAtomState>({
  disabled: false,
});

export const CampusEventsAtom = atomWithStorage<selectedEventAtom>(
  "selectedEventAtom",
  {
    selectedEvent: null,
  }
);

export const useVideoSequenceAtom = () => useAtom(VideoSequenceAtom);
export const useResponseWindowAtom = () => useAtom(ResponseWindowAtom);
export const useVideoPlayStateAtom = () => useAtom(VideoPlayAtom);
export const useCampusEventsAtom = () => useAtom(CampusEventsAtom);
export const usePlayVideoDisabledStateAtom = () =>
  useAtom(PlayVideoCTADisabledAtom);
