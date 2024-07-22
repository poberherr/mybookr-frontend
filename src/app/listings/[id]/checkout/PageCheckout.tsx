"use client";

import React, { useContext, useEffect, useMemo } from "react";

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
import { useClient } from "urql";
import StyledDialog from "@/app/components/ui/StyledDialog";
import { SearchStateMachineContext } from "@/app/state-machines/searchMachine";

type BookingSnapshot = SnapshotFrom<typeof bookingMachine>;

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
  const client = useClient();

  // Get price based on selected activity
  const {
    searchMachineState: {
      context: { bookingDate },
    },
  } = useContext(SearchStateMachineContext);
  const activity = useGetActivityFromExperience(experience);

  const price = activity?.price;

  // Permanently store state machine in local stoarage
  const initialBookingMachineSnapshot = useMemo(() => {
    let dumbRestore;
    try {
      const entry = localStorage.getItem(`experience-${experience.id}-booking`);
      if (!entry) {
        return undefined;
      }
      dumbRestore = JSON.parse(entry);
    } catch (err) {
      return undefined;
    }
    return {
      ...dumbRestore,
      context: {
        ...dumbRestore.context,
        client,
        date: new Date(dumbRestore.context.date || new Date()),
      },
    } as BookingSnapshot;
  }, []);

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
    console.log("State updated:", bookingState.value);
    console.table({ context: bookingState.context });

    // Store current state to localStorage for recovery
    localStorage.setItem(
      `experience-${experience.id}-booking`,
      JSON.stringify(bookingState.machine.getPersistedSnapshot(bookingState)),
    );
  }, [bookingState]);

  // Catch redirect
  useEffect(() => {
    if (!window) {
      return;
    }
    const searchParams = new URLSearchParams(window.location.search);

    const redirectStatus = searchParams.get("redirect_status");
    const paymentIntentClientSecret = searchParams.get(
      "payment_intent_client_secret",
    );

    if (
      bookingState.value === "ProvidePaymentCredentials" &&
      redirectStatus === "succeeded" &&
      paymentIntentClientSecret === bookingState.context.clientSecret
    ) {
      sendBookingAction({ type: "paymentIsProcessing" });
    }
  }, [bookingState]);

  // Catch confirmation
  useEffect(() => {
    if (bookingState.value === "Confirmation") {
      localStorage.removeItem(`experience-${experience.id}-booking`);
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
      <BackButton
        pageName={experience.title}
        route={`/listings/${experience.id}`}
      />
      <Typography
        className="px-4 py-16 !text-2xl !font-extrabold md:px-40 md:!text-3xl"
        component="div"
      >
        Let’s make sure everything looks right.
      </Typography>
      <Divider />
      <div className="grid grid-cols-1 grid-rows-1 md:grid-cols-[2fr_minmax(min-content,480px)] xl:grid-cols-[2fr_minmax(min-content,600px)]">
        <div className="grid grid-cols-1 gap-16 px-0 py-8">
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
        <div className="mr-40 hidden border-0 border-l border-r border-solid border-gray-100 md:block">
          <Sidebar experience={experience} price={price} />
        </div>
      </div>
    </>
  );
}
