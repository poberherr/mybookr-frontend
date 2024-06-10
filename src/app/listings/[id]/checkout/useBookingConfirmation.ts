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
  setBooking: React.Dispatch<React.SetStateAction<BookingStore>>;
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
  setBooking,
}: IProps) => {
  const [checkBookingStatusResult, checkBookingStatus] =
    useMutation(CheckBookingMutation);

  // execute booking status check as soon booking status check is shown
  useEffect(() => {
    if (bookingUIState !== "checkBookingStatus") {
      return;
    }
    if (!booking.bookingFlowToken) {
      console.log('Confirmation is missing booking flow toking')
      // setBookingUIState("bookingDetails");
      return;
    }

    if (bookingUIState === "checkBookingStatus") {
      // @todo check multiple times when status is still processing
      console.log(
        `Checking status of booking with token ${booking.bookingFlowToken}`,
      );
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
    console.log(`Booking status for booking ${booking.bookingFlowToken}: ${bookingStatus}`);
    if (bookingStatus === BookingStatus.PaymentFailed) {
      setBookingUIState("bookingDetails");
      setPopupMessage("Payment failed. Please try again");
      return;
    }
    if (bookingStatus === BookingStatus.PaymentFinished) {
      setBookingUIState("confirmation");
      // Reset booking to ensure we create a fresh one, forget the booking flow token and so on
      setBooking({
        experienceId: booking.experienceId,
      });

      return;
    }
  }, [checkBookingStatusResult, bookingUIState, setBookingUIState]);
};

export default useBookingConfirmation;
