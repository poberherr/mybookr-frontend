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
        <div className="flex items-center justify-center gap-8">
          <CircularProgress
            size={48}
            value={100}
            variant={
              value === "CheckBookingStatus" ? "determinate" : "indeterminate"
            }
            color={
              value === "CheckBookingStatus" ? "success" : "primary"
            }
          />
          <div className="text-3xl">➡️</div>
          <CircularProgress size={48} />
        </div>
        <p>Double checking payment...</p>
        <p>This should only take a few seconds!</p>
      </div>
    );
  }

  if (value === "Confirmation") {
    return (
      <div className="prose mx-auto text-center">
        <p className="text-5xl mb-2">✅</p>
        <h1>Booking Confirmed</h1>
        <p>We have emailed details to {context.email}</p>
      </div>
    );
  }
};

export default ViewConfirmation;
