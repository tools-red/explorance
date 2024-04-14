const useEventActions = () => {
  const handleTestSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  return { handleTestSearch };
};

export default useEventActions;
