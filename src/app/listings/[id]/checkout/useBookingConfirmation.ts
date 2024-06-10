import { useEffect } from "react";
import { BookingStore, BookingUIStates } from "./PageCheckout";
import { useMutation } from "urql";
import { graphql } from "@/gql";
import { BookingStatus } from "@/gql/graphql";

interface IProps {
  bookingUIState: BookingUIStates;
  booking: BookingStore;
  setBookingUIState: React.Dispatch<React.SetStateAction<BookingUIStates>>;
  setPopupMessage: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const CheckBookingMutation = graphql(`
  mutation CheckBookingMutation($bookingFlowToken: String!) {
    checkBookingStatus(bookingFlowToken: $bookingFlowToken)
  }
`);

const useBookingConfirmation = ({
  bookingUIState,
  booking,
  setBookingUIState,
  setPopupMessage,
}: IProps) => {
  const [checkBookingStatusResult, checkBookingStatus] =
    useMutation(CheckBookingMutation);

  // execute booking status check as soon booking status check is shown
  useEffect(() => {
    if (bookingUIState === "checkBookingStatus" && booking.bookingFlowToken) {
      // @todo check multiple times when status is still processing
      checkBookingStatus({ bookingFlowToken: booking.bookingFlowToken });
      return;
    }
  }, [bookingUIState, booking]);

  // react on checkBookingStatus
  useEffect(() => {
    if (bookingUIState !== "checkBookingStatus") {
      return;
    }
    if (checkBookingStatusResult.error) {
      console.error(checkBookingStatusResult.error);
    }
    if (!checkBookingStatusResult.data) {
      return;
    }

    const bookingStatus = checkBookingStatusResult.data.checkBookingStatus;
    if (bookingStatus === BookingStatus.PaymentFailed) {
      setBookingUIState("bookingDetails");
      setPopupMessage("Payment failed. Please try again");
      return;
    }
    if (bookingStatus === BookingStatus.PaymentFinished) {
      setBookingUIState("confirmation");
      return;
    }
  }, [checkBookingStatusResult, bookingUIState, setBookingUIState]);
};

export default useBookingConfirmation;
