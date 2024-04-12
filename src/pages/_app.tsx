import React from "react";

import { ClerkProvider } from "@clerk/nextjs";
import {
  HydrationBoundary,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import "../global.css";
import { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient({}));

  return (
    <ClerkProvider {...pageProps}>
      <QueryClientProvider client={queryClient}>
        <HydrationBoundary state={pageProps.dehydratedState}>
          <Component {...pageProps} />
        </HydrationBoundary>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </ClerkProvider>
  );
}
