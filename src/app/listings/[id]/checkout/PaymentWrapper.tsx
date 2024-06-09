"use client";

import React, { useContext, useMemo } from "react";

import { Divider, Typography } from "@mui/material";

import { BookingContext } from "@/app/contexts/booking";

import PaymentForm from "./PaymentForm";
import { ExperienceItemFragment } from "@/gql/graphql";

export const PaymentWrapper = ({experience}: {experience: ExperienceItemFragment}) => {
  const { bookingDate, activities, email } = useContext(BookingContext);
  const activityId = activities[experience.id];

  const isReady = useMemo(
    () => !!bookingDate && !!activityId && !!email,
    [bookingDate, activityId, email],
  );

  if (!isReady) {
    return null;
  }

  return (
    <>
      <Divider />
      <div className="px-4 py-0 md:pl-40 md:pr-16">
        <Typography
          className="!mb-4 p-0 !font-extrabold md:!text-2xl"
          variant="h6"
        >
          Payment
        </Typography>
        <PaymentForm />
      </div>
    </>
  );
};
