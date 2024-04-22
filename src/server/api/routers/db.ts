import supabase from "~/lib/supabase";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { error } from "console";

export const dbRouter = createTRPCRouter({
  fetchCampusTours: publicProcedure.query(async () => {
    try {
      const { data: WalkthroughData, error: WalkthroughDataError } =
        await supabase.from("campus_tour").select("*");

      if (WalkthroughDataError) throw error;

      return {
        DB_response: WalkthroughData,
      };
    } catch (error) {
      console.log(`Error while fetching Tour / Walkthrough Data : ${error}`);
    }
  }),
});
