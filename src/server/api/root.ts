import { createCallerFactory, createTRPCRouter } from "~/server/api/trpc";
import { r2Router } from "./routers/r2";
import { openAIRouter } from "./routers/openAI";
import { dbRouter } from "./routers/db";

export const appRouter = createTRPCRouter({
  r2: r2Router,
  openAI: openAIRouter,
  supabaseDB: dbRouter,
});

export type AppRouter = typeof appRouter;
export const createCaller = createCallerFactory(appRouter);
