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
import { IBookingContext } from "./bookingMachine";
import { RenderLabel } from "@/app/helpers/labels";

export interface BookingFormData {
  bookingDate: Date;
  activityId: string;
  name: string;
  email: string;
  telephone: string;
  additionalInformation: string;
}

export default function FormBookingDetails({
  experience,
  submit,
  context,
}: {
  experience: ExperienceItemFragment;
  submit: (formData: BookingFormData) => void;
  context: IBookingContext;
}) {
  const user = useUser();

  const [flagCalender, setFlagCalender] = useState(false);
  const [flagEditActivityDialog, setFlagEditActivityDialog] = useState(false);
  const defaultActivity =
    experience.activities.length === 1 ? experience.activities[0] : undefined;

  const methods = useForm<BookingFormData>({
    mode: "all",
    reValidateMode: "onBlur",
    defaultValues: {
      bookingDate: context.date,
      activityId: context.activityId || defaultActivity?.id,
      name: context.name || "",
      email:
        context.email || user.user?.primaryEmailAddress?.emailAddress || "",
      telephone: context.telephone || "",
      additionalInformation: context.additionalInformation || "",
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
          {/* Booking Date */}
          <div>
            <div>
              <Typography className="uppercase tracking-wide" variant="caption">
                <RenderLabel labelId="bookingFormDate" />
              </Typography>

              <div className="flex justify-between">
                <Typography className="mt-2" variant="body1">
                  {bookingDate && bookingDate instanceof Date
                    ? formatDate(bookingDate)
                    : "No date selected"}
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
              startDate={context.date || new Date()}
              flagCalender={flagCalender}
              setFlagCalender={setFlagCalender}
              experienceId={experience.id}
            />

            {/* Activity */}
            {!defaultActivity && (
              <div className="mt-6">
                <Typography
                  className="uppercase tracking-wide"
                  variant="caption"
                >
                  <RenderLabel labelId="bookingFormActivity" />
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
            )}

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

            {/* Name */}
            <div className="mt-6">
              <StyledTextField
                control={methods.control}
                type="name"
                name="name"
                id="name"
                label="Name"
                placeholder="Your Name"
                errors={methods.formState.errors.name}
                required
                rules={{
                  required:
                    "We need to know your name so we can address you properly.",
                }}
              />
            </div>

            {/* Email */}
            <div className="mt-6">
              <StyledTextField
                control={methods.control}
                type="email"
                name="email"
                id="email"
                label="Email"
                placeholder="you@example.com"
                errors={methods.formState.errors.email}
                required
                rules={{
                  pattern: {
                    value: /^.+@.+$/,
                    message: "Please enter a valid email address.",
                  },
                }}
              />
            </div>

            {/* Telephone */}
            <div className="mt-6">
              <StyledTextField
                control={methods.control}
                type="telephone"
                name="telephone"
                id="telephone"
                label="Telephone"
                errors={methods.formState.errors.telephone}
                placeholder="+62 876 1001 2002"
                required
                rules={{
                  pattern: {
                    value: /^\+[\d\s\/-]+$/,
                    message:
                      "Please enter a valid phone number, including the country code. For example: +62 876 1001 2002",
                  },
                }}
              />
            </div>

            {/* Additional Information */}
            <div className="mt-6">
              <StyledTextField
                multiline={true}
                control={methods.control}
                type="additional_information"
                name="additional_information"
                id="additional_information"
                label="Additional Information"
                errors={methods.formState.errors.additionalInformation}
                placeholder="Any special requests or extra info for your host?"
              />
            </div>
          </div>
          <SButton className="mt-8" disabled={!methods.formState.isValid}>
            Continue to payment
          </SButton>
        </div>
      </form>
    </FormProvider>
  );
}
