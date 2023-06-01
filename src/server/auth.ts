import { type GetServerSidePropsContext } from "next";
import {
  getServerSession,
  type NextAuthOptions,
  type DefaultSession,
} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { loginSchema } from "@/validation/auth";
import { baseURL, client } from "api/axios";
import axios from "axios";

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
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token }) {
      session.user = token;
      return session;
    },
  },
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
        const { data } = await client.post("/api/sessions", creds);

        if (data.accessToken) {
          return data;
        } else {
          throw new Error("We couldn't find an account with that email!");
        }
      },
    }),
  ],
  events: {
    async signIn({ user }) {
      const { data } = await axios.patch(
        `${baseURL}/api/users/${user.data._id}`,
        {
          isLoggedIn: true,
        },
        {
          headers: {
            Authorization: `Bearer ${user.accessToken}`,
          },
        }
      );
    },
    async signOut({ token }) {
      const { data } = await axios.patch(
        `${baseURL}/api/users/${token.data._id}`,
        {
          isLoggedIn: false,
        },
        {
          headers: {
            Authorization: `Bearer ${token.accessToken}`,
          },
        }
      );
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
