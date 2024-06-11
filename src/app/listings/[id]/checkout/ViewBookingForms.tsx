import React, { useEffect, useRef } from "react";

import { Elements } from "@stripe/react-stripe-js";

import BlaBla from "./BlaBla";
import FormBookingDetails, { BookingFormData } from "./FormBookingDetails";
import FormPayment from "./FormPayment";
import { ExperienceItemFragment } from "@/gql/graphql";
import { StateValueFrom } from "xstate";

import {
  Appearance,
  StripeElementsOptions,
  loadStripe,
} from "@stripe/stripe-js";
import { IBookingContext, bookingMachine } from "./bookingMachine";

interface IProps {
  submit: (formData: BookingFormData) => void;
  setError: (errorMessage: string) => void;
  value: StateValueFrom<typeof bookingMachine>;
  context: IBookingContext;
  experience: ExperienceItemFragment;
}

const ViewConfirmation = ({
  submit,
  value,
  context,
  experience,
  setError,
}: IProps) => {
  const stripe = React.useMemo(() => {
    if (!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) {
      throw new Error("Unable to init stripe without credentials");
    }
    return loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
  }, []);

  const appearance: Appearance = {
    theme: "stripe",
  };
  const options: StripeElementsOptions = {
    clientSecret: context.clientSecret,
    appearance,
  };
  const paymentWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (value === "ProvidePaymentCredentials") {
      setTimeout(() => {
        paymentWrapperRef.current &&
          paymentWrapperRef.current.scrollIntoView({
            behavior: "smooth",
          });
      }, 300);
    }
  }, [value, paymentWrapperRef.current]);

  return (
    <>
      {(value === "BookingDetails" ||
        value === "ProvidePaymentCredentials") && (
        <FormBookingDetails
          experience={experience}
          submit={submit}
          context={context}
          value={value}
        />
      )}
      <div ref={paymentWrapperRef}>
        {value === "ProvidePaymentCredentials" &&
          stripe &&
          context.clientSecret && (
            <Elements options={options} stripe={stripe}>
              <FormPayment setError={setError} />
            </Elements>
          )}
      </div>
      <BlaBla />
    </>
  );
};

export default ViewConfirmation;
