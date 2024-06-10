"use client";

import React, { FormEvent, useCallback } from "react";

import { Divider, Typography } from "@mui/material";

import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { StripePaymentElementOptions } from "@stripe/stripe-js";
import { usePathname } from "next/navigation";

import { CircularProgress } from "@mui/material";

import { SButton } from "../../../components/ui/SButton";

export default function FormPayment({
  setPopupMessage,
}: {
  setPopupMessage: React.Dispatch<React.SetStateAction<string | undefined>>;
}) {
  const stripe = useStripe();
  const elements = useElements();
  const path = usePathname();
  const [isLoading, setIsLoading] = React.useState(false);

  const onSubmit = useCallback(
    async (e: FormEvent) => {
      console.log("submitting");
      e.preventDefault();

      if (!stripe || !elements) {
        // Stripe.js hasn't yet loaded.
        // Make sure to disable form submission until Stripe.js has loaded.
        console.log("stripe not loaded, aborting");
        return;
      }

      setIsLoading(true);

      console.log("confirming payment");

      const { error } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          // Make sure to change this to your payment completion page
          return_url: `${window.location.origin}${path}`,
        },
      });

      console.log("SOMETHING WENT WRONG!", error);
      console.error(error);

      // This point will only be reached if there is an immediate error when
      // confirming the payment. Otherwise, your customer will be redirected to
      // your `return_url`. For some payment methods like iDEAL, your customer will
      // be redirected to an intermediate site first to authorize the payment, then
      // redirected to the `return_url`.
      if (
        (error.type === "card_error" || error.type === "validation_error") &&
        error.message
      ) {
        setPopupMessage(error.message);
      } else {
        setPopupMessage("An unexpected error occurred.");
      }

      setIsLoading(false);
    },
    [stripe, elements],
  );

  const paymentElementOptions: StripePaymentElementOptions = {
    layout: "tabs",
  };

  if (!stripe || !elements) {
    return null;
  }

  return (
    <>
      <Divider />
      <div className="px-4 py-0 md:pl-40 md:pr-16">
        <Typography
          className="!mb-4 p-0 !font-extrabold md:!text-2xl"
          variant="h6"
        >
          Payment
        </Typography>

        <form onSubmit={onSubmit}>
          <PaymentElement
            id="payment-element"
            options={paymentElementOptions}
          />
          <SButton
            type="submit"
            disabled={isLoading}
            startIcon={
              isLoading ? <CircularProgress size={24} color="warning" /> : <></>
            }
            id="submit"
            className="mt-8"
          >
            <span id="button-text">
              {isLoading ? "Loading..." : "Book now and execute payment"}
            </span>
          </SButton>
          <p className="mt-4 text-sm">
            <strong>No worries!</strong> In case of early cancellation, you will
            receive the full amount back.
          </p>
        </form>
      </div>
    </>
  );
}
