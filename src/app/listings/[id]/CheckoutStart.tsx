"use client";

import { useContext, useEffect, useMemo, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

import { useRouter } from "next/navigation";

import { Divider, Typography } from "@mui/material";

import CalendarSingleDay from "../../components/Calendar/CalendarSingleDay";
import PriceDetail from "@/app/components/others/PriceDetail";
import { SButton } from "@/app/components/ui/SButton";

import {
  BookingContext,
  useWatchActivityId,
  useWatchBookingDate,
} from "@/app/contexts/booking";

import { ExperienceItemFragment } from "@/gql/graphql";
import { formatDate } from "@/app/helpers/date-format";
import ActivityForm from "@/app/components/others/ActivityForm";
import { useIsClient } from "@/app/helpers/useIsClient";
import { useGetActivityFromExperience } from "@/app/helpers/useGetActivityFromExperience";
import { useFormatPrice } from "@/app/helpers/useFormatPrice";

interface IProps {
  experience: ExperienceItemFragment;
}
export interface CheckoutStartForm {
  activityId: string;
  bookingDate?: Date;
}

export default function CheckoutStart({ experience }: IProps) {
  const router = useRouter();
  const { activities, bookingDate } = useContext(BookingContext);

  const [flagCalender, setFlagCalender] = useState(false);
  const activityId = activities[experience.id];
  const activity = useGetActivityFromExperience(activityId, experience)

  // Initialize the form with react-hook-form
  const methods = useForm<CheckoutStartForm>({
    defaultValues: {
      activityId,
      bookingDate,
    },
  });

  // Connect form values to booking context
  const activityIdValue = methods.watch("activityId");
  useWatchActivityId<CheckoutStartForm>(
    methods.control,
    "activityId",
    experience.id,
  );
  useWatchBookingDate<CheckoutStartForm>(methods.control, "bookingDate");


  useEffect(() => {
    if (activityIdValue !== activityId) {
      methods.setValue("activityId", activityId)
    }
  }, [activityIdValue, activityId])

  // Use form data and perform validation
  const onSubmit = methods.handleSubmit((data) => {
    if (!data.bookingDate) {
      methods.trigger("bookingDate");
    }
    if (!data.activityId) {
      methods.trigger("activityId");
    }
    router.push(`/listings/${experience.id}/checkout`);
  });

  const price = activity?.availabilities
    ? activity.availabilities[0].pricePerUnit
    : undefined;

  const formattedPrice = useFormatPrice(price, true)

  const isClient = useIsClient();

  if (!isClient) {
    return null;
  }
  return (
    <FormProvider {...methods}>
      <form onSubmit={onSubmit}>
        <div className="sticky top-5 flex flex-col gap-8 bg-white px-0 pb-16 pt-0 md:py-16">
          {/* Activity + Date -> Base Price */}
          <div className="grid gap-8 md:px-8 md:py-0">
            <div>
              <Typography
                className="!mb-1 flex flex-1 uppercase"
                component="div"
                variant="caption"
              >
                Cruise Date
              </Typography>
              <Typography
                className="cursor-pointer rounded-lg bg-white px-5 py-3 shadow-csm"
                variant="body1"
                onClick={() => setFlagCalender(true)}
              >
                {bookingDate && formatDate(bookingDate)}
              </Typography>
            </div>
            <div>
              <ActivityForm experience={experience} />
            </div>
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
        </div>

        {/* Calendar */}
        <CalendarSingleDay
          flagCalender={flagCalender}
          setFlagCalender={setFlagCalender}
        />
      </form>
    </FormProvider>
  );
}
