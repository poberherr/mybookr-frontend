"use client";

import React, { useMemo } from "react";
import CheckoutMain, { BookingSnapshot } from "./CheckoutMain";
import { useClient } from "urql";
import { ExperienceItemFragment } from "@/gql/graphql";
import { CategoryContext } from "@/app/context/categoryContext";

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
        console.log("not in localhost");
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
    <CategoryContext.Provider
      value={
        (experience.categories && experience.categories[0].path) ||
        process.env.NEXT_PUBLIC_MYBOOKR_CATEGORY_FILTER ||
        "Root.*"
      }
    >
      <CheckoutMain
        experience={experience}
        client={client}
        initialBookingMachineSnapshot={
          initialBookingMachineSnapshot === null
            ? undefined
            : initialBookingMachineSnapshot
        }
      />
    </CategoryContext.Provider>
  );
}
