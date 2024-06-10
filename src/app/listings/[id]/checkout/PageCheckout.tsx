"use client";

import React, { useCallback, useContext, useEffect, useState } from "react";

import { Divider, Typography } from "@mui/material";

import createPersistedState from "use-persisted-state";

import BackButton from "@/app/components/others/BackButton";

import { useIsClient } from "@/app/helpers/useIsClient";

import { ExperienceItemFragment } from "@/gql/graphql";
import { BookingContext } from "@/app/contexts/booking";
import { useGetActivityFromExperience } from "@/app/helpers/useGetActivityFromExperience";
import ViewConfirmation from "./ViewConfirmation";
import ViewBookingForms from "./ViewBookingForms";
import Sidebar from "./Sidebar";
import useBookingConfirmation from "./useBookingConfirmation";
import useBookingMutations from "./useBookingMutations";

// Allows one booking per experience with dedicated date and information
export interface BookingStore {
  experienceId: string;
  bookingFlowToken?: string;
  date?: Date;
  email?: string;
  activityId?: string;
}

const useBookingStore = createPersistedState<BookingStore>(
  "mybookr-experience-booking-v0",
);

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
  useBookingMutations({
    activity,
    booking,
    bookingFormData,
    setBookingFlowToken,
    setBookingUIState,
    setClientSecret,
    setPopupMessage
  })

  // ===== Confirm Booking =====
  useBookingConfirmation({
    booking,
    bookingUIState,
    setBookingUIState,
    setPopupMessage,
    setBooking
  })

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
          {popupMessage && (
            <div>
              <strong>popupMessage: {popupMessage}</strong> @todo turn this into
              real popup
            </div>
          )}
          <ViewConfirmation bookingUIState={bookingUIState} />
          <ViewBookingForms
            bookingUIState={bookingUIState}
            experience={experience}
            setBooking={setBooking}
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
