"use client";

import { useState } from "react";
import { api } from "~/utils/api";

const useServerActions = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchBucketList = async () => {
    setIsLoading(true);
    const bucketItems = await api.r2.fetchBucketContent.useQuery();
    console.log(bucketItems);
    setIsLoading(false);
  };

  return {
    isLoading,
    fetchBucketList,
  };
};

export default useServerActions;
