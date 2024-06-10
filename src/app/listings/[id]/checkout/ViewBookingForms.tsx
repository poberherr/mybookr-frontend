import { BookingFormData, BookingUIStates } from "./CheckoutPage";

import React from "react";

import { Elements } from "@stripe/react-stripe-js";

import BlaBla from "./BlaBla";
import FormBookingDetails from "./FormBookingDetails";
import FormPayment from "./FormPayment";
import { ExperienceItemFragment } from "@/gql/graphql";

import {
  Appearance,
  StripeElementsOptions,
  loadStripe,
} from "@stripe/stripe-js";

interface IProps {
  bookingUIState: BookingUIStates;
  experience: ExperienceItemFragment;
  setBookingFormData: React.Dispatch<
    React.SetStateAction<BookingFormData | undefined>
  >;
  setPopupMessage: React.Dispatch<React.SetStateAction<string | undefined>>;
  clientSecret: string | undefined;
}

const ViewConfirmation = ({
  bookingUIState,
  experience,
  setBookingFormData,
  setPopupMessage,
  clientSecret,
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
    clientSecret,
    appearance,
  };

  return (
    <>
      {(bookingUIState === "bookingDetails" ||
        bookingUIState === "providePaymentCredentials") && (
        <FormBookingDetails
          experience={experience}
          setBookingFormData={setBookingFormData}
          bookingUIState={bookingUIState}
        />
      )}
      {bookingUIState === "providePaymentCredentials" &&
        stripe &&
        clientSecret && (
          <Elements options={options} stripe={stripe}>
            <FormPayment setPopupMessage={setPopupMessage} />
          </Elements>
        )}
      <BlaBla />
    </>
  );
};

export default ViewConfirmation;
