import React, { useEffect, useRef } from "react";

import BlaBla from "./BlaBla";
import FormBookingDetails, { BookingFormData } from "./FormBookingDetails";
import { ExperienceItemFragment } from "@/gql/graphql";
import { StateValueFrom } from "xstate";

import { IBookingContext, bookingMachine } from "./bookingMachine";
import { CircularProgress } from "@mui/material";

interface IProps {
  submit: (formData: BookingFormData) => void;
  setError: (errorMessage: string) => void;
  value: StateValueFrom<typeof bookingMachine>;
  context: IBookingContext;
  experience: ExperienceItemFragment;
}

const ViewConfirmation = ({
  submit,
  value,
  context,
  experience,
  setError,
}: IProps) => {
  return (
    <>
      {(value === "BookingDetails") && (
        <FormBookingDetails
          experience={experience}
          submit={submit}
          context={context}
          value={value}
        />
      )}
      {(value === "CreateBooking" || value === "UpdateBooking") && (
        <div className="prose mx-auto text-center">
          <CircularProgress size={48} />
          <h1>Updating Booking</h1>
        </div>
      )}
      <BlaBla />
    </>
  );
};

export default ViewConfirmation;
