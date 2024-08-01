"use client";

import React, { useMemo } from "react";
import CheckoutMain, { BookingSnapshot } from "./CheckoutMain";
import { useClient } from "urql";
import { ExperienceItemFragment } from "@/gql/graphql";

export default function CheckoutWrapper({
  experience,
}: {
  experience: ExperienceItemFragment;
}) {
  const client = useClient();

  const initialBookingMachineSnapshot = useMemo(() => {
    let dumbRestore;
    try {
      const entry = localStorage.getItem(
        `experience-${experience.id}-booking-v2`,
      );
      if (!entry) {
        console.log('not in localhost')
        return null;
      }
      dumbRestore = JSON.parse(entry);
    } catch (err) {
      return null;
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

  if (initialBookingMachineSnapshot === undefined) {
    return "Preparing booking engine...";
  }

  return (
    <CheckoutMain
      experience={experience}
      client={client}
      initialBookingMachineSnapshot={
        initialBookingMachineSnapshot === null
          ? undefined
          : initialBookingMachineSnapshot
      }
    />
  );
}
