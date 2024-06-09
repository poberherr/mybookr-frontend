"use client";

import React, { useContext, useEffect, useState } from "react";

import Image from "next/image";

import { Divider, Typography } from "@mui/material";

import { Elements } from "@stripe/react-stripe-js";
import {
  Appearance,
  StripeElementsOptions,
  loadStripe,
} from "@stripe/stripe-js";

import BackButton from "@/app/components/others/BackButton";
import PriceDetail from "@/app/components/others/PriceDetail";

import { useIsClient } from "@/app/helpers/useIsClient";

import BlaBla from "./BlaBla";
import BookingDataForm from "./BookingDataForm";
import { PaymentWrapper } from "./PaymentWrapper";
import { ExperienceItemFragment } from "@/gql/graphql";
import { useMinimumPrice } from "@/app/helpers/useMinimumPrice";
import { useMutation } from "urql";
import { graphql } from "@/gql";
import { BookingContext } from "@/app/contexts/booking";
import { useGetActivityFromExperience } from "@/app/helpers/useGetActivityFromExperience";

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
      paymentIntentId # we probably dont need this
      paymentClientSecret
    }
  }
`);

export interface BookingFormData {
  bookingDate: Date;
  activityId: string;
  email: string;
}

export default function CheckoutPage({
  experience,
}: {
  experience: ExperienceItemFragment;
}) {
  const { activities } = useContext(BookingContext);
  const activityId = activities[experience.id];
  const activity = useGetActivityFromExperience(activityId, experience);

  const [bookingFormData, setBookingFormData] = useState<
    BookingFormData | undefined
  >();

  const [bookingFlowToken, setBookingFlowToken] = useState<
    string | undefined
  >();
  const [createBookingResult, createBooking] = useMutation(
    CreateBookingMutation,
  );
  const [clientSecret, setClientSecret] = React.useState("");

  const stripe = React.useMemo(() => {
    if (!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) {
      throw new Error("Unable to init stripe without credentials");
    }
    return loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
  }, []);

  useEffect(() => {
    if (!activity || !activity.availabilities) {
      return;
    }
    if (bookingFormData) {
      if (!bookingFlowToken) {
        console.log("init booking and get flow token");

        // mutationCreateBooking
        createBooking({
          ...bookingFormData,
          name: "Customer Name (mocked)", // @todo add name field to frontend
          availabilityId: activity.availabilities[0].id,
          numberOfSlots: 1, // @todo no more needed
        });
        return;
      }
      console.log("update booking and get new flow token");
      // mutationUpdateBooking
      // setBookingFlowToken
      // setClientSecret
    }
  }, [activity, bookingFormData, bookingFlowToken]);

  useEffect(() => {
    console.dir(createBookingResult, { depth: null });
    if (createBookingResult.error) {
      console.error(createBookingResult.error);
    }
    if (!createBookingResult.data) {
      return;
    }
    setBookingFlowToken(
      createBookingResult.data?.createBooking.bookingFlowToken,
    );
    if (!createBookingResult.data?.createBooking.paymentClientSecret) {
      throw new Error("Booking should return a payment client secret");
    }
    setClientSecret(
      createBookingResult.data?.createBooking.paymentClientSecret,
    );
  }, [createBookingResult]);

  const isClient = useIsClient();

  const minimumPrice = useMinimumPrice(experience);

  const totalPrice = minimumPrice;

  const appearance: Appearance = {
    theme: "stripe",
  };
  const options: StripeElementsOptions = {
    clientSecret,
    appearance,
  };

  if (!isClient) {
    return null;
  }

  return (
    <>
      <BackButton pageName="details" />

      <Typography
        className="px-4 py-16 !text-2xl !font-extrabold md:px-40 md:!text-3xl"
        component="div"
      >
        Let’s make sure everything looks right.
      </Typography>

      <Divider />

      <div className="grid grid-cols-1 grid-rows-1 md:grid-cols-[2fr_minmax(min-content,480px)] xl:grid-cols-[2fr_minmax(min-content,600px)]">
        <div className="grid grid-cols-1 gap-16 px-0 py-8">
          <BookingDataForm
            experience={experience}
            setBookingFormData={setBookingFormData}
          />
          {clientSecret && (
            <Elements options={options} stripe={stripe}>
              <PaymentWrapper experience={experience} />
            </Elements>
          )}
          <BlaBla />
        </div>

        {/* Right section */}
        <div className="mr-40 hidden border-0 border-l border-r border-solid border-gray-100 md:block">
          <div className="sticky top-5 grid gap-8 bg-white px-0 py-16">
            {/* Villa Title */}
            <Typography
              className="!mb-4 p-0 !font-extrabold md:px-8 md:py-0 md:!text-2xl"
              variant="h6"
            >
              {experience.title}
            </Typography>

            {/* Villa Image */}
            {experience.medias &&
              experience.medias.length > 0 &&
              experience.medias[0].url && (
                <div className="relative aspect-video w-full p-0 md:px-8 md:py-0">
                  <Image
                    className="rounded object-cover"
                    src={experience.medias[0].url}
                    alt=""
                    fill={true}
                  />
                </div>
              )}

            {/* Price detail part */}
            <div className="p-0 md:px-8 md:py-0">
              <Typography
                className="!mb-6 !text-base font-extrabold"
                component="div"
              >
                Price details
              </Typography>

              {experience && <PriceDetail experience={experience} />}
            </div>

            <Divider />

            {/* Total part */}
            <div className="grid gap-4 p-0 md:px-8 md:py-0">
              <div className="grid grid-cols-[1fr_max-content] items-center gap-2">
                <Typography variant="body2" className="!text-sm !font-black">
                  Total
                </Typography>

                <Typography
                  variant="body2"
                  className="text-right !text-sm !font-black"
                >
                  $ {totalPrice},00
                </Typography>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
