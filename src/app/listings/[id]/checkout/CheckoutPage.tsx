"use client";

import React, { useCallback, useContext, useEffect, useState } from "react";

import Image from "next/image";

import { CircularProgress, Divider, Typography } from "@mui/material";

import { Elements } from "@stripe/react-stripe-js";
import {
  Appearance,
  StripeElementsOptions,
  loadStripe,
} from "@stripe/stripe-js";
import createPersistedState from "use-persisted-state";
import { useMutation } from "urql";

import BackButton from "@/app/components/others/BackButton";
import PriceDetail from "@/app/components/others/PriceDetail";

import { useIsClient } from "@/app/helpers/useIsClient";

import BlaBla from "./BlaBla";
import BookingDataForm from "./BookingDataForm";
import { PaymentWrapper } from "./PaymentWrapper";
import { BookingStatus, ExperienceItemFragment } from "@/gql/graphql";
import { graphql } from "@/gql";
import { BookingContext } from "@/app/contexts/booking";
import { useGetActivityFromExperience } from "@/app/helpers/useGetActivityFromExperience";
import { useFormatPrice } from "@/app/helpers/useFormatPrice";

interface BookingStateStore {
  [key: string]: string;
}

const useBookingStateStore = createPersistedState<BookingStateStore>(
  "mybookr-experience-to-booking-flow-token",
);

const CreateBookingMutation = graphql(`
  mutation CreateBookingMutation(
    $name: String!
    $email: String!
    $activityId: ID!
    $availabilityId: ID!
    $numberOfSlots: Int!
  ) {
    createBooking(
      data: {
        name: $name
        email: $email
        activityId: $activityId
        availabilityId: $availabilityId
        numberOfSlots: $numberOfSlots
      }
    ) {
      bookingFlowToken
      paymentIntentId # we probably dont need this
      paymentClientSecret
    }
  }
`);

const CheckBookingMutation = graphql(`
  mutation CheckBookingMutation($bookingFlowToken: String!) {
    checkBookingStatus(bookingFlowToken: $bookingFlowToken)
  }
`);

export interface BookingFormData {
  bookingDate: Date;
  activityId: string;
  email: string;
}

export type BookingUIStates =
  | "bookingDetails"
  | "providePaymentCredentials"
  | "checkBookingStatus"
  | "confirmation";

export default function CheckoutPage({
  experience,
}: {
  experience: ExperienceItemFragment;
}) {
  const { activities, email } = useContext(BookingContext);
  const activityId = activities[experience.id];
  const activity = useGetActivityFromExperience(activityId, experience);

  const [popupMessage, setPopupMessage] = useState<string | undefined>();

  const [bookingsPerExperience, setBookingsPerExperience] =
    useBookingStateStore();

  const bookingFlowToken =
    bookingsPerExperience && bookingsPerExperience[experience.id];

  const setBookingFlowToken = useCallback((newToken: string) => {
    setBookingsPerExperience((curr) => ({
      ...(curr || {}),
      [experience.id]: newToken,
    }));
  }, []);

  const [bookingFormData, setBookingFormData] = useState<
    BookingFormData | undefined
  >();

  const urlClientSecret = new URLSearchParams(window.location.search).get(
    "payment_intent_client_secret",
  );

  const [bookingUIState, setBookingUIState] = useState<BookingUIStates>(
    urlClientSecret ? "checkBookingStatus" : "bookingDetails",
  );

  const [createBookingResult, createBooking] = useMutation(
    CreateBookingMutation,
  );
  const [checkBookingStatusResult, checkBookingStatus] =
    useMutation(CheckBookingMutation);

  const [clientSecret, setClientSecret] = React.useState<string | undefined>();
  const stripe = React.useMemo(() => {
    if (!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) {
      throw new Error("Unable to init stripe without credentials");
    }
    return loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
  }, []);

  // Create new booking as soon we have availability and a booking flow token
  useEffect(() => {
    if (!activity || !activity.availabilities || bookingFlowToken) {
      return;
    }
    if (bookingFormData) {
      if (!bookingFlowToken) {
        console.log("init booking and get first flow token");
        // mutationCreateBooking
        createBooking({
          ...bookingFormData,
          name: "Customer Name (mocked)", // @todo add name field to frontend
          availabilityId: activity.availabilities[0].id,
          numberOfSlots: 1, // @todo no more needed
        });
        return;
      }
    }
  }, [activity, bookingFormData, bookingFlowToken]);

  // react on createBookingResult
  useEffect(() => {
    if (createBookingResult.error) {
      console.error(createBookingResult.error);
    }
    if (!createBookingResult.data) {
      return;
    }
    setBookingUIState("providePaymentCredentials");
    setBookingFlowToken(
      createBookingResult.data?.createBooking.bookingFlowToken,
    );
    if (!createBookingResult.data?.createBooking.paymentClientSecret) {
      throw new Error("Booking should return a payment client secret");
    }
    setClientSecret(
      createBookingResult.data?.createBooking.paymentClientSecret,
    );
  }, [createBookingResult]);

  // execute booking status check as soon booking status check is shown
  useEffect(() => {
    if (bookingUIState === "checkBookingStatus" && bookingFlowToken) {
      // @todo check multiple times when status is still processing
      checkBookingStatus({ bookingFlowToken });
      return;
    }
  }, [bookingUIState, bookingFlowToken]);

  // react on checkBookingStatus
  useEffect(() => {
    console.dir({ checkBookingStatusResult }, { depth: null });
    if (checkBookingStatusResult.error) {
      console.error(checkBookingStatusResult.error);
    }
    if (!checkBookingStatusResult.data) {
      return;
    }

    const bookingStatus = checkBookingStatusResult.data.checkBookingStatus;
    if (bookingStatus === BookingStatus.PaymentFailed) {
      setBookingUIState("providePaymentCredentials");
      alert("@todo trigger new payment intent (via updateBooking?)");
      return;
    }
    if (bookingStatus === BookingStatus.PaymentFinished) {
      setBookingUIState("confirmation");
      return;
    }
  }, [checkBookingStatusResult, setBookingUIState]);

  const isClient = useIsClient();

  const formattedPrice = useFormatPrice(
    activity?.availabilities
      ? activity.availabilities[0].pricePerUnit
      : undefined,
    true,
  );

  const appearance: Appearance = {
    theme: "stripe",
  };
  const options: StripeElementsOptions = {
    clientSecret,
    appearance,
  };

  if (!isClient) {
    return null;
  }

  return (
    <>
      <BackButton pageName="details" />

      <Typography
        className="px-4 py-16 !text-2xl !font-extrabold md:px-40 md:!text-3xl"
        component="div"
      >
        Let’s make sure everything looks right.
      </Typography>

      <Divider />

      <div className="grid grid-cols-1 grid-rows-1 md:grid-cols-[2fr_minmax(min-content,480px)] xl:grid-cols-[2fr_minmax(min-content,600px)]">
        <div className="grid grid-cols-1 gap-16 px-0 py-8">
          {popupMessage && <strong>popupMessage: {popupMessage}</strong>}
          {bookingUIState === "confirmation" && (
            <div className="prose mx-auto text-center">
              <h1>Booking Confirmed</h1>
              <p>We have emailed details to {email}</p>
            </div>
          )}
          {bookingUIState === "checkBookingStatus" && (
            <div className="prose mx-auto text-center">
              <CircularProgress size={48} /> <p>Double checking payment...</p>
              <p>This should only take a few seconds!</p>
            </div>
          )}
          {(bookingUIState === "bookingDetails" ||
            bookingUIState === "providePaymentCredentials") && (
            <BookingDataForm
              experience={experience}
              setBookingFormData={setBookingFormData}
              bookingUIState={bookingUIState}
            />
          )}
          {bookingUIState === "providePaymentCredentials" && clientSecret && (
            <Elements options={options} stripe={stripe}>
              <PaymentWrapper
                experience={experience}
                setPopupMessage={setPopupMessage}
              />
            </Elements>
          )}
          <BlaBla />
        </div>

        {/* Right section */}
        <div className="mr-40 hidden border-0 border-l border-r border-solid border-gray-100 md:block">
          <div className="sticky top-5 grid gap-8 bg-white px-0 py-16">
            {/* Villa Title */}
            <Typography
              className="!mb-4 p-0 !font-extrabold md:px-8 md:py-0 md:!text-2xl"
              variant="h6"
            >
              {experience.title}
            </Typography>

            {/* Villa Image */}
            {experience.medias &&
              experience.medias.length > 0 &&
              experience.medias[0].url && (
                <div className="relative aspect-video w-full p-0 md:px-8 md:py-0">
                  <Image
                    className="rounded object-cover"
                    src={experience.medias[0].url}
                    alt=""
                    fill={true}
                  />
                </div>
              )}

            {/* Price detail part */}
            <div className="p-0 md:px-8 md:py-0">
              <Typography
                className="!mb-6 !text-base font-extrabold"
                component="div"
              >
                Price details
              </Typography>

              {experience && <PriceDetail experience={experience} />}
            </div>

            <Divider />

            {/* Total part */}
            {formattedPrice && (
              <div className="grid gap-4 p-0 md:px-8 md:py-0">
                <div className="grid grid-cols-[1fr_max-content] items-center gap-2">
                  <Typography variant="body2" className="!text-sm !font-black">
                    Total
                  </Typography>

                  <Typography
                    variant="body2"
                    className="text-right !text-sm !font-black"
                  >
                    {formattedPrice}
                  </Typography>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
