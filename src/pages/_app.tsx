import React from "react";

import { AppProps } from "next/app";

import { ClerkProvider } from "@clerk/nextjs";
import {
  HydrationBoundary,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider } from "@mui/material/styles";

import "../global.css";
import { theme } from "../theme";

export default function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient({}));

  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        <ClerkProvider {...pageProps}>
          <QueryClientProvider client={queryClient}>
            <HydrationBoundary state={pageProps.dehydratedState}>
              <Component {...pageProps} />
            </HydrationBoundary>
            <ReactQueryDevtools />
          </QueryClientProvider>
        </ClerkProvider>
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}
