"use client";

import { InformationCircleIcon } from "@heroicons/react/24/solid";

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
  setError,
}: {
  setError: (errorMessage: string) => void;
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

      console.log("executing payment via stripe");

      const [{ error }] = await Promise.all([
        stripe.confirmPayment({
          elements,
          confirmParams: {
            // Make sure to change this to your payment completion page
            return_url: `${window.location.origin}${path}`,
          },
        }),
      ]);

      console.log("Stripe payment failed early with error:", error.message);
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
        setError(error.message);
      } else {
        setError(`An unexpected payment error occurred: ${error.message}`);
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
      <div className="px-4 py-0 pt-8 md:pl-40 md:pr-16">
        <Typography
          className="!mb-4 p-0 !font-extrabold md:!text-2xl"
          variant="h6"
        >
          Payment
        </Typography>
        <p className="my-8 rounded-xl border border-yellow-100 bg-yellow-50 p-8">
          <span className="mb-2 inline-block text-lg font-bold">
            <InformationCircleIcon className="inline-block w-6 text-gray-600" />{" "}
            Payment is in demo mode!
          </span>
          <br />
          You can use the credit card number{" "}
          <code className="rounded-sm border border-gray-100 p-1 px-2">
            4242 4242 4242 4242
          </code>{" "}
          with{" "}
          <code className="rounded-sm border border-gray-100 p-1 px-2">
            CVC 420
          </code>{" "}
          and any future date to test the payment!
        </p>

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
        </form>
      </div>
    </>
  );
}
