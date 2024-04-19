import React from "react";

import { AppProps } from "next/app";

import { ClerkProvider } from "@clerk/nextjs";
import {
  HydrationBoundary,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { Layout } from "@/components/Layout";

import "../global.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient({}));

  return (
    <ClerkProvider {...pageProps}>
      <QueryClientProvider client={queryClient}>
        <HydrationBoundary state={pageProps.dehydratedState}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </HydrationBoundary>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </ClerkProvider>
  );
}
