"use client";

import Image from "next/image";
import Link from "next/link";
import clsx from "clsx/lite";

import { Typography } from "@mui/material";

import { useMinimumPrice } from "@/app/helpers/useMinimumPrice";
import { ExperienceItemFragment } from "@/gql/graphql";
import { useFormatPrice } from "@/app/helpers/useFormatPrice";
import { useMemo } from "react";
import { useRenderLabel } from "@/app/helpers/labels";
import { useExperienceURL } from "@/app/helpers/urls";

interface IProps {
  experience: ExperienceItemFragment;
}

export default function ExperienceTeaser({ experience }: IProps) {
  const isBoosted = false;
  const minimumPrice = useMinimumPrice(experience);
  const formattedPrice = useFormatPrice(minimumPrice);
  const availableActivityCount = useMemo(() => {
    return experience.activities.filter(
      (activity) => activity.blockedDays.length > 0,
    ).length;
  }, [experience]);
  const url = useExperienceURL(experience);

  const teaserPhysicalItemsAvailable = useRenderLabel(
    "teaserPhysicalItemsAvailable",
  );

  const footerText = useMemo(
    () =>
      [
        `from ${formattedPrice}`,
        // @todo reenable as soon we have the availability fixed for activities without physical item
        // availableActivityCount &&
        //   `${availableActivityCount} ${teaserPhysicalItemsAvailable}`,
      ]
        .filter(Boolean)
        .join(" • "),
    [availableActivityCount, teaserPhysicalItemsAvailable],
  );

  return (
    <Link
      className={clsx(
        `relative cursor-pointer rounded-lg bg-white shadow-csm`,
        isBoosted
          ? "col-start-1 col-end-[span_2] row-start-1 row-end-[span_2]"
          : "col-end-[span_2] sm:col-end-[span_1]",
        // availableActivityCount === 0 && "opacity-80 grayscale", @todo reenable as soon we have the availability fixed for activities without physical item
      )}
      href={url}
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
        </div>

        {isBoosted && (
          <Typography className="!mb-12" variant="caption">
            {experience.description}
          </Typography>
        )}

        <div className="flex flex-row justify-between">
          <Typography className="!text-xs !font-semibold">
            {footerText}
          </Typography>
        </div>
      </div>
    </Link>
  );
}
