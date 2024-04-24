import React from "react";

import { ClerkProvider } from "@clerk/nextjs";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider } from "@mui/material/styles";

import QueryClientProviderWrapper from "./components/QueryClientProvider";
import Footer from "@/app/components/Footer/Footer";
import Header from "@/app/components/Header/Header";

import { inter, montserrat } from "@/styles/fonts";

import "../global.css";
import { theme } from "../theme";
import { BookingContextProvider } from "./contexts/booking";

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
              <html lang="en">
                <body className={`${montserrat.className} ${inter.className}`}>
                  {/* Layout UI */}
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
