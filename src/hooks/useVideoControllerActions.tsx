import { useVideoSequenceAtom } from "~/lib/atom";
import { WalkthroughData } from "~/types";

const useVideoControllerActions = () => {
  const [videoSequence, setVideoSequence] = useVideoSequenceAtom();

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
    const VideoInSequence = walkthroughData.filter(
      (script) => parseInt(script.sequenceNumber) === videoSequence.sequence
    );
  };

  return { handleNavigation };
};

export default useVideoControllerActions;
