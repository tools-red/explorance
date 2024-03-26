const useVideoControllerActions = () => {
  // All Actions pertain to handle videoController CTAs

  // To handle Navigation between videos
  const handleNavigation = (direction: boolean, videoCount: number) => {
    let count: number = 0;
    if (direction === false) {
      if (count != videoCount) {
        count = count + 1;
      } else {
        count = 0;
      }
    } else {
      if (count != 0) {
        count--;
      } else {
        count = count - 1;
      }
    }
    console.log(count);
  };

  return { handleNavigation };
};

export default useVideoControllerActions;
