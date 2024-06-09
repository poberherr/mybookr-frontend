"use client";

import { useContext, useRef, useState } from "react";

import Image from "next/image";

import { Divider, Typography } from "@mui/material";

import Gallery from "../../components/others/Gallery";
import MybookrMap from "@/app/components/others/MybookrMap";

import HeartIcon from "@/assets/icons/heart.svg";
import ShareIcon from "@/assets/icons/share.svg";

import CheckoutStart from "@/app/listings/[id]/CheckoutStart";
import { ExperienceItemFragment } from "@/gql/graphql";
import { SButton } from "@/app/components/ui/SButton";
import { BookingContext } from "@/app/contexts/booking";

export default function ListingComponent({
  experience,
}: {
  experience: ExperienceItemFragment;
}) {
  const { setActivityForExperience } = useContext(BookingContext);
  const [flagGallery, setFlagGallery] = useState(false);
  const checkoutStartRef = useRef<HTMLDivElement>(null);

  if (!experience) {
    return "Error - No listing found.";
  }

  return (
    <div className="relative flex w-full flex-col">
      {/* Hero */}
      <div className="flex flex-col gap-8">
        {/* Hero title */}
        <div className="px-4 py-0 md:px-40">
          <Typography className="!mt-8 flex w-full !text-xl !font-extrabold md:!text-3xl">
            {experience.title}
          </Typography>

          {/* Rate, Number of reviews, Like and Share button */}
          <div className="mt-4 grid-cols-[1fr_auto] gap-5 md:grid">
            <Typography
              className="flex flex-wrap items-center !text-gray-500 md:!text-base"
              variant="body2"
            >
              <span className="[&:not(:last-child)]:after:whitespace-pre [&:not(:last-child)]:after:content-['__•__']">
                <u>
                  {experience.location.city}, {experience.location.federalState}
                  , {experience.location.country}
                </u>
              </span>
            </Typography>

            {/* Like and Share button */}
            <div className="hidden items-center justify-end gap-6 md:flex">
              <div className="cursor-pointer items-center">
                <HeartIcon className="h-auto w-5" alt="" />
              </div>
              <div className="cursor-pointer items-center">
                <ShareIcon className="h-auto w-5" alt="" />
              </div>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        {/* Hero Image: Mobile */}
        {experience.medias && experience.medias.length > 0 && (
          <div className="relative block md:hidden">
            {flagGallery ? (
              <Gallery
                flagGallery={flagGallery}
                setFlagGallery={setFlagGallery}
                images={experience.medias}
              />
            ) : (
              <div className="h-72 w-full">
                {/* Image */}
                {experience.medias &&
                  experience.medias?.length > 0 &&
                  experience.medias[0].url && (
                    <Image
                      className="object-cover"
                      src={experience.medias[0].url}
                      alt=""
                      fill={true}
                      sizes={"900px"}
                      objectFit="center center"
                    />
                  )}

                {/* Share and Heart icons */}
                <div
                  className={`absolute right-4 top-4 grid h-6 w-6 cursor-pointer place-items-center rounded-full bg-white`}
                >
                  <ShareIcon className="h-auto w-3.5" alt="Share" />
                </div>
                <div
                  className={`absolute right-16 top-4 grid h-6 w-6 cursor-pointer place-items-center rounded-full bg-white`}
                >
                  <HeartIcon className="h-auto w-3.5" alt="Like" />
                </div>

                {/* Show all images */}
                <Typography
                  className="absolute bottom-4 right-4 flex cursor-pointer items-center justify-center rounded-3xl bg-white bg-opacity-30 px-6 py-3 text-center !text-xs !font-semibold !tracking-widest backdrop-blur-xl md:right-[calc(160px+16px)]"
                  onClick={() => {
                    setFlagGallery(true);
                  }}
                >
                  Show all
                </Typography>
              </div>
            )}
          </div>
        )}

        {/* Hero Image: Desktop */}
        {experience.medias && experience.medias.length > 0 && (
          <div className="relative hidden h-[550px] w-full grid-cols-4 grid-rows-2 gap-5 px-40 py-0 md:grid">
            {flagGallery ? (
              <Gallery
                flagGallery={flagGallery}
                setFlagGallery={setFlagGallery}
                images={experience.medias}
              />
            ) : (
              <>
                {experience.medias[0] && experience.medias[0].url && (
                  <Image
                    className="col-start-1 col-end-3 row-start-1 row-end-3 h-full w-full rounded-lg object-cover"
                    src={experience.medias[0].url}
                    alt=""
                    fill={true}
                    sizes={"900px"}
                  />
                )}
                {experience.medias[1] && experience.medias[1].url && (
                  <Image
                    className="col-start-3 col-end-4 row-start-1 row-end-2 h-full w-full rounded-lg object-cover"
                    src={experience.medias[1].url}
                    alt=""
                    fill={true}
                    sizes={"420px"}
                  />
                )}
                {experience.medias[2] && experience.medias[2].url && (
                  <Image
                    className="col-start-4 col-end-5 row-start-1 row-end-2 h-full w-full rounded-lg object-cover"
                    src={experience.medias[2].url}
                    alt=""
                    fill={true}
                    sizes={"420px"}
                  />
                )}
                {experience.medias[3] && experience.medias[3].url && (
                  <Image
                    className="col-start-3 col-end-4 row-start-2 row-end-3 h-full w-full rounded-lg object-cover"
                    src={experience.medias[3].url}
                    alt=""
                    fill={true}
                    sizes={"420px"}
                  />
                )}
                {experience.medias[4] && experience.medias[4].url && (
                  <Image
                    className="col-start-4 col-end-5 row-start-2 row-end-3 h-full w-full rounded-lg object-cover"
                    src={experience.medias[4].url}
                    alt=""
                    fill={true}
                    sizes={"420px"}
                  />
                )}

                <Typography
                  className="absolute bottom-4 right-4 flex cursor-pointer items-center justify-center rounded-3xl bg-white bg-opacity-30 px-6 py-3 text-center !text-xs !font-semibold !tracking-widest backdrop-blur-xl md:right-[calc(160px+16px)]"
                  onClick={() => {
                    setFlagGallery(true);
                  }}
                >
                  Show all
                </Typography>
              </>
            )}
          </div>
        )}
      </div>

      <Divider className="!mt-16" />

      {/* Content */}
      <div className="grid grid-cols-1 grid-rows-1 md:grid-cols-[2fr_minmax(min-content,600px)]">
        {/* Left content */}
        <div className="p-0 pt-16 md:pb-16">
          {/* Introduction */}
          <div className="px-4 py-0 md:pl-40 md:pr-16">
            <Typography
              className="w-full !text-xl !font-extrabold md:!text-3xl"
              variant="h3"
            >
              About the experience
            </Typography>

            {/* Description */}
            {experience.description && (
              <Typography
                className="prose !mt-8 !leading-relaxed"
                variant="body1"
              >
                <span
                  dangerouslySetInnerHTML={{ __html: experience.description }}
                />
              </Typography>
            )}
          </div>

          <Divider className="!mt-16" />

          <div className="mt-16 px-4 py-0 md:pl-40 md:pr-16">
            <Typography
              className="!mb-6 w-full !text-xl !font-extrabold md:!text-3xl"
              variant="h3"
            >
              Choose your yacht
            </Typography>
            <div className="grid gap-2">
              {experience.activities.map((activity) => (
                <div
                  className="flex justify-between border border-gray-100 p-4"
                  key={activity.id}
                >
                  <div>
                    <Typography
                      className="!mb-6 w-full !text-lg !font-extrabold"
                      variant="h2"
                    >
                      {activity.title}
                    </Typography>
                    {activity.description && (
                      <div
                        className="prose"
                        dangerouslySetInnerHTML={{
                          __html: activity.description,
                        }}
                      />
                    )}

                    <SButton
                      className="mt-4"
                      size="small"
                      variant="outlined"
                      onClick={() => {
                        setActivityForExperience(experience.id, activity.id);
                        checkoutStartRef.current &&
                          checkoutStartRef.current.scrollIntoView({
                            behavior: "smooth",
                          });
                      }}
                    >
                      Select cruise for $
                      {activity.availabilities
                        ? activity.availabilities[0].pricePerUnit
                        : "unavailable"}
                    </SButton>
                  </div>
                  {activity.medias && (
                    <div className="ml-4 flex-shrink-0">
                      <Image
                        className="w-48 rounded-lg"
                        src={activity.medias[0].url}
                        alt=""
                        width={activity.medias[0].width}
                        height={activity.medias[0].height}
                        sizes={"420px"}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <Divider className="!mt-16" />

          {/* Location */}
          <div className="mt-16 px-4 py-0 md:pl-40 md:pr-16">
            <Typography
              className="!mb-6 w-full !text-xl !font-extrabold md:!text-3xl"
              variant="h3"
            >
              Location
            </Typography>

            <div className="grid gap-2">
              <Typography>{experience.location.addressLineOne}</Typography>
              {experience.location.addressLineTwo && (
                <Typography>{experience.location.addressLineTwo}</Typography>
              )}
              <Typography>
                {experience.location.postalCode}, {experience.location.city}
              </Typography>
              <Typography>
                {experience.location.federalState},{" "}
                {experience.location.country}
              </Typography>

              {experience.location.longitude &&
                experience.location.latitude && (
                  <MybookrMap
                    latitude={experience.location.latitude}
                    longitude={experience.location.longitude}
                  />
                )}
            </div>
          </div>

          {/* Things to know */}
          <div className="mt-16 hidden px-4 py-0 md:pl-40 md:pr-16">
            <Typography
              className="!mb-6 w-full !text-xl !font-extrabold md:!text-3xl"
              variant="h3"
            >
              Things to know
            </Typography>

            <Typography className="!mt-8">
              <b>Cancellation policy:</b> Free cancellation within 48 hours.
            </Typography>
            <Typography className="!mt-8">
              (Example text! What to put here?)
            </Typography>
          </div>
        </div>

        {/* Right content - Desktop */}
        <div
          className="mt-10 border-0 border-l border-r border-t border-solid border-gray-100 px-4 py-4 md:mr-40 md:mt-0 md:px-0 md:py-0"
          ref={checkoutStartRef}
        >
          <CheckoutStart experience={experience} />
        </div>
      </div>
    </div>
  );
}
