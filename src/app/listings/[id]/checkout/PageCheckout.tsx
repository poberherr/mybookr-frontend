"use client";

import React, { useCallback, useContext, useEffect, useState } from "react";


import { Divider, Typography } from "@mui/material";

import createPersistedState from "use-persisted-state";
import { useMutation } from "urql";

import BackButton from "@/app/components/others/BackButton";

import { useIsClient } from "@/app/helpers/useIsClient";

import { BookingStatus, ExperienceItemFragment } from "@/gql/graphql";
import { graphql } from "@/gql";
import { BookingContext } from "@/app/contexts/booking";
import { useGetActivityFromExperience } from "@/app/helpers/useGetActivityFromExperience";
import ViewConfirmation from "./ViewConfirmation";
import ViewBookingForms from "./ViewBookingForms";
import Sidebar from "./Sidebar";

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

export default function PageCheckout({
  experience,
}: {
  experience: ExperienceItemFragment;
}) {

  // (Booking) Context
  const { activities } = useContext(BookingContext);
  const activityId = activities[experience.id];
  const activity = useGetActivityFromExperience(activityId, experience);

  // Init Mutations
  const [createBookingResult, createBooking] = useMutation(
    CreateBookingMutation,
  );
  const [checkBookingStatusResult, checkBookingStatus] =
    useMutation(CheckBookingMutation);

  // Booking flow token handling
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

  // Set initial booking state based on URL parameters (coming from stripe)
  const urlClientSecret = new URLSearchParams(window.location.search).get(
    "payment_intent_client_secret",
  );
  const [bookingUIState, setBookingUIState] = useState<BookingUIStates>(
    urlClientSecret ? "checkBookingStatus" : "bookingDetails",
  );

  // Frontend rendering and UI meta
  const [clientSecret, setClientSecret] = React.useState<string | undefined>();
  const [popupMessage, setPopupMessage] = useState<string | undefined>();

  // # UI Business Logic
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
      console.log("no data in create booking results")
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

  const price = activity?.availabilities
    ? activity.availabilities[0].pricePerUnit
    : undefined;

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
          <ViewConfirmation bookingUIState={bookingUIState} />
          <ViewBookingForms
            bookingUIState={"bookingDetails"}
            experience={experience}
            setBookingFormData={setBookingFormData}
            setPopupMessage={setPopupMessage}
            clientSecret={clientSecret}
          />
        </div>

        {/* Right section */}
        <div className="mr-40 hidden border-0 border-l border-r border-solid border-gray-100 md:block">
          <Sidebar experience={experience} price={price} />
        </div>
      </div>
    </>
  );
}
