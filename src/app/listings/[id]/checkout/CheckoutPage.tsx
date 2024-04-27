"use client";

import React, { useContext, useRef, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

import { useRouter } from "next/navigation";

import { Divider, Typography } from "@mui/material";

import Calendar from "@/app/components/Calendar/Calendar";
import BackButton from "@/app/components/others/BackButton";
import GuestNumberForm from "@/app/components/others/GuestNumberForm";
import PriceDetail from "@/app/components/others/PriceDetail";
import { SButton } from "@/app/components/ui/SButton";
import StyledDialog from "@/app/components/ui/StyledDialog";

import IMG_Back01 from "@/assets/img/LIVING_ROOM.png";
import IMG_Payment01 from "@/assets/img/payment01.png";
import payment02 from "@/assets/img/payment02.png";

import CalendarIcon from "@/assets/icons/calendar.svg";

import { Listing, useCoreListingsRead } from "@/app/api-helpers";
import { BookingContext } from "@/app/contexts/booking";
import formatDateSpan from "@/app/helpers/date-format";
import { useIsClient } from "@/app/helpers/useIsClient";

import AddCardDetailForm from "./AddCardDetailForm";

export default function CheckoutPage({ id }: { id: string }) {
  const { data: listing } = useCoreListingsRead<Listing>(parseInt(id));
  const { selectedDate, selectedDate1, nights, guest, setDates } =
    useContext(BookingContext);

  const router = useRouter();

  // eslint-disable-next-line no-unused-vars
  const [price, setPrice] = useState(0.01);
  const [payment, setPayment] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [flagCalender, setFlagCalender] = useState(false);
  const [flagEditGuestsDialog, setFlagEditGuestsDialog] = useState(false);

  // @todo add payment logic
  const connected = false;

  // Scroll to the payment method
  const paymentRef = useRef<HTMLElement>(null);
  const executeScroll = () =>
    paymentRef.current &&
    paymentRef.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });

  // React Hook Form for payment method
  // We can't put these inside the form component (PaymentMethodForm), because we need the trigger method for the Request booking button inside this (ShoppingCart) component
  const methods = useForm({
    mode: "onChange",
    defaultValues: {
      guest,
      dateRange: {
        startDate: selectedDate,
        endDate: selectedDate1,
        key: "selection",
      },
    },
  });

  const guestValue = methods.watch("guest");
  const dateRangeValue = methods.watch("dateRange");

  const isClient = useIsClient();

  if (!isClient) {
    return null;
  }

  return (
    <FormProvider {...methods}>
      <form>
        <BackButton pageName="details" />

        <Typography
          className="px-4 py-16 !text-2xl !font-extrabold md:px-40 md:!text-3xl"
          component="div"
        >
          Let’s make sure everything looks right.
        </Typography>

        <Divider />

        <div className="grid grid-cols-1 grid-rows-1 md:grid-cols-[2fr_minmax(min-content,600px)]">
          <div className="grid grid-cols-1 gap-16 px-0 py-8">
            {/* Your journey */}
            <div className="px-4 py-0 md:pl-40 md:pr-16">
              <Typography
                className="!mb-4 p-0 !font-extrabold md:!text-2xl"
                variant="h6"
              >
                Your journey
              </Typography>

              {/* Travel dates */}
              <div>
                <div>
                  <Typography
                    className="uppercase tracking-wide"
                    variant="caption"
                  >
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
                  <Typography
                    className="uppercase tracking-wide"
                    variant="caption"
                  >
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
              </div>
            </div>

            <Divider />

            {/* Pay with */}
            {!connected && (
              <>
                <div className="px-4 py-0 md:pl-40 md:pr-16">
                  <div className="mb-4 flex flex-col justify-between md:flex-row">
                    <Typography
                      className="!mb-4 p-0 !font-extrabold md:!text-2xl"
                      variant="h6"
                    >
                      Pay With
                    </Typography>

                    <div className="flex items-center">
                      <img
                        className="h-6"
                        src={
                          payment === "Credit or debit card"
                            ? payment02.src
                            : IMG_Payment01.src
                        }
                        alt=""
                      />
                    </div>
                  </div>

                  <div className="grid gap-12">
                    <Typography>@todo Add payment form</Typography>

                    {payment === "Credit or debit card" && (
                      <>
                        <Divider />

                        <AddCardDetailForm setIsFormValid={setIsFormValid} />
                      </>
                    )}
                  </div>
                </div>

                <Divider />
              </>
            )}

            <Divider />

            {/* Cancellation policy */}
            <div className="px-4 py-0 md:pl-40 md:pr-16">
              <Typography
                className="!mb-4 p-0 !font-extrabold md:!text-2xl"
                variant="h6"
              >
                Cancellation policy
              </Typography>

              <Typography variant="body1">
                Free cancellation within 48 hours. If you cancel before the 5th
                Sept. you'll receive a prorated refund.
              </Typography>

              <Typography
                className="!mt-1 cursor-pointer underline"
                variant="body2"
              >
                Learn more
              </Typography>
            </div>

            <Divider />

            {/* Calendar */}
            <div className="flex items-center gap-8 px-4 py-0 md:pl-40 md:pr-16">
              <CalendarIcon className="h-8 w-8" alt={"calendar icon"} />

              <Typography variant="subtitle1" component="p">
                Your booking is only confirmed when the host accepts your
                request (within 24 hours). You will not be charged until then.
              </Typography>
            </div>

            <Divider />

            {/* Agreement */}
            <div className="px-4 py-0 md:pl-40 md:pr-16">
              <div>
                <Typography
                  className="!text-gray-400"
                  variant="caption"
                  component="p"
                >
                  By clicking the button below, I agree to the{" "}
                  <Typography
                    className="text-black underline"
                    variant="caption"
                  >
                    host's house rules, mybookr Changes and Refunds Policies
                  </Typography>{" "}
                  and confirm that mybookr agrees to my payment method can
                  charge and to whom I am responsible for damages. Total amount
                  is to be paid when the host/hostess confirms my booking
                  request.
                </Typography>

                <Typography
                  className="mt-2 !text-gray-400"
                  component="p"
                  variant="caption"
                >
                  The terms of payment between you and mybookr apply.
                </Typography>

                <Typography
                  className="mt-2 !text-gray-400"
                  component="p"
                  variant="caption"
                >
                  I also agree to the updated{" "}
                  <Typography
                    className="text-black underline"
                    variant="caption"
                  >
                    Terms of Service
                  </Typography>{" "}
                  and{" "}
                  <Typography
                    className="text-black underline"
                    variant="caption"
                  >
                    Terms of Use
                  </Typography>{" "}
                  for{" "}
                  <Typography
                    className="text-black underline"
                    variant="caption"
                  >
                    payment services
                  </Typography>{" "}
                  and agree to the{" "}
                  <Typography
                    className="text-black underline"
                    variant="caption"
                  >
                    payment services
                  </Typography>{" "}
                  privacy policy.
                </Typography>
              </div>
            </div>

            <Divider className="block md:hidden" />

            {/* Reserve section */}
            <div className="px-4 py-0 md:pl-40 md:pr-16">
              {/* Total price */}
              <div className="mb-8 grid grid-cols-[1fr_auto] gap-4 md:hidden">
                <Typography className="!text-sm font-black">Total</Typography>

                <Typography className="text-right !text-sm font-bold">
                  {(price * nights).toFixed(2)}$
                </Typography>
              </div>

              {/* Reserve button */}
              {connected ? (
                <SButton
                  variant="contained"
                  onClick={() => {
                    router.push("/booking-confirmation");
                    window.scrollTo(0, 0);
                  }}
                >
                  Request booking
                </SButton>
              ) : (
                <SButton
                  variant="contained"
                  disabled={
                    payment === "Credit or debit card" ? !isFormValid : false
                  }
                  onClick={() => {
                    if (payment === "") {
                      // trigger("payment");
                      executeScroll();
                    } else {
                      router.push("/booking-confirmation");
                      window.scrollTo(0, 0);
                    }
                  }}
                >
                  Request booking
                </SButton>
              )}
            </div>
          </div>

          {/* Right section */}
          <div className="mr-40 hidden border-0 border-l border-r border-solid border-gray-100 md:block">
            <div className="sticky top-5 grid gap-8 bg-white px-0 py-16">
              {/* Villa Title */}
              <Typography
                className="!mb-4 p-0 !font-extrabold md:px-8 md:py-0 md:!text-2xl"
                variant="h6"
              >
                Bali Pererenan Pantai Lima
              </Typography>

              {/* Villa Image */}
              <div className="p-0 md:px-8 md:py-0">
                <img
                  className="h-64 w-full rounded"
                  src={IMG_Back01.src}
                  alt=""
                />
              </div>

              {/* Price detail part */}
              <div className="p-0 md:px-8 md:py-0">
                <Typography
                  className="!mb-6 !text-base font-extrabold"
                  component="div"
                >
                  Price details
                </Typography>

                {listing && <PriceDetail listing={listing} />}
              </div>

              <Divider />

              {/* Total part */}
              <div className="grid gap-4 p-0 md:px-8 md:py-0">
                <div className="grid grid-cols-[1fr_max-content] items-center gap-2">
                  <Typography className="!text-sm font-black">Total</Typography>

                  <Typography className="text-right !text-sm font-bold">
                    {(price * nights).toFixed(2)}$
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </FormProvider>
  );
}