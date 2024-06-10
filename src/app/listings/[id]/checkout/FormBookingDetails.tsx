"use client";

import React, { useContext, useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

import { useUser } from "@clerk/clerk-react";

import { Typography } from "@mui/material";

import StyledTextField from "@/app/components/form/TextField";
import { SButton } from "@/app/components/ui/SButton";
import StyledDialog from "@/app/components/ui/StyledDialog";

import {
  BookingContext,
  useWatchActivityId,
  useWatchBookingDate,
  useWatchEmail,
} from "@/app/contexts/booking";
import { formatDate } from "@/app/helpers/date-format";
import { ExperienceItemFragment } from "@/gql/graphql";
import CalendarSingleDay from "@/app/components/Calendar/CalendarSingleDay";
import ActivityForm from "@/app/components/others/ActivityForm";
import { BookingFormData, BookingUIStates } from "./PageCheckout";
import { useGetActivityFromExperience } from "@/app/helpers/useGetActivityFromExperience";

export default function FormBookingDetails({
  experience,
  setBookingFormData,
  bookingUIState,
}: {
  experience: ExperienceItemFragment;
  setBookingFormData: React.Dispatch<
    React.SetStateAction<BookingFormData | undefined>
  >;
  bookingUIState: BookingUIStates
}) {
  const { bookingDate, activities, email } = useContext(BookingContext);
  const activityId = activities[experience.id];
  const activity = useGetActivityFromExperience(activityId, experience);
  const user = useUser();

  const [flagCalender, setFlagCalender] = useState(false);
  const [flagEditActivityDialog, setFlagEditActivityDialog] = useState(false);

  // React Hook Form for payment method
  // We can't put these inside the form component (PaymentMethodForm), because we need the trigger method for the Request booking button inside this (ShoppingCart) component
  const methods = useForm<BookingFormData>({
    defaultValues: {
      bookingDate,
      activityId,
      email: email || user.user?.primaryEmailAddress?.emailAddress || "",
    },
  });

  const onSubmit = methods.handleSubmit((data) => {
    setBookingFormData(data);
  });

  // handle email
  const emailValue = methods.watch("email");
  useEffect(() => {
    const userEmail = user.user?.primaryEmailAddress?.emailAddress
    if (
      userEmail &&
      (emailValue === undefined || emailValue.trim() === "") &&
      emailValue !== userEmail
    ) {
      console.log('Setting email from user')
      methods.setValue("email", userEmail);
    }
  }, [user.user, methods.resetField]);
  useWatchEmail(methods.control, "email");

  useWatchBookingDate(methods.control, "bookingDate");
  useWatchActivityId(methods.control, "activityId", experience.id);

  return (
    <FormProvider {...methods}>
      <form onSubmit={onSubmit}>
        <div className="px-4 py-0 md:pl-40 md:pr-16">
          {/* Your journey */}
          <Typography
            className="!mb-4 p-0 !font-extrabold md:!text-2xl"
            variant="h6"
          >
            Your cruise
          </Typography>

          {/* Booking Date */}
          <div>
            <div>
              <Typography className="uppercase tracking-wide" variant="caption">
                Cruise Date
              </Typography>

              <div className="flex justify-between">
                <Typography className="mt-2" variant="body1">
                  {bookingDate ? formatDate(bookingDate) : "No date selected"}
                </Typography>

                <Typography
                  className="cursor-pointer !font-bold"
                  onClick={() => setFlagCalender(true)}
                >
                  Edit
                </Typography>
              </div>
            </div>

            {/* Calendar */}
            <CalendarSingleDay
              flagCalender={flagCalender}
              setFlagCalender={setFlagCalender}
            />

            {/* Activity */}
            <div className="mt-6">
              <Typography className="uppercase tracking-wide" variant="caption">
                Yacht
              </Typography>

              <div className="flex justify-between">
                <Typography className="mt-2" variant="body1">
                  {activity ? activity.title : "No yacht selected"}
                </Typography>

                <Typography
                  className="cursor-pointer !font-bold"
                  onClick={() => setFlagEditActivityDialog(true)}
                >
                  Edit
                </Typography>
              </div>
            </div>

            <StyledDialog
              showDialog={flagEditActivityDialog}
              setShowDialog={setFlagEditActivityDialog}
              title={"Select guests number"}
            >
              <div className="grid min-w-[300px] gap-8">
                <ActivityForm experience={experience} />

                <SButton
                  fullWidth
                  variant="contained"
                  onClick={() => setFlagEditActivityDialog(false)}
                >
                  OK
                </SButton>
              </div>
            </StyledDialog>

            {/* Email */}
            <div className="mt-6">
              <StyledTextField
                control={methods.control}
                type="email"
                name="email"
                id="email"
                label="Email"
                errors={methods.formState.errors.email}
                rules={{
                  required: "Email is required",
                  pattern: {
                    value: /^.+@.+$/,
                    message: "Please enter a valid email",
                  },
                }}
              />
            </div>
          </div>
          <SButton className="mt-8" disabled={!methods.formState.isValid}>
            {bookingUIState == "bookingDetails" ? "Continue to payment" : "Edit booking details"}
          </SButton>
        </div>
      </form>
    </FormProvider>
  );
}
