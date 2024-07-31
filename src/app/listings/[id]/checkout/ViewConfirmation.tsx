import { CircularProgress } from "@mui/material";

import { StateValueFrom } from "xstate";
import { IBookingContext, bookingMachine } from "./bookingMachine";

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
  ["checkRedirectStatus", "Checking your payment status"],
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
      <div className="prose mx-auto text-center">
        <p className="mb-2 text-5xl">✅</p>
        <h1>Booking Confirmed</h1>
        <p>We have emailed details to {context.email}</p>
      </div>
    );
  }
};

export default ViewConfirmation;
