"use client";

import React, { useContext } from "react";

import Image from "next/image";

import { Divider, Typography, useMediaQuery, useTheme } from "@mui/material";

import BackButton from "@/app/components/others/BackButton";

import { Listing, useListingsRead } from "@/app/api-helpers";
import { BookingContext } from "@/app/contexts/booking";
import formatDateSpan from "@/app/helpers/date-format";

export default function CheckoutPage({ id }: { id: string }) {
  const { data: listing } = useListingsRead<Listing>(parseInt(id));

  const { selectedDate, selectedDate1, guest, nights, email } =
    useContext(BookingContext);
  const mTheme = useTheme();
  const isMobile = useMediaQuery(mTheme.breakpoints.down("md"));

  if (!listing) {
    return null;
  }

  return (
    <>
      <BackButton pageName="villas" />

      <Divider className="!mt-16 hidden md:block" />

      <div
        className="grid grid-cols-1 grid-rows-[repeat(3,min-content)] gap-x-[10vw] md:grid-cols-2 md:grid-rows-[min-content_1fr]"
        style={{
          gridTemplateAreas: isMobile
            ? '"heading" "detail" "form"'
            : '"heading detail" "form detail"',
        }}
      >
        {/* Heading section */}
        <div
          className="h-min px-4 pt-16 pb-0 md:pr-0 md:pl-40"
          style={{ gridArea: "heading" }}
        >
          <Typography className="!mb-6 !text-2xl !font-extrabold" variant="h2">
            Start preparing for your journey, your reservation is ready!
          </Typography>

          <Typography variant="body1">
            We have emailed details to {email}. You will get another email as soon the host confirms your reservation.
          </Typography>
        </div>

        {/* Detail section */}
        <div
          className="border-0 border-l border-solid border-gray-100 px-4 pt-16 pb-0 md:pb-16 md:pl-8 md:pr-40"
          style={{ gridArea: "detail" }}
        >
          {listing.images && listing.images[0].image && (
            <div className="p-0 md:px-8 md:py-0 aspect-video w-full relative">
              <Image
                fill={true}
                className="rounded object-cover"
                src={listing.images[0].image}
                alt="Home for digital remote workers"
              />
            </div>
          )}

          <Typography className="!mt-8 !mb-1 !text-2xl !font-bold" variant="h3">
            {listing.title}
          </Typography>

          <Typography className="!mb-5 !text-gray-500" variant="body2">
            {[
              selectedDate &&
                selectedDate1 &&
                `${formatDateSpan(selectedDate, selectedDate1)}`,
              `${nights} nights`,
              `${guest} guests`,
            ]
              .filter(Boolean)
              .map((item) => (
                <span className="[&:not(:last-child)]:after:whitespace-pre [&:not(:last-child)]:after:content-['__•__']">
                  {item}
                </span>
              ))}
          </Typography>

          <Typography className="!mb-10" variant="body2">
            <u>
              {listing.location.street}, {listing.location.zip}{" "}
              {listing.location.city}, {listing.location.country}
            </u>
          </Typography>

          <Typography variant="body2">Reservation Code: @todo</Typography>
        </div>
      </div>
    </>
  );
}