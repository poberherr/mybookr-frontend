"use client";

import React, { useEffect } from "react";

import { useAuth, useUser } from "@clerk/clerk-react";
import { Transak, TransakConfig } from "@transak/transak-sdk";

// transak.init();

// // To get all the events
// Transak.on("*", (data) => {
//   console.log(data);
// });

// // This will trigger when the user closed the widget
// Transak.on(Transak.EVENTS.TRANSAK_WIDGET_CLOSE, () => {
//   console.log("Transak SDK closed!");
// });

// /*
//  * This will trigger when the user has confirmed the order
//  * This doesn't guarantee that payment has completed in all scenarios
//  * If you want to close/navigate away, use the TRANSAK_ORDER_SUCCESSFUL event
//  */
// Transak.on(Transak.EVENTS.TRANSAK_ORDER_CREATED, (orderData) => {
//   console.log(orderData);
// });

// /*
//  * This will trigger when the user marks payment is made
//  * You can close/navigate away at this event
//  */
// Transak.on(Transak.EVENTS.TRANSAK_ORDER_SUCCESSFUL, (orderData) => {
//   console.log(orderData);
//   transak.close();
// });

export default function TransakWrapper({
  setTransakActive,
}: {
  setTransakActive: (arg0: boolean) => void;
}) {
  const { userId } = useAuth();
  const { user } = useUser();

  useEffect(() => {
    if (!userId) {
      console.log("User not logged in. Skip loading of widget.");
      setTransakActive(false);
      return;
    }

    const transakConfig: TransakConfig = {
      apiKey: process.env.NEXT_PUBLIC_TRANSAK_API_KEY || "",
      environment: Transak.ENVIRONMENTS.STAGING,
      exchangeScreenTitle: "Buy tokens to invest into mybookr",
      productsAvailed: "BUY",
      defaultFiatAmount: 2000,
      defaultFiatCurrency: "EUR",
      partnerCustomerId: userId,
      email: user?.primaryEmailAddress?.emailAddress,
      cryptoCurrencyCode: "SOL",
      walletAddress: process.env.NEXT_PUBLIC_SOLANA_WALLET_ADDRESS,
    };

    const transak = new Transak(transakConfig);

    transak.init();

    // This will trigger when the user closed the widget
    Transak.on(Transak.EVENTS.TRANSAK_WIDGET_CLOSE, () => {
      console.log("widget close");
      setTransakActive(false);
    });

    // Cleanup code
    return () => {
      transak.close();
    };
  }, [userId, user]);

  return "Tansak rendering";
}
