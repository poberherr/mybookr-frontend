"use client";

import React, { useContext, useMemo } from "react";

import { Divider, Typography } from "@mui/material";

import { BookingContext } from "@/app/contexts/booking";

import PaymentForm from "./PaymentForm";

export const PaymentWrapper = () => {
  const { guest, email } = useContext(BookingContext);

  const isReady = useMemo(
    () => !!guest && !!email,
    [guest, email],
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
