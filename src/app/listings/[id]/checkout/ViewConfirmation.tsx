import React from "react";

import { CircularProgress } from "@mui/material";

import { StateValueFrom } from "xstate";
import { IBookingContext, bookingMachine } from "./bookingMachine";

import "./ViewConfirmation.css";
import { RenderLabel } from "@/app/helpers/labels";
import ScrollIntoView from "@/app/components/ScrollIntoView";

interface IProps {
  value: StateValueFrom<typeof bookingMachine>;
  context: IBookingContext;
}

const headlines: Map<StateValueFrom<typeof bookingMachine>, string> = new Map([
  ["RedirectToPayment", "Redirecting you now to our payment partner"],
  ["CheckBookingStatus", "Checking your payment status"],
  ["CreateBooking", "Preparing your booking"],
  ["UpdateBooking", "Updating your booking"],
  ["CreatePayment", "Preparing your payment"],
  ["CheckRedirectStatus", "Checking your payment status"],
]);

const ViewConfirmation = ({ value, context }: IProps) => {
  if (headlines.has(value)) {
    return (
      <div className="prose mx-auto text-center">
        <div className="flex items-center justify-center gap-8">
          <ScrollIntoView>
            <CircularProgress size={48} value={100} variant={"indeterminate"} />
          </ScrollIntoView>
        </div>
        <p>{headlines.get(value)}</p>
        <p className="text-sm text-gray-400">
          This should only take a few seconds!
        </p>
      </div>
    );
  }

  if (value === "Confirmation") {
    return (
      <div className="mx-auto grid gap-6 text-center">
        <ScrollIntoView>
          <svg
            className="checkmark mb-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 52 52"
          >
            <circle
              className="checkmark__circle"
              cx="26"
              cy="26"
              r="25"
              fill="none"
            />
            <path
              className="checkmark__check"
              fill="none"
              d="M14.1 27.2l7.1 7.2 16.7-16.8"
            />
          </svg>
        </ScrollIntoView>

        <h1 className="text-2xl font-bold">
          <RenderLabel labelId="confirmationTitle" />
        </h1>
        <p className="text-gray-600">
          We have emailed details to {context.email}
        </p>

        <div className="mx-2 rounded-2xl border border-blue-200 bg-blue-50 px-8 py-6 shadow md:px-12">
          <p className="text-4xl md:text-6xl">{context.referenceCode}</p>
          <p className="text-sm leading-10 text-gray-600">
            Booking Reference Code
          </p>
        </div>
      </div>
    );
  }
};

export default ViewConfirmation;
