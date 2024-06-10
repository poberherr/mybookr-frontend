import { useEffect } from "react";
import { BookingFormData, BookingStore, BookingUIStates } from "./PageCheckout";
import { useMutation } from "urql";
import { graphql } from "@/gql";
import {
  Booking,
  CreateBookingMutationMutationVariables,
  ExperienceItemFragment,
  UpdateBookingMutationMutationVariables,
} from "@/gql/graphql";

interface IProps {
  bookingUIState: BookingUIStates;
  booking: BookingStore;
  bookingFormData?: BookingFormData;
  activity: ExperienceItemFragment["activities"][0] | undefined;
  setBookingFlowToken: (newToken: string) => void;
  setBookingUIState: React.Dispatch<React.SetStateAction<BookingUIStates>>;
  setPopupMessage: React.Dispatch<React.SetStateAction<string | undefined>>;
  setClientSecret: React.Dispatch<React.SetStateAction<string | undefined>>;
  setBooking: React.Dispatch<React.SetStateAction<BookingStore>>;
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
  bookingUIState,
  bookingFormData,
  booking,
  activity,
  setBookingFlowToken,
  setPopupMessage,
  setBookingUIState,
  setClientSecret,
}: IProps) => {
  // Init Mutations
  const [createBookingResult, createBooking] = useMutation(
    CreateBookingMutation,
  );
  const [updateBookingResult, updateBooking] = useMutation(
    UpdateBookingMutation,
  );

  useEffect(() => {
    if (!activity || !activity.availabilities || !bookingFormData || bookingUIState !== "bookingDetails") {
      return;
    }
    if (
      bookingFormData.activityId === undefined ||
      bookingFormData.bookingDate === undefined ||
      bookingFormData.email === undefined
    ) {
      return;
    }

    const bookingData: CreateBookingMutationMutationVariables = {
      email: bookingFormData.email,
      activityId: bookingFormData.activityId,
      name: "Customer Name (mocked)", // @todo add name field to frontend
      availabilityId: activity.availabilities[0].id, // @todo replace this with the absence logic from PR
      numberOfSlots: 1, // @todo no more needed
    };

    if (!booking.bookingFlowToken) {
      console.log("init booking and get first flow token");
      createBooking(bookingData);
      return;
    }
    console.log("update booking as we already have booking data");
    updateBooking({
      ...bookingData,
      bookingFlowToken: booking.bookingFlowToken,
    });
  }, [activity, bookingFormData, booking]);

  // react on createBookingResult
  useEffect(() => {
    if ( bookingUIState !== "bookingDetails") {
      return
    }
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
    if ( bookingUIState !== "bookingDetails") {
      return
    }
    if (updateBookingResult.error) {
      console.error(updateBookingResult.error);

      // create try to create booking if we have all the data then
      if (
        bookingFormData &&
        activity?.availabilities &&
        bookingFormData.activityId &&
        bookingFormData.bookingDate &&
        bookingFormData.email
      ) {
        const bookingData: CreateBookingMutationMutationVariables = {
          email: bookingFormData.email,
          activityId: bookingFormData.activityId,
          name: "Customer Name (mocked)", // @todo add name field to frontend
          availabilityId: activity.availabilities[0].id, // @todo replace this with the absence logic from PR
          numberOfSlots: 1, // @todo no more needed
        };
        createBooking(bookingData);
        return;
      }

      // Otherwise, let us restart
      // setBooking({experienceId: booking.experienceId})
      // setBookingUIState("bookingDetails");
      return;
    }
    if (!updateBookingResult.data) {
      return;
    }
    setBookingUIState("providePaymentCredentials");
    setClientSecret(updateBookingResult.data.updateBooking.paymentClientSecret);
  }, [updateBookingResult]);
};

export default useBookingMutations;
