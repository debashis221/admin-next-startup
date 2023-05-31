import { ChakraProvider } from "@chakra-ui/react";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import React from "react";
import theme from "@/theme/theme";
import { api } from "@/utils/api";

import "@/styles/Fonts.css";
import "@/styles/App.css";
import "@/styles/Contact.css";

import Head from "next/head";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>Admin Dashboard</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
      </Head>
      <React.StrictMode>
        <SessionProvider session={session}>
          <Component {...pageProps} />
        </SessionProvider>
      </React.StrictMode>
    </ChakraProvider>
  );
};

export default api.withTRPC(MyApp);
