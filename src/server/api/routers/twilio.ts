import { env } from "@/env.mjs";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import twilio from "twilio";

export const twilioRouter = createTRPCRouter({
  getQueuedCalls: publicProcedure.query(() => {
    const client = twilio(env.TWILIO_SID, env.TWILIO_AUTH_TOKEN);
    const calls = client.calls.list({ status: "queued" });
    return calls;
  }),
});
