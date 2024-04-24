import Link from "next/link";

import { Typography } from "@mui/material";

import { default as HeartIcon } from "@/assets/icons/heart.svg";
import { default as ShareIcon } from "@/assets/icons/share.svg";
import { default as StarIcon } from "@/assets/icons/star.svg";

import { Listing } from "@/app/api-helpers";

import BoostedBadge from "../others/BoostedBadge";

interface IProps {
  property: Listing;
}

export default function PropertyItem({ property }: IProps) {
  const isBoosted = property.boost_dates?.includes("2024-02-19");

  return (
    <Link
      className={`relative cursor-pointer rounded-lg bg-white shadow-csm
      ${
        isBoosted
          ? "col-start-1 col-end-[span_2] row-start-1 row-end-[span_2]"
          : "col-end-[span_2] sm:col-end-[span_1]"
      }
      `}
      href={`/listings/${property.id}`}
    >
      <div className="relative">
        {property.images && property.images.length && (
          <img
            className="h-auto w-full rounded-t-lg"
            src={property.images[0]}
            alt=""
          />
        )}

        {isBoosted && (
          <Typography
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center !text-3xl !tracking-wider !text-white md:!text-4xl"
            variant="caption"
          >
            BOOSTED
          </Typography>
        )}
      </div>

      <div className={`flex flex-col ${isBoosted ? "p-8" : "p-4"}`}>
        <div className="mb-6 flex flex-row justify-between">
          {isBoosted ? (
            <Typography className="!mb-4 !text-lg md:pr-20" variant="body1">
              {property.meta.city}
            </Typography>
          ) : (
            <Typography variant="body2">{property.meta.city}</Typography>
          )}

          <Typography className="flex flex-row items-center !text-xs !font-medium">
            <StarIcon className="mr-1 h-2.5 w-2.5 min-w-fit" alt="rating" /> {5}
          </Typography>
        </div>

        {isBoosted && (
          <Typography className="!mb-12" variant="caption">
            {property.meta.description}
          </Typography>
        )}

        <div className="flex flex-row justify-between">
          <Typography className="!text-xs !font-semibold">
            ${property.price_per_night} / Night
          </Typography>

          <div className="flex flex-row items-center">
            <HeartIcon className="h-4 w-4 first:mr-4" alt="Add to wishlist" />
            <ShareIcon className="h-4 w-4 first:mr-4" alt="Share" />
          </div>
        </div>
      </div>

      {isBoosted && <BoostedBadge />}
    </Link>
  );
}
