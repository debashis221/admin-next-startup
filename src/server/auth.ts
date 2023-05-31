import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { type GetServerSidePropsContext } from "next";
import {
  getServerSession,
  type NextAuthOptions,
  type DefaultSession,
} from "next-auth";
import { prisma } from "@/server/db";
import CredentialsProvider from "next-auth/providers/credentials";
import { loginSchema } from "@/validation/auth";

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      email: string;
      name: string;
      image: string;
      password: string;
    } & DefaultSession["user"];
  }
}
export const authOptions: NextAuthOptions = {
  callbacks: {
    jwt: async ({ token, user }) => {
      return {
        ...token,
        ...user,
      };
    },
    session: async ({ session, token }) => {
      session.user = token;
      return session;
    },
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, request) {
        const creds = await loginSchema.parseAsync(credentials);
        const user = await prisma.user.findUnique({
          where: {
            email: creds.email,
          },
        });
        if (user) {
          console.log(user);
          if (user?.password === credentials?.password) {
            return user;
          } else {
            throw new Error("Password does not match!");
          }
        } else {
          throw new Error("We couldn't find an account with that email!");
        }
      },
    }),
  ],
  events: {
    async signIn({ user }) {
      await prisma.user.update({
        where: {
          email: user.email,
        },
        data: {
          isLoggedIn: true,
        },
      });
    },
  },
  pages: {
    signIn: "/auth/sign-in",
  },
  session: {
    strategy: "jwt",
  },
  debug: true,
};
export const getServerAuthSession = (ctx: {
  req: GetServerSidePropsContext["req"];
  res: GetServerSidePropsContext["res"];
}) => {
  return getServerSession(ctx.req, ctx.res, authOptions);
};
