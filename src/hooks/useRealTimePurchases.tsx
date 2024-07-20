// src/hooks/useRealTimePurchases.ts
import { useEffect } from "react";
import supabase from "../../supabase/lib/client";
import { type RealtimePostgresChangesPayload } from "@supabase/supabase-js";

const useRealTimePurchases = (
  onUpdate: (
    payload: RealtimePostgresChangesPayload<{
      [key: string]: any;
    }>
  ) => void
) => {
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
          onUpdate(payload);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [onUpdate]);
};

export default useRealTimePurchases;
