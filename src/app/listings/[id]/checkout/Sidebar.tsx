import React, { useCallback, useContext, useEffect, useState } from "react";

import Image from "next/image";

import { CircularProgress, Divider, Typography } from "@mui/material";

import { Elements } from "@stripe/react-stripe-js";
import {
  Appearance,
  StripeElementsOptions,
  loadStripe,
} from "@stripe/stripe-js";
import createPersistedState from "use-persisted-state";
import { useMutation } from "urql";

import BackButton from "@/app/components/others/BackButton";
import PriceDetail from "@/app/components/others/PriceDetail";

import { useIsClient } from "@/app/helpers/useIsClient";

import BlaBla from "./BlaBla";
import FormBookingDetails from "./FormBookingDetails";
import { PaymentWrapper } from "./PaymentWrapper";
import { BookingStatus, ExperienceItemFragment } from "@/gql/graphql";
import { graphql } from "@/gql";
import { BookingContext } from "@/app/contexts/booking";
import { useGetActivityFromExperience } from "@/app/helpers/useGetActivityFromExperience";
import { useFormatPrice } from "@/app/helpers/useFormatPrice";
import ViewConfirmation from "./ViewConfirmation";
import ViewBookingForms from "./ViewBookingForms";

interface IProps {
  experience: ExperienceItemFragment;
  price: number | undefined;
}

const Sidebar = ({ experience, price }: IProps) => {
  const formattedPrice = useFormatPrice(price, true);

  return (
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
        <Typography className="!mb-6 !text-base font-extrabold" component="div">
          Price details
        </Typography>

        {experience && <PriceDetail experience={experience} />}
      </div>

      <Divider />

      {/* Total part */}
      {price && (
        <div className="grid gap-4 p-0 md:px-8 md:py-0">
          <div className="grid grid-cols-[1fr_max-content] items-center gap-2">
            <Typography variant="body2" className="!text-sm !font-black">
              Total
            </Typography>

            <Typography
              variant="body2"
              className="text-right !text-sm !font-black"
            >
              {formattedPrice}
            </Typography>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
