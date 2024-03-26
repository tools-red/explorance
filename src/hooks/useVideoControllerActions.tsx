import { useVideoSelectedAtom, useVideoSequenceAtom } from "~/lib/atom";
import { WalkthroughData } from "~/types";

const useVideoControllerActions = () => {
  const [videoSequence, setVideoSequence] = useVideoSequenceAtom();
  const [sequence, setSequence] = useVideoSelectedAtom();

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

    if (VideoInSequence) {
      setSequence({
        video:
          {
            scriptContent: VideoInSequence[0]?.scriptContent,
            sequenceNumber: VideoInSequence[0]?.sequenceNumber,
            videoFile: VideoInSequence[0]?.videoFile,
          } ?? null,
      });
    } else {
      // If no video found for the current sequence, set null
      setSequence({ video: null });
    }
  };

  return { handleNavigation };
};

export default useVideoControllerActions;
