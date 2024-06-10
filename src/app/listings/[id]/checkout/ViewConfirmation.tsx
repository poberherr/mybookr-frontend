import { useContext } from "react";

import { CircularProgress } from "@mui/material";

import { BookingUIStates } from "./CheckoutPage";
import { BookingContext } from "@/app/contexts/booking";

interface IProps {
  bookingUIState: BookingUIStates;
}

const ViewConfirmation = ({ bookingUIState }: IProps) => {
  const { email } = useContext(BookingContext);

  if (bookingUIState === "confirmation") {
    return (
      <div className="prose mx-auto text-center">
        <h1>Booking Confirmed</h1>
        <p>We have emailed details to {email}</p>
      </div>
    );
  }

  if (bookingUIState === "checkBookingStatus") {
    return (
      <div className="prose mx-auto text-center">
        <CircularProgress size={48} /> <p>Double checking payment...</p>
        <p>This should only take a few seconds!</p>
      </div>
    );
  }
};

export default ViewConfirmation;
