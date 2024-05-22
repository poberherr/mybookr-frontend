"use client";

import React, { useContext, useMemo } from "react";

import { Elements } from "@stripe/react-stripe-js";
import {
  Appearance,
  StripeElementsOptions,
  loadStripe,
} from "@stripe/stripe-js";

import { Divider, Typography } from "@mui/material";

import CheckoutForm from "@/app/components/CheckoutForm";

import { BookingContext } from "@/app/contexts/booking";

export const PaymentWrapper = () => {
  const { nights, guest, email } = useContext(BookingContext);

  const [clientSecret, setClientSecret] = React.useState("");
  const [paymentIntentId, setPaymentIntentId] = React.useState("");

  const stripe = React.useMemo(() => {
    if (!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) {
      throw new Error("Unable to init stripe without credentials");
    }
    return loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
  }, []);

  const isReady = useMemo(
    () => !!nights && !!guest && !!email,
    [nights, guest, email],
  );

  React.useEffect(() => {
    if (!isReady) {
      return;
    }
    // Create PaymentIntent as soon the payment is ready
    fetch("/api/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
    })
      .then((res) => res.json())
      .then((data) => {
        setClientSecret(data.clientSecret);
        setPaymentIntentId(data.paymentIntentId);
      });
  }, [isReady]);

  const appearance: Appearance = {
    theme: "stripe",
  };
  const options: StripeElementsOptions = {
    clientSecret,
    appearance,
  };

  if (!isReady) {
    return null;
  }

  return (
    clientSecret && (
      <Elements options={options} stripe={stripe}>
        <Divider />
        <div className="px-4 py-0 md:pl-40 md:pr-16">
          <Typography
            className="!mb-4 p-0 !font-extrabold md:!text-2xl"
            variant="h6"
          >
            Payment
          </Typography>
          <CheckoutForm />
        </div>
      </Elements>
    )
  );
};
