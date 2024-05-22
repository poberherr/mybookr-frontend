"use client";

import React, { useContext, useEffect, useMemo, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

import { useUser } from "@clerk/clerk-react";

import { Divider, Typography } from "@mui/material";

import Calendar from "@/app/components/Calendar/Calendar";
import StyledTextField from "@/app/components/form/TextField";
import GuestNumberForm from "@/app/components/others/GuestNumberForm";
import { SButton } from "@/app/components/ui/SButton";
import StyledDialog from "@/app/components/ui/StyledDialog";

import { Listing } from "@/app/api-helpers";
import {
  BookingContext,
  useWatchDateRange,
  useWatchEmail,
  useWatchGuest,
} from "@/app/contexts/booking";
import formatDateSpan from "@/app/helpers/date-format";

export default function BookingDataForm() {
  // const {
  //   data: booking,
  //   mutate,
  //   isIdle,
  //   isPending,
  //   isError,
  // } = useBookingsCreate({ mutation: {} });

  const { selectedDate, selectedDate1, guest } = useContext(BookingContext);

  const user = useUser();

  // useEffect(() => {
  //   // if (!isPending && isError) {
  //   //   alert(
  //   //     "Unable to initiate booking in the backend. Sorry about this! Please reload the page and try again. Remember to blame Sebastian!",
  //   //   );
  //   //   return;
  //   // }
  //   if (
  //     !booking &&
  //     isIdle &&
  //     !isPending &&
  //     listing &&
  //     selectedDate &&
  //     selectedDate1
  //   ) {
  //     // create booking if not exists
  //     console.log("Mutating!");
  //     mutate({
  //       booking_status: "NotStarted",
  //       check_in_date: formatISO(selectedDate),
  //       check_out_date: formatISO(selectedDate1),
  //       number_of_guests: guest,
  //       //@todo remove this when listing id is requried in generated interfaces,
  //       listing_id: listing.id || 0,
  //       total_cost: totalPrice || "0.00",
  //       guest_id: 1,
  //     });
  //   }
  // }, [
  //   booking,
  //   listing,
  //   selectedDate,
  //   selectedDate1,
  //   isIdle,
  //   isPending,
  //   isError,
  // ]);

  const [flagCalender, setFlagCalender] = useState(false);
  const [flagEditGuestsDialog, setFlagEditGuestsDialog] = useState(false);

  // React Hook Form for payment method
  // We can't put these inside the form component (PaymentMethodForm), because we need the trigger method for the Request booking button inside this (ShoppingCart) component
  const methods = useForm({
    defaultValues: {
      email: user.user?.primaryEmailAddress?.emailAddress || "",
      guest,
      dateRange: {
        startDate: selectedDate,
        endDate: selectedDate1,
        key: "selection",
      },
    },
  });

  const onSubmit = methods.handleSubmit((data) => {
    console.dir({ data });

    alert("now set data in state machine so next form can show up");

    // if (!data.payment) {
    //   setPaymentReady(true);
    //   scrollToPayment();
    //   return;
    // }
    // alert("@todo");
  });

  const values = methods.watch();
  const emailValue = methods.watch("email");
  useEffect(() => {
    if (
      user.user?.primaryEmailAddress?.emailAddress &&
      (emailValue === undefined || emailValue.trim() === "") &&
      emailValue !== user.user?.primaryEmailAddress?.emailAddress
    ) {
      methods.setValue("email", user.user?.primaryEmailAddress?.emailAddress);
    }
  }, [user.user, methods.resetField]);
  useWatchEmail(methods.control, "email");

  const guestValue = methods.watch("guest");
  const dateRangeValue = methods.watch("dateRange");
  useWatchDateRange(methods.control, "dateRange");
  useWatchGuest(methods.control, "guest");

  return (
    <FormProvider {...methods}>
      <form onSubmit={onSubmit}>
        <div className="px-4 py-0 md:pl-40 md:pr-16">
          {/* Your journey */}
          <Typography
            className="!mb-4 p-0 !font-extrabold md:!text-2xl"
            variant="h6"
          >
            Your journey
          </Typography>

          {/* Travel dates */}
          <div>
            <div>
              <Typography className="uppercase tracking-wide" variant="caption">
                Travel dates
              </Typography>

              <div className="flex justify-between">
                <Typography className="mt-2" variant="body1">
                  {dateRangeValue.startDate &&
                    dateRangeValue.endDate &&
                    formatDateSpan(
                      dateRangeValue.startDate,
                      dateRangeValue.endDate,
                    )}
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
            <Calendar
              flagCalender={flagCalender}
              setFlagCalender={setFlagCalender}
            />

            {/* Guests */}
            <div className="mt-6">
              <Typography className="uppercase tracking-wide" variant="caption">
                Guests
              </Typography>

              <div className="flex justify-between">
                <Typography className="mt-2" variant="body1">
                  {guestValue} Guest
                </Typography>

                <Typography
                  className="cursor-pointer !font-bold"
                  onClick={() => setFlagEditGuestsDialog(true)}
                >
                  Edit
                </Typography>
              </div>
            </div>

            <StyledDialog
              showDialog={flagEditGuestsDialog}
              setShowDialog={setFlagEditGuestsDialog}
              title={"Select guests number"}
            >
              <div className="grid min-w-[300px] gap-8">
                <GuestNumberForm />

                <SButton
                  fullWidth
                  variant="contained"
                  onClick={() => setFlagEditGuestsDialog(false)}
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
        </div>
      </form>
    </FormProvider>
  );
}
