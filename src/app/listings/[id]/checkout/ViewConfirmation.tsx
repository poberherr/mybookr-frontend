import { CircularProgress } from "@mui/material";

import { StateValueFrom } from "xstate";
import { IBookingContext, bookingMachine } from "./bookingMachine";

interface IProps {
  value: StateValueFrom<typeof bookingMachine>;
  context: IBookingContext;
}

const ViewConfirmation = ({ value, context }: IProps) => {
  if (value === "CheckBookingStatus" || value === "AwaitingPaymentStatus") {
    return (
      <div className="prose mx-auto text-center">
        <CircularProgress
          size={48}
          value={100}
          variant={
            value === "AwaitingPaymentStatus" ? "determinate" : "indeterminate"
          }
        />{" "}
        ... <CircularProgress size={48} />
        <p>Double checking payment...</p>
        <p>This should only take a few seconds!</p>
      </div>
    );
  }

  if (value === "Confirmation") {
    return (
      <div className="prose mx-auto text-center">
        <CircularProgress size={48} value={100} variant={"determinate"} /> ...{" "}
        <CircularProgress size={48} value={100} variant={"determinate"} />{" "}
        <h1>Booking Confirmed</h1>
        <p>We have emailed details to {context.email}</p>
      </div>
    );
  }
};

export default ViewConfirmation;
