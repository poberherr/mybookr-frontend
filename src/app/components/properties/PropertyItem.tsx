"use client";

import Image from "next/image";
import Link from "next/link";

import { Typography } from "@mui/material";

import { default as HeartIcon } from "@/assets/icons/heart.svg";
import { default as ShareIcon } from "@/assets/icons/share.svg";
import { default as StarIcon } from "@/assets/icons/star.svg";

import BoostedBadge from "../others/BoostedBadge";
import { ExperienceItem } from "@/gql/graphql";
import { useMinimumPrice } from "@/app/helpers/useMinimumPrice";

interface IProps {
  property: ExperienceItem;
}

export default function PropertyItem({ property: experience }: IProps) {
  const isBoosted = false;
  const averagePricePerNight = useMinimumPrice(experience);

  return (
    <Link
      className={`relative cursor-pointer rounded-lg bg-white shadow-csm
      ${
        isBoosted
          ? "col-start-1 col-end-[span_2] row-start-1 row-end-[span_2]"
          : "col-end-[span_2] sm:col-end-[span_1]"
      }
      `}
      href={`/listings/${experience.id}`}
    >
      <div className="relative aspect-video">
        {experience.medias &&
          experience.medias?.length > 0 &&
          experience.medias[0].url && (
            <Image
              className="rounded-t-lg object-cover"
              src={experience.medias[0].url}
              alt=""
              fill={true}
              sizes="420px"
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
        <Typography
          className="!mb-1 overflow-hidden text-ellipsis whitespace-nowrap !text-sm !font-bold"
          variant="body1"
        >
          {experience.title}
        </Typography>
        <div className="mb-6 flex flex-row justify-between">
          {isBoosted ? (
            <Typography className="!mb-4 !text-lg md:pr-20" variant="body1">
              in {experience.location.city}, {experience.location.federalState},{" "}
              {experience.location.country}
            </Typography>
          ) : (
            <Typography variant="body2">
              in {experience.location.city}, {experience.location.federalState},{" "}
              {experience.location.country}
            </Typography>
          )}

          {/* <Typography className="flex flex-row items-center !text-xs !font-medium">
            <StarIcon className="mr-1 h-2.5 w-2.5 min-w-fit" alt="rating" /> {5}
          </Typography> */}
        </div>

        {isBoosted && (
          <Typography className="!mb-12" variant="caption">
            {experience.description}
          </Typography>
        )}

        <div className="flex flex-row justify-between">
          <Typography className="!text-xs !font-semibold">
            from ${averagePricePerNight} • {experience.activities.length} yacht
            {experience.activities.length > 1 && "s"} available
          </Typography>

          {/* <div className="flex flex-row items-center">
            <HeartIcon className="h-4 w-4 first:mr-4" alt="Add to wishlist" />
            <ShareIcon className="h-4 w-4 first:mr-4" alt="Share" />
          </div> */}
        </div>
      </div>

      {isBoosted && <BoostedBadge />}
    </Link>
  );
}
