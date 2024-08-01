import { CircularProgress, Typography } from "@mui/material";

import { StateValueFrom } from "xstate";
import { IBookingContext, bookingMachine } from "./bookingMachine";

import "./ViewConfirmation.css"

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
          <CircularProgress size={48} value={100} variant={"indeterminate"} />
        </div>
        <p>{headlines.get(value)}</p>
        <p className="text-gray-400 text-sm">This should only take a few seconds!</p>
      </div>
    );
  }

  if (value === "Confirmation") {
    return (
      <div className="mx-auto grid gap-12 text-center">
        <svg
          className="checkmark mb-12"
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

        <h1 className="text-2xl font-bold">Booking Confirmed</h1>
        <p className="text-gray-600">
          We have emailed details to {context.email}
        </p>

        <div className="rounded-2xl border border-blue-200 mx-2 px-8 md:px-12 py-6 bg-blue-50 shadow">
          <p className="text-4xl md:text-6xl">{context.referenceCode}</p>
          <p className="text-gray-600 text-sm leading-10">Booking Reference Code</p>
        </div>
      </div>
    );
  }
};

export default ViewConfirmation;
