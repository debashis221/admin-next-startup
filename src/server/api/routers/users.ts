import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";
import { prisma } from "@/server/db";

export const usersRouter = createTRPCRouter({
  getAllUsers: protectedProcedure.query(() => {
    return prisma.user.findMany();
  }),
});
