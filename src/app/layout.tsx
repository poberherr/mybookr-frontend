import React from "react";

import { ClerkProvider } from "@clerk/nextjs";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import type { Metadata } from "next";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider } from "@mui/material/styles";

import MatomoTracking from "./components/MatomoTracking";
import QueryClientProviderWrapper from "./components/QueryClientProvider";
import Footer from "@/app/components/Footer/Footer";
import Header from "@/app/components/Header/Header";

import { inter, montserrat } from "@/styles/fonts";

import "../global.css";
import { theme } from "../theme";
import { BookingContextProvider } from "./contexts/booking";

export const metadata: Metadata = {
  title: "mybookr.io",
  description:
    "The whitelabel booking solution for a better booking experience for owners and visitors",
  metadataBase: new URL(process.env.URL || "https://mybookr.io"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        {/* <ClerkProvider {...pageProps}> */}
        <ClerkProvider>
          <BookingContextProvider>
            <QueryClientProviderWrapper>
              <MatomoTracking />
              <html lang="en">
                <body className={`${montserrat.className} ${inter.className}`}>
                  <main>
                    <Header />
                    {children}
                    <Footer />
                    <ReactQueryDevtools />
                  </main>
                </body>
              </html>
            </QueryClientProviderWrapper>
          </BookingContextProvider>
        </ClerkProvider>
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}
