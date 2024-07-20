import supabase from "~/lib/supabase/client";
import { createTRPCRouter, publicProcedure } from "../trpc";

const supa = createTRPCRouter({
  realtimePurchaseRequests: publicProcedure.query(async () => {
    try {
      const changes = supabase
        .channel("schema-db-changes")
        .on(
          "postgres_changes",
          {
            event: "*",
            schema: "public",
            table: "Purchases",
          },
          (payload) => {
            return payload;
          }
        )
        .subscribe();

      return changes;
    } catch (err) {
      console.log(err);
      throw new Error("Error during Realtime processing");
    }
  }),
});

export default supa;
