import { TRPCClientErrorLike } from "@trpc/client";
import { useEffect, useState } from "react";
import { api } from "~/utils/api";

const useServerSideActions = () => {
  const [scriptData, setScriptData] = useState<
    { sequenceNumber: string; videoFile: string; scriptContent: string }[]
  >([]);
  const [isLoading, setIsLoading] = useState<Boolean>(false);
  const [trpcClientError, setTrpcClientError] = useState<TRPCClientErrorLike<{
    input: void;
    output: any[];
    transformer: boolean;
    errorShape: any;
  }> | null>(null);

  const { refetch: fetchBucketContent } = api.r2.fetchBucketContent.useQuery(
    undefined,
    {
      enabled: false,
    }
  );

  const loadExperience = async (
    walkthroughData: {
      sequenceNumber: string;
      videoFile: string;
      scriptContent: string;
    }[]
  ) => {
    try {
      setIsLoading(true);
      const data = await fetchBucketContent();
      const updatedR2Data =
        data.data?.CDN_Response?.map((item) => ({
          ETag: item.ETag,
          Key: item.Key,
        })) || [];

      // Check if scriptData exists and is not empty
      if (walkthroughData && walkthroughData.length > 0) {
        // Loop through scriptData
        walkthroughData.forEach((script) => {
          // Check if the script is already present in r2Data
          const isScriptPresent = updatedR2Data.some(
            (r2Item) => r2Item.Key === script.videoFile
          );

          if (!isScriptPresent) throw trpcClientError;
        });
      }

      const confirmedScriptData = walkthroughData.map((item) => ({
        sequenceNumber: item.sequenceNumber,
        scriptContent: item.scriptContent,
        videoFile: item.videoFile,
      }));

      setScriptData(confirmedScriptData);
    } catch (error: any) {
      setTrpcClientError(error);
      console.log(trpcClientError);
    }
  };

  useEffect(() => {
    console.log(scriptData);
    if (scriptData.length != 0) setIsLoading(false);
  }, [scriptData]);

  return { loadExperience, isLoading, scriptData };
};

export default useServerSideActions;
