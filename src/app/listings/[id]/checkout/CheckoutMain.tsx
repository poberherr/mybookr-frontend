"use client";

import React, { useContext, useEffect } from "react";

import { Divider, Typography } from "@mui/material";

import { SnapshotFrom } from "xstate";
import { useMachine } from "@xstate/react";

import BackButton from "@/app/components/others/BackButton";

import { useIsClient } from "@/app/helpers/useIsClient";

import { ExperienceItemFragment } from "@/gql/graphql";
import { useGetActivityFromExperience } from "@/app/helpers/useGetActivityFromExperience";
import ViewConfirmation from "./ViewConfirmation";
import ViewBookingForms from "./ViewBookingForms";
import Sidebar from "./Sidebar";
import { bookingMachine } from "./bookingMachine";
import { Client } from "urql";
import StyledDialog from "@/app/components/ui/StyledDialog";
import { SearchStateMachineContext } from "@/app/state-machines/searchMachine";
import { RenderLabel } from "@/app/helpers/labels";
import { useExperienceURL } from "@/app/helpers/urls";

export type BookingSnapshot = SnapshotFrom<typeof bookingMachine>;

export type BookingUIStates =
  | "bookingDetails"
  | "providePaymentCredentials"
  | "checkBookingStatus"
  | "confirmation";

export default function CheckoutMain({
  experience,
  initialBookingMachineSnapshot,
  client,
}: {
  experience: ExperienceItemFragment;
  initialBookingMachineSnapshot: BookingSnapshot | undefined;
  client: Client;
}) {
  // Get price based on selected activity
  const {
    searchMachineState: {
      context: { bookingDate },
    },
  } = useContext(SearchStateMachineContext);
  const activity = useGetActivityFromExperience(experience);
  const experienceUrl = useExperienceURL(experience);

  const price = activity?.price;

  // Permanently store state machine in local stoarage

  const [bookingState, sendBookingAction] = useMachine(bookingMachine, {
    input: {
      experienceId: experience.id,
      client,
      date: bookingDate,
      activityId: activity?.id,
    },
    snapshot: initialBookingMachineSnapshot,
  });

  useEffect(() => {
    // Debugger for us
    console.table({
      type: "BookingState",
      value: bookingState.value,
    });
    console.dir(bookingState.context);

    if (
      bookingState.value === "BookingDetails" ||
      bookingState.value === "Confirmation" ||
      bookingState.value === "DisplayError"
    ) {
      return;
    }

    // Store current state to localStorage for recovery
    console.log("Storing booking state machine to local storage")
    try {
      localStorage.setItem(
        `experience-${experience.id}-booking-v3`,
        JSON.stringify(bookingState.machine.getPersistedSnapshot(bookingState)),
      );
    } catch (err) {
      console.log("Failed to store booking machine state to local storage");
      console.error(err);
    }
  }, [bookingState]);

  // Catch confirmation and remove booking from state to allow a new booking!
  useEffect(() => {
    if (bookingState.value === "Confirmation") {
      localStorage.removeItem(`experience-${experience.id}-booking-v3`);
    }
  }, [bookingState.value]);

  const isClient = useIsClient();

  if (!isClient) {
    return null;
  }

  return (
    <>
      <StyledDialog
        title="Ooops - an error occurred"
        children={bookingState.context.errorMessage}
        showDialog={bookingState.value === "DisplayError"}
        setShowDialog={() => sendBookingAction({ type: "closePopup" })}
      />
      <BackButton pageName={experience.title} route={experienceUrl} />
      <Typography
        className="px-4 py-16 !text-2xl !font-extrabold md:px-40 md:!text-3xl"
        component="div"
      >
        <RenderLabel labelId="bookingFormTitle" />
      </Typography>
      <Divider />
      <div className="grid grid-cols-1 grid-rows-1 md:grid-cols-[2fr_minmax(min-content,480px)] xl:grid-cols-[2fr_minmax(min-content,600px)]">
        <div className="order-2 grid grid-cols-1 gap-16 px-0 py-8 md:order-1">
          <ViewConfirmation
            value={bookingState.value}
            context={bookingState.context}
          />
          <ViewBookingForms
            submit={(formData) =>
              sendBookingAction({ type: "submit", formData })
            }
            setError={(errorMessage: string) =>
              sendBookingAction({ type: "error", errorMessage })
            }
            value={bookingState.value}
            context={bookingState.context}
            experience={experience}
          />
          {process.env.NODE_ENV === "development" && (
            <div className="prose px-4 py-0 md:pl-40 md:pr-16">
              <h2>Development debugging (invisible on production)</h2>
              <pre>
                <code>
                  {JSON.stringify(
                    {
                      bookingState,
                    },
                    null,
                    2,
                  )}
                </code>
              </pre>
            </div>
          )}
        </div>

        {/* Right section */}
        <div className="order-1 border-0 border-l border-r border-solid border-gray-100 px-4 md:order-2 md:mr-40 md:px-0">
          <Sidebar experience={experience} price={price} />
        </div>
      </div>
    </>
  );
}
