"use client";

import React, { useContext, useMemo } from "react";

import Image from "next/image";

import { Divider, Typography } from "@mui/material";

import BackButton from "@/app/components/others/BackButton";
import PriceDetail from "@/app/components/others/PriceDetail";

import { BookingContext } from "@/app/contexts/booking";
import { useAveragePricePerNight } from "@/app/helpers/useAveragePricePerNight";
import { useIsClient } from "@/app/helpers/useIsClient";

import BlaBla from "./BlaBla";
import BookingDataForm from "./BookingDataForm";
import { PaymentWrapper } from "./PaymentWrapper";
import { useGetListing } from "@/app/helpers/useGetListing";

export default function CheckoutPage({ id }: { id: string }) {
  const isClient = useIsClient();
  const listing = useGetListing(parseInt(id))
  const { nights } = useContext(BookingContext);

  const averagePricePerNight = useAveragePricePerNight(listing);

  const totalPrice = useMemo(
    () => listing && (averagePricePerNight * nights).toFixed(2),
    [listing, nights],
  );

  if (!isClient || !listing) {
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
          <BookingDataForm />
          <PaymentWrapper />
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
              {listing.title}
            </Typography>

            {/* Villa Image */}
            {listing.images &&
              listing.images.length > 0 &&
              listing.images[0].image && (
                <div className="p-0 md:px-8 md:py-0 aspect-video w-full relative">
                  <Image
                    className="rounded object-cover"
                    src={listing.images[0].image}
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

              {listing && <PriceDetail listing={listing} />}
            </div>

            <Divider />

            {/* Total part */}
            <div className="grid gap-4 p-0 md:px-8 md:py-0">
              <div className="grid grid-cols-[1fr_max-content] items-center gap-2">
                <Typography className="!text-sm font-black">Total</Typography>

                <Typography className="text-right !text-sm font-bold">
                  {totalPrice}$
                </Typography>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
