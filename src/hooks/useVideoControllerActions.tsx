import { useVideoSequenceAtom } from "~/lib/atom";

const useVideoControllerActions = () => {
  const [videoSequence, setVideoSequence] = useVideoSequenceAtom();

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

  return { handleNavigation };
};

export default useVideoControllerActions;
