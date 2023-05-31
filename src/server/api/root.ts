import { createTRPCRouter } from "@/server/api/trpc";
import { twilioRouter } from "./routers/twilio";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  twilio: twilioRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
