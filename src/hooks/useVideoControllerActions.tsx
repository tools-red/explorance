import { useVideoPlayStateAtom, useVideoSequenceAtom } from "~/lib/atom";

const useVideoControllerActions = () => {
  const [videoSequence, setVideoSequence] = useVideoSequenceAtom();
  const [videoPauseState, setVideoPauseState] = useVideoPlayStateAtom();

  const handleNavigation = (direction: boolean, videoCount: number) => {
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
  };

  const handleVideoSwitchDisplay = (
    switchState: boolean,
    altBtnStyle: boolean,
    setSwitchState: (state: boolean) => void,
    setAltBtnStyle: (state: boolean) => void
  ) => {
    setVideoPauseState({ paused: !videoPauseState.paused });
    setSwitchState(!switchState);
    setAltBtnStyle(!altBtnStyle);
  };

  const handleSkipNavigation = (videoNumber: number) => {
    setVideoSequence({ sequence: videoNumber });
  };

  return {
    handleNavigation,
    handleVideoPauseState,
    handleSkipNavigation,
    handleVideoSwitchDisplay,
  };
};

export default useVideoControllerActions;
