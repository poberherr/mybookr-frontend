import React, { FormEvent, useCallback } from "react";

import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { StripePaymentElementOptions } from "@stripe/stripe-js";
import { usePathname } from "next/navigation";

import { CircularProgress } from "@mui/material";

import { SButton } from "./ui/SButton";

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const path = usePathname();

  const [message, setMessage] = React.useState<string | null>(null);
  const [isLoading, setIsLoading] = React.useState(false);

  /* THIS IS CONFIRM PAGE THINGS? */
  React.useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret",
    );

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      if (!paymentIntent) {
        return;
      }
      switch (paymentIntent.status) {
        case "succeeded":
          setMessage("Payment succeeded!");
          break;
        case "processing":
          setMessage("Your payment is processing.");
          break;
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.");
          break;
        default:
          setMessage("Something went wrong.");
          break;
      }
    });
  }, [stripe]);

  const onSubmit = useCallback(async (e: FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: `${window.location.origin}/${path}/confirmation`,
      },
    });

    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.
    if (
      (error.type === "card_error" || error.type === "validation_error") &&
      error.message
    ) {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occurred.");
    }

    setIsLoading(false);
  }, []);

  const paymentElementOptions: StripePaymentElementOptions = {
    layout: "tabs",
  };

  return (
    <form onSubmit={onSubmit}>
      <PaymentElement id="payment-element" options={paymentElementOptions} />
      <SButton type="submit" disabled={isLoading} id="submit" className="mt-8">
        <span id="button-text">
          {isLoading ? (
            <>
              <CircularProgress size={24} color="warning" /> Loading...
            </>
          ) : (
            "Prepare payment to reserve"
          )}
        </span>
      </SButton>
      <p className="mt-4 text-sm">
        <strong>No worries!</strong> Your bank account will only be charged when
        the host accepts your reservation.
      </p>
      {/* Show any error or success messages */}
      {message && <div id="payment-message">{message}</div>}
    </form>
  );
}
