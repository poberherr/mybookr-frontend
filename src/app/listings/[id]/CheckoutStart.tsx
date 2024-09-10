"use client";

import { useContext, useEffect, useMemo, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

import { useRouter } from "next/navigation";
import { push } from "@socialgouv/matomo-next";

import { Divider, Typography } from "@mui/material";

import CalendarSingleDay from "../../components/Calendar/CalendarSingleDay";
import PriceDetail from "@/app/components/others/PriceDetail";
import { SButton } from "@/app/components/ui/SButton";

import { ExperienceItemFragment } from "@/gql/graphql";
import { formatDate } from "@/app/helpers/date-format";
import ActivityForm from "@/app/components/others/ActivityForm";
import { useIsClient } from "@/app/helpers/useIsClient";
import { useGetActivityFromExperience } from "@/app/helpers/useGetActivityFromExperience";
import {
  useFormatPrice,
  useFormatPriceDollar,
} from "@/app/helpers/useFormatPrice";
import { SearchStateMachineContext } from "@/app/state-machines/searchMachine";
import { startOfToday } from "date-fns";
import { RenderLabel, useRenderLabel } from "@/app/helpers/labels";
import { useExperienceURL } from "@/app/helpers/urls";

interface IProps {
  experience: ExperienceItemFragment;
}
export interface CheckoutStartForm {
  activityId: string;
  bookingDate: Date;
}

export default function CheckoutStart({ experience }: IProps) {
  const router = useRouter();
  const { searchMachineState, sendSearchMachineAction } = useContext(
    SearchStateMachineContext,
  );

  const [flagCalender, setFlagCalender] = useState(false);
  const preselectedActivity = useGetActivityFromExperience(experience);
  const experienceUrl = useExperienceURL(experience);
  const defaultActivity =
    experience.activities.length === 1 ? experience.activities[0] : undefined;

  // Initialize the form with react-hook-form
  const methods = useForm<CheckoutStartForm>({
    mode: "all",
    reValidateMode: "onBlur",
    defaultValues: {
      activityId: preselectedActivity?.id || defaultActivity?.id,
      bookingDate:
        searchMachineState.context.bookingDate ||
        searchMachineState.context.dateFrom ||
        startOfToday(),
    },
  });

  // Watch form fields
  const formValueActivityId = methods.watch("activityId");
  const formValueBookingDate = methods.watch("bookingDate");

  // Sync form values with state machine context
  useEffect(() => {
    if (
      !preselectedActivity ||
      (formValueActivityId && formValueActivityId !== preselectedActivity.id)
    ) {
      sendSearchMachineAction({
        type: "updateBooking",
        data: {
          activityId: formValueActivityId,
          experienceId: experience.id,
        },
      });
    }
  }, [formValueActivityId]);

  useEffect(() => {
    if (
      !searchMachineState.context.bookingDate ||
      (formValueBookingDate &&
        formValueBookingDate.getTime() !==
          searchMachineState.context.bookingDate.getTime())
    ) {
      sendSearchMachineAction({
        type: "updateBooking",
        data: { bookingDate: formValueBookingDate },
      });
    }
  }, [formValueBookingDate]);

  // Sync form fields with state machine context when the context changes
  useEffect(() => {
    if (
      preselectedActivity?.id &&
      preselectedActivity.id !== formValueActivityId
    ) {
      methods.reset({
        activityId: preselectedActivity?.id ? preselectedActivity.id : "",
      });
    }
    if (
      searchMachineState.context.bookingDate &&
      formValueBookingDate &&
      searchMachineState.context.bookingDate.getTime() !==
        formValueBookingDate.getTime()
    ) {
      methods.reset({
        bookingDate: searchMachineState.context.bookingDate,
      });
    }
  }, [
    preselectedActivity?.id,
    searchMachineState.context.bookingDate,
    methods.reset,
  ]);

  // Use form data and perform validation
  const onSubmit = methods.handleSubmit((data) => {
    if (!data.bookingDate) {
      methods.trigger("bookingDate");
      return;
    }
    if (!data.activityId) {
      methods.trigger("activityId");
      return;
    }
    push([
      "trackEvent",
      "Booking", // Event Category
      "Start Checkout", // Event Action
      [experience.id, experience.slug].join("-"), // Event Name
      0, // Event Value
    ]);

    router.push(`${experienceUrl}/checkout`);
  });

  const price = preselectedActivity?.price;

  const formattedPrice = useFormatPrice(price, true);
  const formattedPriceDollar = useFormatPriceDollar(price, true);

  const isClient = useIsClient();

  const bookingFormDate = useRenderLabel("bookingFormDate");

  if (!isClient) {
    return null;
  }

  return (
    <div className="sticky top-12 mt-16 bg-white px-0 pb-16 pt-0 md:mt-0 md:py-16">
      <FormProvider {...methods}>
        <form onSubmit={onSubmit}>
          <div className="flex flex-col gap-8">
            {/* Activity + Date -> Base Price */}
            <div className="grid gap-8 md:px-8 md:py-0">
              <div>
                <Typography className="p-0 !font-extrabold" variant="h6">
                  <span className="md:hidden">Book the </span>
                  {experience.title}
                </Typography>

                <Typography
                  className="p-0 !text-gray-600 md:hidden"
                  variant="body2"
                >
                  in {experience.location.addressLineOne},{" "}
                  {experience.location.city}, {experience.location.federalState}
                  , {experience.location.country}
                </Typography>

                <Typography
                  className="p-0 !text-gray-600 md:hidden"
                  variant="body2"
                >
                  {experience.categories && experience.categories.length > 1
                    ? "Categories"
                    : "Category"}
                  :{" "}
                  {experience.categories?.map((category) => (
                    <span
                      key={category.path}
                      className="[&:not(:last-child)]:after:whitespace-pre [&:not(:last-child)]:after:content-['__•__']"
                    >
                      {category.name}
                    </span>
                  ))}
                </Typography>
              </div>

              <div>
                <Typography
                  className="!mb-1 flex flex-1 uppercase"
                  component="div"
                  variant="caption"
                >
                  {bookingFormDate}
                </Typography>
                <Typography
                  className="cursor-pointer rounded-lg bg-white px-5 py-3 shadow-csm"
                  variant="body1"
                  onClick={() => setFlagCalender(true)}
                >
                  {formValueBookingDate ? (
                    formatDate(formValueBookingDate)
                  ) : (
                    <RenderLabel labelId="bookingFormDateDeselected" />
                  )}
                </Typography>
              </div>
              {!defaultActivity && (
                <div>
                  <ActivityForm experience={experience} />
                </div>
              )}
            </div>

            <Divider />

            {/* Price detail part */}
            <div className="md:px-8 md:py-0">
              <PriceDetail experience={experience} />
            </div>

            <Divider />

            <div className="grid gap-4 md:px-8 md:py-0">
              {price && (
                <div className="grid grid-cols-[1fr_max-content] items-center gap-2">
                  <Typography className="!font-black uppercase !text-slate-800">
                    Total
                  </Typography>

                  <Typography className="text-right !font-bold uppercase !text-slate-800">
                    {formattedPrice}
                    <br />
                    <span className="text-xs text-gray-600">
                      {formattedPriceDollar}
                    </span>
                  </Typography>
                </div>
              )}

              <SButton fullWidth variant="contained" disabled={!price}>
                Checkout
              </SButton>

              <Typography
                className="text-center !text-neutral-500"
                variant="caption"
              >
                Book the basic package online, and add extras later on.
                <br />
                The price includes VAT and all fees.
              </Typography>
            </div>

            {/* Calendar */}
            <CalendarSingleDay
              startDate={
                searchMachineState.context.bookingDate ||
                searchMachineState.context.dateFrom ||
                new Date()
              }
              flagCalender={flagCalender}
              setFlagCalender={setFlagCalender}
              experienceId={experience.id}
            />
          </div>
        </form>
      </FormProvider>
    </div>
  );
}
