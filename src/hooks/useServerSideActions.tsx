import { TRPCClientErrorLike } from "@trpc/client";
import { useState } from "react";
import { api } from "~/utils/api";

const useServerSideActions = () => {
  const [error, setError] = useState<TRPCClientErrorLike<{
    input: void;
    output: any[];
    transformer: boolean;
    errorShape: any;
  }> | null>(null);

  const loadExperience = () => {};

  const {
    data,
    isLoading,
    refetch: fetchBucketContent,
  } = api.r2.fetchBucketContent.useQuery(undefined, {
    enabled: false,
  });

  return { error, fetchBucketContent, data, isLoading };
};

export default useServerSideActions;
