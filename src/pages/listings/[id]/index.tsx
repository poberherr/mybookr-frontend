import { useEffect, useMemo, useState } from "react";

import type { GetStaticProps, InferGetStaticPropsType } from "next";
import { useParams, useRouter } from "next/navigation";

import { DehydratedState, QueryClient, dehydrate } from "@tanstack/react-query";

import { CircularProgress, Divider, Typography } from "@mui/material";

import Calendar from "../../../components/Calendar/Calendar";
import ReviewCard from "../../../components/ReviewCard/ReviewCard";
import Gallery from "../../../components/others/Gallery";
import { SButton } from "../../../components/ui/SButton";
import StyledDialog from "../../../components/ui/StyledDialog";
import { Layout } from "@/components/Layout";

import HeartIcon from "../../../assets/icons/heart.svg";
import ListBulletIcon from "../../../assets/icons/listBullet.svg";
import ShareIcon from "../../../assets/icons/share.svg";
import StarGrayIcon from "../../../assets/icons/starGray.svg";
import { CloseCircle, Share, TickCircle } from "iconsax-react";

import {
  Accessibility,
  Amenity,
  HealthSafety,
  HouseRules,
  Listing,
  Review,
  coreListingsListQueryOptions,
  coreListingsReadQueryOptions,
  coreReviewsListQueryOptions,
  useCoreListingsRead,
  useCoreReviewsList,
} from "@/api";
import formatDateSpan from "@/helpers/date-format";

// import CheckoutAndPay from "./checkout";

export default function ListingPage({
  id,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();
  const { data: listing } = useCoreListingsRead<Listing>(id);
  const { data: reviews } = useCoreReviewsList<Review[]>();

  // eslint-disable-next-line no-unused-vars
  const [price, setPrice] = useState(0.01);
  const [rating, setRating] = useState(0);
  const [ShowAllReview, setShowAllReviews] = useState(false);
  const [showDialog, setShowDialog] = useState(false);

  const [flagGallery, setFlagGallery] = useState(false);
  const [flagCalender, setFlagCalender] = useState(false);

  // Calculate rating of the listing
  useEffect(() => {
    if (reviews && reviews.length > 0) {
      let sumOfRatings = 0;
      reviews.forEach((review) => {
        sumOfRatings += review.rating;
      });

      const rating = Number((sumOfRatings / reviews.length).toFixed(1));
      setRating(rating);
    }
  }, [reviews]);

  const houseRulesItems = getHouseRulesItems({
    houseRules: listing?.house_rules,
  });

  const healthSafetyItems = getItemsByAvailability({
    items: listing?.health_safety,
  });
  const accessibilityItems = getItemsByAvailability({
    items: listing?.accessibility,
  });

  if (!listing) {
    return "Error - No listing found.";
  }

  return (
    <Layout>
      <div className="relative flex w-full flex-col">
        {/* Hero */}
        <div className="flex flex-col gap-8">
          {/* Hero title */}
          <div className="px-4 py-0 md:px-40">
            <Typography className="!mt-8 flex w-full !text-xl !font-extrabold md:!text-3xl">
              {listing.meta.title}
            </Typography>

            {/* Rate, Number of reviews, Like and Share button */}
            <div className="mt-4 grid-cols-[1fr_auto] gap-5 md:grid">
              <Typography
                className="flex flex-wrap items-center !text-gray-500 md:!text-base"
                variant="body2"
              >
                <span className="flex items-center [&:not(:last-child)]:after:whitespace-pre [&:not(:last-child)]:after:content-['__•__']">
                  <StarGrayIcon className="w-3" alt={"Star"} />
                  &#8194;{rating}
                </span>

                <span className="[&:not(:last-child)]:after:whitespace-pre [&:not(:last-child)]:after:content-['__•__']">
                  <u>{reviews?.length} Reviews</u>
                </span>

                <span className="[&:not(:last-child)]:after:whitespace-pre [&:not(:last-child)]:after:content-['__•__']">
                  <u>
                    {listing.meta.city}, {listing.meta.country}
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
          {listing.images && (
            <div className="relative block md:hidden">
              {flagGallery ? (
                <Gallery
                  flagGallery={flagGallery}
                  setFlagGallery={setFlagGallery}
                  images={listing.images}
                />
              ) : (
                <div>
                  {/* Image */}
                  {listing.images && (
                    <img
                      className="h-72 w-full object-cover"
                      src={listing.images[0]}
                      alt=""
                    />
                  )}

                  {/* Share and Heart icons */}
                  <div
                    className={`absolute top-4 grid h-6 w-6 cursor-pointer place-items-center rounded-full bg-white right-4`}
                  >
                    <ShareIcon className="h-auto w-3.5" alt="Share" />
                  </div>
                  <div
                    className={`absolute top-4 grid h-6 w-6 cursor-pointer place-items-center rounded-full bg-white right-16`}
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
          {listing.images && (
            <div className="relative hidden h-[550px] w-full grid-cols-4 grid-rows-2 gap-5 px-40 py-0 md:grid">
              {flagGallery ? (
                <Gallery
                  flagGallery={flagGallery}
                  setFlagGallery={setFlagGallery}
                  images={listing.images}
                />
              ) : (
                <>
                  {listing.images[0] && (
                    <img
                      className="col-start-1 col-end-3 row-start-1 row-end-3 h-full w-full rounded-lg object-cover"
                      src={listing.images[0]}
                      alt=""
                    />
                  )}
                  {listing.images[1] && (
                    <img
                      className="col-start-3 col-end-4 row-start-1 row-end-2 h-full w-full rounded-lg object-cover"
                      src={listing.images[1]}
                      alt=""
                    />
                  )}
                  {listing.images[2] && (
                    <img
                      className="col-start-4 col-end-5 row-start-1 row-end-2 h-full w-full rounded-lg object-cover"
                      src={listing.images[2]}
                      alt=""
                    />
                  )}
                  {listing.images[3] && (
                    <img
                      className="col-start-3 col-end-4 row-start-2 row-end-3 h-full w-full rounded-lg object-cover"
                      src={listing.images[3]}
                      alt=""
                    />
                  )}
                  {listing.images[4] && (
                    <img
                      className="col-start-4 col-end-5 row-start-2 row-end-3 h-full w-full rounded-lg object-cover"
                      src={listing.images[4]}
                      alt=""
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
                Quick Introduction
              </Typography>

              {/* Stats - Desktop */}
              <Typography
                className="!mt-5 !font-medium !text-gray-500 md:!text-base"
                variant="body2"
              >
                {listing.space.guests_capacity} guests •{" "}
                {listing.space.bedrooms} bedrooms • {listing.space.double_beds}{" "}
                double •{listing.space.single_beds} single bed •{" "}
                {listing.space.bathrooms} baths
              </Typography>

              {/* Description */}
              <Typography className="!mt-8 !leading-relaxed" variant="body1">
                {listing.meta.description}
              </Typography>
            </div>

            <Divider className="!mt-16" />

            {/* Amenities */}
            <div className="mt-16 px-4 py-0 md:pl-40 md:pr-16">
              <Typography
                className="w-full !text-xl !font-extrabold md:!text-3xl"
                variant="h3"
              >
                What this place offers
              </Typography>

              <AmenityItems amenities={listing.amenities} />
            </div>

            <Divider className="!mt-16" />

            {/* Reviews */}
            {reviews && reviews.length && (
              <div className="mt-16 px-4 py-0 md:pl-40 md:pr-16">
                <Typography
                  className="!mb-6 w-full !text-xl !font-extrabold md:!text-3xl"
                  variant="h3"
                >
                  Reviews
                </Typography>

                <div className="mb-4 grid w-full grid-cols-1 gap-9 md:grid-cols-2">
                  {reviews
                    ?.slice(0, 2)
                    .map((item) => (
                      <ReviewCard
                        key={item.id}
                        id={item.id || 0}
                        name={"John"}
                        date={item.date || `${Date.now()}`}
                        message={item.review_text}
                      />
                    ))}
                  {ShowAllReview &&
                    reviews
                      ?.slice(2)
                      .map((item) => (
                        <ReviewCard
                          key={item.id}
                          id={item.id || 0}
                          name={"John"}
                          date={item.date || `${Date.now()}`}
                          message={item.review_text}
                        />
                      ))}
                </div>

                <SButton
                  variant="outlined"
                  size="small"
                  onClick={() => setShowAllReviews((prevState) => !prevState)}
                >
                  {ShowAllReview
                    ? "Show less reviews"
                    : `Show all ${reviews?.length} reviews`}
                </SButton>
              </div>
            )}

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
                <Typography>{listing.meta.street}</Typography>
                <Typography>
                  {listing.meta.city}, {listing.meta.country},{" "}
                  {listing.meta.zip}
                </Typography>
                <Typography>
                  {listing.meta.latitude}, {listing.meta.longitude}
                </Typography>
                <Typography>{listing.meta.country}</Typography>
              </div>
            </div>

            <Divider className="!mt-16" />

            {/* Things to know */}
            <div className="mt-16 px-4 py-0 md:pl-40 md:pr-16">
              <Typography
                className="!mb-6 w-full !text-xl !font-extrabold md:!text-3xl"
                variant="h3"
              >
                Things to know
              </Typography>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                <div>
                  <Typography className="!mb-4" variant="body1">
                    House rules
                  </Typography>

                  {houseRulesItems.map((item) => (
                    <Typography
                      className="flex items-center px-0 py-1.5 capitalize before:mr-3 before:inline-block before:h-3.5 before:w-3.5 before:bg-cover before:bg-center before:bg-no-repeat before:content-['']"
                      component="div"
                      variant="caption"
                      key={item}
                    >
                      <ListBulletIcon /> {item}
                    </Typography>
                  ))}
                </div>

                <div>
                  <Typography className="!mb-4" variant="body1">
                    Health / safety
                  </Typography>

                  {healthSafetyItems.map((item) => (
                    <Typography
                      key={item}
                      className="flex items-center px-0 py-1.5 capitalize before:mr-3 before:inline-block before:h-3.5 before:w-3.5 before:bg-cover before:bg-center before:bg-no-repeat before:content-['']"
                      component="div"
                      variant="caption"
                    >
                      <ListBulletIcon /> {item}
                    </Typography>
                  ))}
                </div>

                <div>
                  <Typography className="!mb-4" variant="body1">
                    Accessibility
                  </Typography>

                  {accessibilityItems.map((item) => (
                    <Typography
                      key={item}
                      className="flex items-center px-0 py-1.5 capitalize before:mr-3 before:inline-block before:h-3.5 before:w-3.5 before:bg-cover before:bg-center before:bg-no-repeat before:content-['']"
                      component="div"
                      variant="caption"
                    >
                      <ListBulletIcon /> {item}
                    </Typography>
                  ))}
                </div>
              </div>

              <Typography className="!mt-8">
                <b>Cancellation policy:</b>{" "}
                {listing.free_cancellation
                  ? "Free cancellation within 48 hours."
                  : "No refund!"}
              </Typography>
            </div>
          </div>

          {/* Right content - Desktop */}
          <div className="mr-40 hidden border-0 border-l border-r border-solid border-gray-100 md:block">
            <CircularProgress />
          </div>
        </div>

        {/* Reserve Mobile */}
        <div className="block md:hidden">
          <Divider className="!mt-16" />

          <div className="sticky bottom-0 my-12 grid grid-cols-[1fr_min-content] bg-white bg-opacity-30 p-4 backdrop-blur-xl">
            <div className="flex flex-col justify-center">
              <Typography className="!text-base !font-bold">
                {price} $
              </Typography>

              <Typography className="!mt-1" variant="caption">
                {formatDateSpan(new Date(), new Date())}
              </Typography>
            </div>

            <SButton
              fullWidth
              variant="contained"
              onClick={() => {
                setShowDialog(true);
              }}
            >
              Reserve
            </SButton>
          </div>
        </div>

        {/* Checkout Dialog */}
        {showDialog && listing && (
          <StyledDialog
            showDialog={showDialog}
            setShowDialog={setShowDialog}
            title={"Checkout and pay"}
          >
            null
            {/* <CheckoutAndPay
            price={price}
            eth_price={eth_price}
            setFlagCalender={setFlagCalender}
            selectedDate={selectedDate}
            selectedDate1={selectedDate1}
            guest={guest}
            setGuest={setGuest}
            connected={connected}
            booknfts={booknfts}
            setMetamaskDialog={setMetamaskDialog}
            nights={nights}
            navigate={router}
            vouchersCounter={vouchersCounter}
            setVouchersCounter={setVouchersCounter}
            pricesFormData={pricesFormData}
            setPricesFormData={setPricesFormData}
            listing={listing}
            listingRelated={{
              rating: rating,
              reviewCount: reviews.data?.length || 0,
            }}
          /> */}
          </StyledDialog>
        )}

        {/* Calendar */}
        {/* {flagCalender && (
        <Calendar
          flagCalender={flagCalender}
          setFlagCalender={setFlagCalender}
          setSelectedDate={setSelectedDate}
          setSelectedDate1={setSelectedDate1}
          date={date}
          setDate={setDate}
          nights={nights}
          setNights={setNights}
          today={today}
          tomorrow={tomorrow}
        />
      )} */}
      </div>
    </Layout>
  );
}

const AmenityItems = ({ amenities }: { amenities: Amenity }) => {
  const { availableItems, notAvailableItems } = useMemo(() => {
    const availableItems: string[] = [];
    const notAvailableItems: string[] = [];

    Object.keys(amenities).forEach((key) => {
      const isAvailable = amenities[key as keyof Amenity];
      const displayText = key.replace(/_/g, " ");

      isAvailable
        ? availableItems.push(displayText)
        : notAvailableItems.push(displayText);
    });
    return { availableItems, notAvailableItems };
  }, [amenities]);

  return (
    <div className="grid grid-cols-2 gap-2">
      <div>
        {availableItems.map((item) => (
          <div className="flex items-center gap-2" key={item}>
            <TickCircle className="size-5 text-green-700" />
            <Typography className="capitalize">{item}</Typography>
          </div>
        ))}
      </div>
      <div>
        {notAvailableItems.map((item) => (
          <div className="flex items-center gap-2" key={item}>
            <CloseCircle className="size-5 text-red-700" />
            <Typography className="capitalize">{item}</Typography>
          </div>
        ))}
      </div>
    </div>
  );
};

const getHouseRulesItems = ({ houseRules }: { houseRules?: HouseRules }) => {
  if (!houseRules) return [];

  const items = [
    `Check in: ${houseRules.check_in_time}`,
    `Check out: ${houseRules.check_out_time}`,
    `Quiet time: ${houseRules.quiet_time}`,
    `Max guests: ${houseRules.max_guests}`,
    `${houseRules.self_check_in ? "Self check in" : "No self check in"}`,
  ];

  return items;
};

type SafetyOrAccessibility = HealthSafety | Accessibility;
const getItemsByAvailability = <T extends SafetyOrAccessibility>({
  items,
}: {
  items?: T;
}): string[] => {
  if (!items) return [];

  const availableItems: string[] = [];
  const notAvailableItems: string[] = [];

  Object.keys(items).forEach((key) => {
    const isAvailable = items[key as keyof T];
    const itemName = key.replace(/_/g, " ");
    const displayText = isAvailable ? itemName : `No ${itemName.toLowerCase()}`;

    isAvailable
      ? availableItems.push(displayText)
      : notAvailableItems.push(displayText);
  });

  const sortedItems = [...availableItems, ...notAvailableItems];
  return sortedItems;
};

export const getStaticProps = (async (context) => {
  const queryClient = new QueryClient();

  if (!context.params?.id || Array.isArray(context.params.id)) {
    throw new Error("No listing id given");
  }
  const id = parseInt(context.params.id, 10);
  await queryClient.prefetchQuery(coreListingsReadQueryOptions(id));
  await queryClient.prefetchQuery(coreReviewsListQueryOptions());

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      id,
    },
  };
}) satisfies GetStaticProps<{
  dehydratedState: DehydratedState;
}>;

export const revalidate = false;

export async function getStaticPaths() {
  const queryClient = new QueryClient();

  const res = await queryClient.fetchQuery(coreListingsListQueryOptions());

  const paths = res.map((listing) => `/listings/${listing.id}`);

  return {
    paths,
    fallback: false,
  };
}
