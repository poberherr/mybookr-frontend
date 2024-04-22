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

import { BookingContext } from "@/contexts/booking";

import "../global.css";
import { theme } from "../theme";

const today = new Date();
const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);

export default function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient({}));

  const [selectedDate, setSelectedDate] = React.useState(today);
  const [selectedDate1, setSelectedDate1] = React.useState(tomorrow);

  return (
    <BookingContext.Provider
      value={{
        selectedDate,
        setSelectedDate,
        selectedDate1,
        setSelectedDate1,
      }}
    >
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
    </BookingContext.Provider>
  );
}
