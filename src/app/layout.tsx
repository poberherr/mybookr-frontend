import React from "react";

import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider } from "@mui/material/styles";

import MatomoTracking from "./components/MatomoTracking";
import Footer from "@/app/components/Footer/Footer";
import Header from "@/app/components/Header/Header";

import { inter, montserrat } from "@/styles/fonts";

import "../global.css";
import { theme } from "../theme";
import ContextProviders from "./context/providers";

import { loadOperator } from "./helpers/loadOperator";
import HubspotChat from "./components/HubspotChat";

export async function generateMetadata(): Promise<Metadata> {
  const operator = await loadOperator();
  if (operator) {
    return {
      title: `${operator.name} online booking by mybookr.io`,
      description: operator.description,
      metadataBase: new URL(process.env.URL || "https://mybookr.io"),
    };
  }
  return {
    title: "mybookr.io - Enhancing Holiday Booking for Owners and Travelers",
    description:
      "A new seamless solution to directly attract guests and boost operators' profit margins. This innovative approach ensures a smoother experience for both parties.",
    metadataBase: new URL(process.env.URL || "https://mybookr.io"),
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const operator = await loadOperator();
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        <ClerkProvider>
          <ContextProviders operator={operator}>
            <MatomoTracking />
            <html lang="en" className="scroll-smooth">
              <body className={`${montserrat.className} ${inter.className}`}>
                <main>
                  <Header />
                  {children}
                  <Footer />
                </main>
                <HubspotChat />
              </body>
            </html>
          </ContextProviders>
        </ClerkProvider>
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}
