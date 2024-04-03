import { useVideoPlayStateAtom, useVideoSequenceAtom } from "~/lib/atom";
import { WalkthroughData } from "~/types";

const useVideoControllerActions = () => {
  const [videoSequence, setVideoSequence] = useVideoSequenceAtom();
  const [videoPauseState, setVideoPauseState] = useVideoPlayStateAtom();

  const handleNavigation = (
    direction: boolean,
    videoCount: number,
    walkthroughData: WalkthroughData
  ) => {
    const nextSequence = () => {
      if (videoSequence.sequence < videoCount) {
        setVideoSequence({ sequence: videoSequence.sequence + 1 });
      }
    };

    const prevSequence = () => {
      if (videoSequence.sequence > 1) {
        setVideoSequence({ sequence: videoSequence.sequence - 1 });
      }
    };

    if (direction === false) {
      nextSequence();
    } else if (direction === true) {
      prevSequence();
    }
  };

  const handleVideoPauseState = () => {
    setVideoPauseState({ paused: !videoPauseState.paused });
    console.log({ videoPauseState });
  };

  return { handleNavigation, handleVideoPauseState };
};

export default useVideoControllerActions;
