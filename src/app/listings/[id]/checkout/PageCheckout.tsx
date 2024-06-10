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

// Allows one booking per experience with dedicated date and information
interface BookingStore {
  experienceId: string;
  bookingFlowToken?: string;
  date?: Date;
  email?: string;
  activityId?: string;
}

const useBookingStore = createPersistedState<BookingStore>(
  "mybookr-experience-booking-v0",
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
      paymentClientSecret
    }
  }
`);

const UpdateBookingMutation = graphql(`
  mutation updateBookingMutation(
    $bookingFlowToken: String!
    $name: String!
    $email: String!
    $activityId: ID!
    $availabilityId: ID!
    $numberOfSlots: Int!
  ) {
    updateBooking(
      data: {
        bookingFlowToken: $bookingFlowToken
        name: $name
        email: $email
        activityId: $activityId
        availabilityId: $availabilityId
        numberOfSlots: $numberOfSlots
      }
    ) {
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
  const { activities, dateFrom } = useContext(BookingContext);
  const activityId = activities[experience.id];
  const activity = useGetActivityFromExperience(activityId, experience);

  // Init Mutations
  const [createBookingResult, createBooking] = useMutation(
    CreateBookingMutation,
  );
  const [updateBookingResult, updateBooking] = useMutation(
    UpdateBookingMutation,
  );
  const [checkBookingStatusResult, checkBookingStatus] =
    useMutation(CheckBookingMutation);

  // Permanent Storage (Booking)
  const [booking, setBooking] = useBookingStore({
    experienceId: experience.id,
  });

  // Reset booking if user switches experience (multi booking support later!)
  useEffect(() => {
    if (booking.experienceId !== experience.id) {
      setBooking({ experienceId: experience.id });
    }
  }, [experience, booking]);

  const setBookingFlowToken = useCallback(
    (newToken: string) => {
      setBooking((curr) => ({ ...curr, bookingFlowToken: newToken }));
    },
    [booking],
  );

  const [bookingFormData, setBookingFormData] = useState<
    BookingFormData | undefined
  >();

  // Set initial booking UI state based on URL parameters (coming from stripe)
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

  // ==== Create / Update Booking ====
  // Create new booking as soon we have availability and a booking flow token
  useEffect(() => {
    if (!activity || !activity.availabilities) {
      console.log("Cant continue, no activity selected");
      return;
    }
    if (bookingFormData) {
      if (!booking.bookingFlowToken) {
        console.log("init booking and get first flow token");
        createBooking({
          ...bookingFormData,
          name: "Customer Name (mocked)", // @todo add name field to frontend
          availabilityId: activity.availabilities[0].id, // @todo replace this with the absence logic from PR
          numberOfSlots: 1, // @todo no more needed
        });
        return;
      }
      console.log("update booking as we already have booking data");
      updateBooking({
        bookingFlowToken: booking.bookingFlowToken,
        ...bookingFormData,
        name: "Customer Name (mocked)", // @todo add name field to frontend
        availabilityId: activity.availabilities[0].id, // @todo replace this with the absence logic from PR
        numberOfSlots: 1, // @todo no more needed
      });
    }
  }, [activity, bookingFormData, booking]);

  // react on createBookingResult
  useEffect(() => {
    if (createBookingResult.error) {
      console.error(createBookingResult.error);
      setPopupMessage("There was an error on our side. Please try again.")
      setBookingUIState("bookingDetails");
      throw new Error("Unable to create booking. Oops!")
      // @todo actually handle error on user side
    }
    if (!createBookingResult.data) {
      return;
    }
    setBookingUIState("providePaymentCredentials");
    setBookingFlowToken(
      createBookingResult.data.createBooking.bookingFlowToken,
    );
    setClientSecret(createBookingResult.data.createBooking.paymentClientSecret);
  }, [createBookingResult]);

  // ==== Update Booking ====
  // react on UpdateBookingResult
  useEffect(() => {
    if (updateBookingResult.error) {
      console.error(updateBookingResult.error);

      // create try to create booking then
      if (bookingFormData && activity?.availabilities) {
        createBooking({
          ...bookingFormData,
          name: "Customer Name (mocked)", // @todo add name field to frontend
          availabilityId: activity.availabilities[0].id, // @todo replace this with the absence logic from PR
          numberOfSlots: 1, // @todo no more needed
        });
        return
      }

      // @todo actually handle error on user side
      // We should not end here. For savety, lets send user to the beginning
      setBookingUIState("bookingDetails")
      return
    }
    if (!updateBookingResult.data) {
      return;
    }
    setBookingUIState("providePaymentCredentials");
    setClientSecret(updateBookingResult.data.updateBooking.paymentClientSecret);
  }, [updateBookingResult]);

  // ===== Confirm Booking =====
  // execute booking status check as soon booking status check is shown
  useEffect(() => {
    if (bookingUIState === "checkBookingStatus" && booking.bookingFlowToken) {
      // @todo check multiple times when status is still processing
      checkBookingStatus({ bookingFlowToken: booking.bookingFlowToken });
      return;
    }
  }, [bookingUIState, booking]);

  // react on checkBookingStatus
  useEffect(() => {
    if (bookingUIState !== "checkBookingStatus") {
      return;
    }
    if (checkBookingStatusResult.error) {
      console.error(checkBookingStatusResult.error);
    }
    if (!checkBookingStatusResult.data) {
      return;
    }

    const bookingStatus = checkBookingStatusResult.data.checkBookingStatus;
    if (bookingStatus === BookingStatus.PaymentFailed) {
      setBookingUIState("bookingDetails");
      setPopupMessage("Payment failed. Please try again");
      return;
    }
    if (bookingStatus === BookingStatus.PaymentFinished) {
      setBookingUIState("confirmation");
      return;
    }
  }, [checkBookingStatusResult, bookingUIState, setBookingUIState]);

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
          bookingUIState: {bookingUIState}
          <ViewConfirmation bookingUIState={bookingUIState} />
          <ViewBookingForms
            bookingUIState={bookingUIState}
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
