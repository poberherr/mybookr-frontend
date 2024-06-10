import { useEffect } from "react";
import { BookingFormData, BookingStore, BookingUIStates } from "./PageCheckout";
import { useMutation } from "urql";
import { graphql } from "@/gql";
import { ExperienceItemFragment } from "@/gql/graphql";

interface IProps {
  booking: BookingStore;
  bookingFormData?: BookingFormData;
  activity: ExperienceItemFragment["activities"][0] | undefined;
  setBookingFlowToken: (newToken: string) => void;
  setBookingUIState: React.Dispatch<React.SetStateAction<BookingUIStates>>;
  setPopupMessage: React.Dispatch<React.SetStateAction<string | undefined>>;
  setClientSecret: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const CreateBookingMutation = graphql(`
  mutation CreateBookingMutation(
    $name: String!
    $email: String!
    $activityId: ID!
    $availabilityId: ID!
    $numberOfSlots: Int!
  ) {
    createBooking(
      data: {
        name: $name
        email: $email
        activityId: $activityId
        availabilityId: $availabilityId
        numberOfSlots: $numberOfSlots
      }
    ) {
      bookingFlowToken
      paymentClientSecret
    }
  }
`);

const UpdateBookingMutation = graphql(`
  mutation updateBookingMutation(
    $bookingFlowToken: String!
    $name: String!
    $email: String!
    $activityId: ID!
    $availabilityId: ID!
    $numberOfSlots: Int!
  ) {
    updateBooking(
      data: {
        bookingFlowToken: $bookingFlowToken
        name: $name
        email: $email
        activityId: $activityId
        availabilityId: $availabilityId
        numberOfSlots: $numberOfSlots
      }
    ) {
      paymentClientSecret
    }
  }
`);

const useBookingMutations = ({
  bookingFormData,
  booking,
  activity,
  setBookingFlowToken,
  setPopupMessage,
  setBookingUIState,
  setClientSecret
}: IProps) => {
  // Init Mutations
  const [createBookingResult, createBooking] = useMutation(
    CreateBookingMutation,
  );
  const [updateBookingResult, updateBooking] = useMutation(
    UpdateBookingMutation,
  );

  useEffect(() => {
    if (!activity || !activity.availabilities) {
      console.log("Cant continue, no activity selected");
      return;
    }
    if (bookingFormData) {
      if (!booking.bookingFlowToken) {
        console.log("init booking and get first flow token");
        createBooking({
          ...bookingFormData,
          name: "Customer Name (mocked)", // @todo add name field to frontend
          availabilityId: activity.availabilities[0].id, // @todo replace this with the absence logic from PR
          numberOfSlots: 1, // @todo no more needed
        });
        return;
      }
      console.log("update booking as we already have booking data");
      updateBooking({
        bookingFlowToken: booking.bookingFlowToken,
        ...bookingFormData,
        name: "Customer Name (mocked)", // @todo add name field to frontend
        availabilityId: activity.availabilities[0].id, // @todo replace this with the absence logic from PR
        numberOfSlots: 1, // @todo no more needed
      });
    }
  }, [activity, bookingFormData, booking]);

  // react on createBookingResult
  useEffect(() => {
    if (createBookingResult.error) {
      console.error(createBookingResult.error);
      setPopupMessage("There was an error on our side. Please try again.");
      setBookingUIState("bookingDetails");
      throw new Error("Unable to create booking. Oops!");
      // @todo actually handle error on user side
    }
    if (!createBookingResult.data) {
      return;
    }
    setBookingUIState("providePaymentCredentials");
    setBookingFlowToken(
      createBookingResult.data.createBooking.bookingFlowToken,
    );
    setClientSecret(createBookingResult.data.createBooking.paymentClientSecret);
  }, [createBookingResult]);

  // ==== Update Booking ====
  // react on UpdateBookingResult
  useEffect(() => {
    if (updateBookingResult.error) {
      console.error(updateBookingResult.error);

      // create try to create booking then
      if (bookingFormData && activity?.availabilities) {
        createBooking({
          ...bookingFormData,
          name: "Customer Name (mocked)", // @todo add name field to frontend
          availabilityId: activity.availabilities[0].id, // @todo replace this with the absence logic from PR
          numberOfSlots: 1, // @todo no more needed
        });
        return;
      }

      // @todo actually handle error on user side
      // We should not end here. For savety, lets send user to the beginning
      setBookingUIState("bookingDetails");
      return;
    }
    if (!updateBookingResult.data) {
      return;
    }
    setBookingUIState("providePaymentCredentials");
    setClientSecret(updateBookingResult.data.updateBooking.paymentClientSecret);
  }, [updateBookingResult]);
};

export default useBookingMutations