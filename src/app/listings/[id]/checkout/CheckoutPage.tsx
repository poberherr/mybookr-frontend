"use client";

import React, { useContext, useMemo } from "react";

import Image from "next/image";

import { Divider, Typography } from "@mui/material";

import BackButton from "@/app/components/others/BackButton";
import PriceDetail from "@/app/components/others/PriceDetail";

import { useIsClient } from "@/app/helpers/useIsClient";

import BlaBla from "./BlaBla";
import BookingDataForm from "./BookingDataForm";
import { PaymentWrapper } from "./PaymentWrapper";
import { ExperienceItemFragment } from "@/gql/graphql";
import { useMinimumPrice } from "@/app/helpers/useMinimumPrice";

export default function CheckoutPage({ experience }: { experience: ExperienceItemFragment }) {
  const isClient = useIsClient();

  const minimumPrice = useMinimumPrice(experience);

  const totalPrice = minimumPrice

  if (!isClient || !experience) {
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
          <BookingDataForm experience={experience} />
          <PaymentWrapper experience={experience} />
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
                <Typography variant="body2" className="!text-sm !font-black">Total</Typography>

                <Typography variant="body2" className="text-right !text-sm !font-black">
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
