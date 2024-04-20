import { createCallerFactory, createTRPCRouter } from "~/server/api/trpc";
import { r2Router } from "./routers/r2";
import { openAIRouter } from "./routers/openAI";

export const appRouter = createTRPCRouter({
  r2: r2Router,
  openAI: openAIRouter,
});

export type AppRouter = typeof appRouter;
export const createCaller = createCallerFactory(appRouter);
