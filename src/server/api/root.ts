import { userRouter } from "~/server/api/routers/user";
import { createCallerFactory, createTRPCRouter } from "~/server/api/trpc";
import { r2Router } from "./routers/r2";

export const appRouter = createTRPCRouter({
  user: userRouter,
  r2: r2Router,
});

export type AppRouter = typeof appRouter;
export const createCaller = createCallerFactory(appRouter);
