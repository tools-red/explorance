import { useState } from "react";
import { WalkthroughData } from "~/types";
import { api } from "~/utils/api";

const useServerSideActions = () => {
  const [scriptData, setScriptData] = useState<WalkthroughData>([]);
  const [isLoading, setIsLoading] = useState<Boolean>(false);

  const { refetch: fetchBucketContent } = api.r2.fetchBucketContent.useQuery(
    undefined,
    {
      enabled: false,
    }
  );

  const { refetch: fetchWalkthroughData } = api.supabaseDB.fetchALL.useQuery(
    undefined,
    {
      enabled: false,
    }
  );

  const loadExperience = async (walkthroughData: WalkthroughData) => {
    try {
      setIsLoading(true);
      const data = await fetchBucketContent();

      const updatedR2Data =
        data.data?.CDN_Response?.map((item) => ({
          ETag: item.ETag,
          Key: item.Key,
        })) || [];

      console.log(walkthroughData);

      // Ensures Script verification from R2 Bucket
      const filteredScriptData = walkthroughData.filter((script) => {
        return updatedR2Data.some((r2Item) => r2Item.Key === script.videoFile);
      });

      setScriptData([...filteredScriptData]);
    } catch (error: any) {
      console.log(error);
    } finally {
      setIsLoading(false); // Ensure to set loading state to false regardless of success or failure
    }
  };

  return {
    loadExperience,
    isLoading,
    scriptData,
  };
};

export default useServerSideActions;
