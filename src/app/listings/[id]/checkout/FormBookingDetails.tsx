"use client";

import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

import { useUser } from "@clerk/clerk-react";

import { Typography } from "@mui/material";

import StyledTextField from "@/app/components/form/TextField";
import { SButton } from "@/app/components/ui/SButton";
import StyledDialog from "@/app/components/ui/StyledDialog";

import { formatDate } from "@/app/helpers/date-format";
import { ExperienceItemFragment } from "@/gql/graphql";
import CalendarSingleDay from "@/app/components/Calendar/CalendarSingleDay";
import ActivityForm from "@/app/components/others/ActivityForm";
import { useGetActivityFromExperience } from "@/app/helpers/useGetActivityFromExperience";
import { StateValueFrom } from "xstate";
import { IBookingContext, bookingMachine } from "./bookingMachine";

export interface BookingFormData {
  bookingDate: Date;
  activityId: string;
  email: string;
}

export default function FormBookingDetails({
  experience,
  submit,
  value,
  context,
}: {
  experience: ExperienceItemFragment;
  submit: (formData: BookingFormData) => void;
  value: StateValueFrom<typeof bookingMachine>;
  context: IBookingContext;
}) {
  const user = useUser();

  const [flagCalender, setFlagCalender] = useState(false);
  const [flagEditActivityDialog, setFlagEditActivityDialog] = useState(false);

  // React Hook Form for payment method
  // We can't put these inside the form component (PaymentMethodForm), because we need the trigger method for the Request booking button inside this (ShoppingCart) component
  const methods = useForm<BookingFormData>({
    defaultValues: {
      bookingDate: context.date,
      activityId: context.activityId,
      email:
        context.email || user.user?.primaryEmailAddress?.emailAddress || "",
    },
  });

  const onSubmit = methods.handleSubmit((data) => {
    submit(data);
  });

  const bookingDate = methods.watch("bookingDate");
  const activity = useGetActivityFromExperience(experience);

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
                  {bookingDate && bookingDate instanceof Date
                    ? formatDate(bookingDate)
                    : "No date selected"}
                </Typography>

                {value === "BookingDetails" && (
                  <Typography
                    className="cursor-pointer !font-bold"
                    onClick={() => setFlagCalender(true)}
                  >
                    Edit
                  </Typography>
                )}
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

                {value === "BookingDetails" && (
                  <Typography
                    className="cursor-pointer !font-bold"
                    onClick={() => setFlagEditActivityDialog(true)}
                  >
                    Edit
                  </Typography>
                )}
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
              {value !== "BookingDetails" ? (
                <>
                  <Typography
                    className="uppercase tracking-wide"
                    variant="caption"
                  >
                    Email
                  </Typography>
                  <Typography className="mt-2" variant="body1">
                    {context.email}
                  </Typography>
                </>
              ) : (
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
              )}
            </div>
          </div>
          <SButton className="mt-8" disabled={!methods.formState.isValid}>
            {value === "BookingDetails"
              ? "Continue to payment"
              : "Edit booking details (@todo)"}
          </SButton>
        </div>
      </form>
    </FormProvider>
  );
}
