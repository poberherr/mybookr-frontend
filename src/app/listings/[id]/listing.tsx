"use client";

import { RefObject, useContext, useRef, useState } from "react";

import Image from "next/image";

import { Divider, Typography } from "@mui/material";

import Gallery from "../../components/others/Gallery";
import MybookrMap from "@/app/components/others/MybookrMap";

import HeartIcon from "@/assets/icons/heart.svg";
import ShareIcon from "@/assets/icons/share.svg";

import CheckoutStart from "@/app/listings/[id]/CheckoutStart";
import { ExperienceItemFragment } from "@/gql/graphql";
import { SButton } from "@/app/components/ui/SButton";
import { useFormatPrice } from "@/app/helpers/useFormatPrice";
import { SearchStateMachineContext } from "@/app/state-machines/searchMachine";
import { CategoryContext } from "@/app/helpers/categoryContext";
import { RenderLabel, useRenderLabel } from "@/app/helpers/labels";
import BackButton from "@/app/components/others/BackButton";

interface IActivityCardProps {
  experience: ExperienceItemFragment;
  activity: ExperienceItemFragment["activities"][0];
  checkoutStartRef: RefObject<HTMLDivElement>;
  renderedActivityDescriptions: { [key: string]: string };
}

const ActivityCard = ({
  activity,
  experience,
  checkoutStartRef,
  renderedActivityDescriptions,
}: IActivityCardProps) => {
  const { sendSearchMachineAction } = useContext(SearchStateMachineContext);
  const formattedPrice = useFormatPrice(activity.price);

  const detailPriceUnit = useRenderLabel("detailPriceUnit");
  const detailSelectActivity = useRenderLabel("detailSelectActivity");

  return (
    <div className="grid gap-4 border border-gray-100 p-4 lg:gap-8">
      <div className="grid justify-between gap-4 lg:flex">
        {activity.medias && (
          <div className="order-1 w-full flex-shrink-0 lg:order-2 lg:ml-4 lg:w-64">
            <Image
              className="w-full rounded-lg"
              src={activity.medias[0].url}
              alt=""
              width={activity.medias[0].width}
              height={activity.medias[0].height}
              sizes={"420px"}
            />
          </div>
        )}
        <div className="prose order-2 lg:order-1">
          <h2 className="mb-0 text-2xl font-bold">{activity.title}</h2>
          {activity.description && (
            <div
              dangerouslySetInnerHTML={{
                __html: renderedActivityDescriptions[activity.id],
              }}
            />
          )}
        </div>
      </div>

      <div className="flex w-full items-center justify-between">
        <SButton
          size="small"
          disabled={!formattedPrice}
          onClick={() => {
            sendSearchMachineAction({
              type: "updateBooking",
              data: { activityId: activity.id, experienceId: experience.id },
            });
            checkoutStartRef.current &&
              checkoutStartRef.current.scrollIntoView({
                behavior: "smooth",
              });
          }}
        >
          <span className="mr-1 hidden md:inline-block">
            {detailSelectActivity}{" "}
          </span>
          <span className="font-bold">{activity.title}</span>
        </SButton>
        <div className="flex items-center gap-2">
          {formattedPrice ? (
            <>
              <span className="text-sm opacity-80">starting price:</span>
              <span className="text-xl font-bold">{formattedPrice}</span>
              <span className="hidden text-sm opacity-80 lg:inline-block">
                {detailPriceUnit}
              </span>
            </>
          ) : (
            <span className="text-xl font-bold opacity-80">Unavailable</span>
          )}
        </div>
      </div>
    </div>
  );
};

interface IListingComponentProps {
  experience: ExperienceItemFragment;
  renderedDescription: string;
  renderedActivityDescriptions: { [key: string]: string };
}

export default function ListingComponent({
  experience,
  renderedDescription,
  renderedActivityDescriptions,
}: IListingComponentProps) {
  const [flagGallery, setFlagGallery] = useState(false);
  const checkoutStartRef = useRef<HTMLDivElement>(null);

  if (!experience) {
    return "Error - No listing found.";
  }

  return (
    <CategoryContext.Provider
      value={
        (experience.categories && experience.categories[0].path) ||
        process.env.NEXT_PUBLIC_BASE_CATEGORY ||
        "Root"
      }
    >
      <BackButton pageName={"all experiences"} route={"/listings"} />
      <div className="relative flex w-full flex-col">
        {/* Hero */}
        <div className="flex flex-col gap-8">
          {/* Hero title */}
          <div className="px-4 py-0 lg:px-40">
            <Typography className="!mt-8 flex w-full !text-xl !font-extrabold lg:!text-3xl">
              {experience.title}
            </Typography>

            {/* Rate, Number of reviews, Like and Share button */}
            <div className="mt-4 grid-cols-[1fr_auto] gap-5 lg:grid">
              <Typography
                className="flex flex-wrap items-center !text-gray-500 lg:!text-base"
                variant="body2"
              >
                <span className="[&:not(:last-child)]:after:whitespace-pre [&:not(:last-child)]:after:content-['__•__']">
                  <u>
                    {experience.location.city},{" "}
                    {experience.location.federalState},{" "}
                    {experience.location.country}
                  </u>
                </span>
              </Typography>

              {/* Like and Share button */}
              <div className="hidden items-center justify-end gap-6 lg:flex">
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
            <div className="relative block lg:hidden">
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
                    className="absolute bottom-4 right-4 flex cursor-pointer items-center justify-center rounded-3xl bg-white bg-opacity-30 px-6 py-3 text-center !text-xs !font-semibold !tracking-widest backdrop-blur-xl lg:right-[calc(160px+16px)]"
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
            <div className="relative hidden h-[550px] w-full grid-cols-4 grid-rows-2 gap-5 px-40 py-0 lg:grid">
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
                    className="absolute bottom-4 right-4 flex cursor-pointer items-center justify-center rounded-3xl bg-white bg-opacity-30 px-6 py-3 text-center !text-xs !font-semibold !tracking-widest backdrop-blur-xl lg:right-[calc(160px+16px)]"
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
        <div className="grid grid-cols-1 grid-rows-1 lg:grid-cols-[2fr_minmax(min-content,600px)]">
          {/* Left content */}
          <div className="p-0 pt-16 lg:pb-16">
            {/* Introduction */}
            <div className="px-4 py-0 lg:pl-40 lg:pr-16">
              <Typography
                className="w-full !text-xl !font-extrabold lg:!text-3xl"
                variant="h3"
              >
                <RenderLabel labelId="detailTitle" />
              </Typography>

              {/* Description */}
              {renderedDescription && (
                <div
                  className="prose !mt-8 !leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: renderedDescription }}
                />
              )}
            </div>

            <Divider className="!mt-16" />

            <div className="mt-16 px-4 py-0 lg:pl-40 lg:pr-16">
              <Typography
                className="!mb-6 w-full !text-xl !font-extrabold lg:!text-3xl"
                variant="h3"
              >
                <RenderLabel labelId="detailChooseActivity" />
              </Typography>
              <div className="grid gap-8">
                {experience.activities.map((activity) => (
                  <ActivityCard
                    key={activity.id}
                    experience={experience}
                    activity={activity}
                    renderedActivityDescriptions={renderedActivityDescriptions}
                    checkoutStartRef={checkoutStartRef}
                  />
                ))}
              </div>
            </div>

            <Divider className="!mt-16" />

            {/* Location */}
            <div className="mt-16 px-4 py-0 lg:pl-40 lg:pr-16">
              <Typography
                className="!mb-6 w-full !text-xl !font-extrabold lg:!text-3xl"
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
            <div className="mt-16 hidden px-4 py-0 lg:pl-40 lg:pr-16">
              <Typography
                className="!mb-6 w-full !text-xl !font-extrabold lg:!text-3xl"
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
            className="mt-10 border-0 border-l border-r border-t border-solid border-gray-100 px-4 py-4 lg:mr-40 lg:mt-0 lg:px-0 lg:py-0"
            ref={checkoutStartRef}
          >
            <CheckoutStart experience={experience} />
          </div>
        </div>
      </div>
    </CategoryContext.Provider>
  );
}
