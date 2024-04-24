import React, { useEffect } from "react";

import { ClerkProvider } from "@clerk/nextjs";
import {
  HydrationBoundary,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { isBefore, startOfToday, startOfTomorrow } from "date-fns";
import { AppProps } from "next/app";
import createPersistedState from "use-persisted-state";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider } from "@mui/material/styles";

import { BookingContext } from "@/app/contexts/booking";
import { inter, montserrat } from "@/styles/fonts";

import "../global.css";
import { theme } from "../theme";

const today = new Date();
const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);

const useSelectedDateStateStore = createPersistedState<Date>(
  "mybook-selectedDate",
);
const useSelectedDate1StateStore = createPersistedState<Date>(
  "mybook-selectedDate1",
);
const useNightsStateStore = createPersistedState<number>("mybook-nights");
const useGuestStateStore = createPersistedState<number>("mybook-guest");

export default function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient({}));

  const [selectedDate, setSelectedDate] = useSelectedDateStateStore(today);
  const [selectedDate1, setSelectedDate1] =
    useSelectedDate1StateStore(tomorrow);
  const [nights, setNights] = useNightsStateStore(1);
  const [guest, setGuest] = useGuestStateStore(0);

  useEffect(() => {
    if (isBefore(selectedDate, startOfToday())) {
      setSelectedDate(startOfToday());
      setSelectedDate1(startOfTomorrow());
      setNights(1)
    }
  }, [selectedDate, setSelectedDate, setSelectedDate1, setNights]);

  return (
    <div className={`${montserrat.className} ${inter.className}`}>
      <BookingContext.Provider
        value={{
          selectedDate,
          setSelectedDate,
          selectedDate1,
          setSelectedDate1,
          nights,
          setNights,
          guest,
          setGuest,
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
    </div>
  );
}
