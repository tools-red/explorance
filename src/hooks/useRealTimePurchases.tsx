// src/hooks/useRealTimePurchases.ts
import { useEffect } from "react";
import supabase from "../../supabase/lib/client";

const useRealTimePurchases = (onUpdate: () => Promise<void>) => {
  useEffect(() => {
    const channel = supabase
      .channel("schema-db-changes")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "Purchases",
        },
        (payload) => {
          console.log("Real-time update:", payload);
          onUpdate();
        }
      )
      .subscribe();

    return () => {
      void supabase.removeChannel(channel);
    };
  }, [onUpdate]);
};

export default useRealTimePurchases;
