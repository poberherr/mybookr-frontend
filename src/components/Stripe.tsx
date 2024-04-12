import React from "react";



import { Elements } from "@stripe/react-stripe-js";
import { Appearance, StripeElementsOptions, loadStripe } from "@stripe/stripe-js";



import CheckoutForm from "./CheckoutForm";


export const Stripe = () => {
  const [clientSecret, setClientSecret] = React.useState("");
  const [paymentIntentId, setPaymentIntentId] = React.useState("");

  

  const stripe = React.useMemo(() => {
    if (!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) {
      throw new Error("Unable to init stripe without credentials");
    }
    return loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
  }, []);

  React.useEffect(() => {
    // Create PaymentIntent as soon as the page loads
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
  }, []);

  const appearance: Appearance = {
    theme: "stripe",
  };
  const options: StripeElementsOptions = {
    clientSecret,
    appearance,
  };

  return (
    <div className="flex w-full flex-col gap-6 rounded bg-gray-50 p-12">
      <h2>Stripe:</h2>
      <ul>
        <li>PaymentIntentId: {paymentIntentId}</li>
        <li>clientSecret: {clientSecret}</li>
      </ul>
      {clientSecret && (
        <Elements options={options} stripe={stripe}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
};