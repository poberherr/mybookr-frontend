import { useRouter } from "next/navigation";

import { Typography } from "@mui/material";

import { default as heartIcon } from "../../assets/icons/heart.svg";
import { default as shareIcon } from "../../assets/icons/share.svg";
import { default as starIcon } from "../../assets/icons/star.svg";

import { Listing } from "@/api";

import BoostedBadge from "../decorational/BoostedBadge";

interface IProps {
  property: Listing;
}

export default function PropertyItemBoosted({ property }: IProps) {
  const router = useRouter();
  // const today = moment().format("YYYY-MM-DD");
  // const isBoosted = property.boost_dates.includes("2024-02-19");

  return (
    <div
      className={`relative col-start-1 col-end-[span_2] row-start-1 row-end-[span_2] cursor-pointer rounded-lg bg-white shadow-csm
      `}
      onClick={() => {
        router.push("/reserve");
      }}
    >
      <div className="relative w-full">
        {property.images && (
          <img className="w-full" src={property.images[0]} alt="" />
        )}

        <Typography
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center !text-3xl !tracking-wider !text-white md:!text-4xl"
          variant="caption"
        >
          BOOSTED
        </Typography>
      </div>

      <div className={`flex flex-col p-8`}>
        <div className="mb-6 flex flex-row justify-between">
          <Typography className="!mb-4 !text-lg md:pr-20" variant="body1">
            {property.meta.city}
          </Typography>

          <Typography className="flex flex-row items-center !text-xs !font-medium">
            <img className="mr-1 h-2.5 w-2.5 min-w-fit" src={starIcon} alt="" />{" "}
            {5}
          </Typography>
        </div>

        <Typography className="!mb-12" variant="caption">
          {property.meta.description}
        </Typography>

        <div className="flex flex-row justify-between">
          <Typography className="!text-xs !font-semibold">
            ${property.price_per_night} / Night
          </Typography>

          <div className="flex flex-row items-center">
            {[
              [heartIcon, "Add to wishlist"],
              [shareIcon, "Share"],
            ].map(([icon, title]) => (
              <img
                className="h-4 w-4 first:mr-4"
                src={icon}
                alt={title}
                key={title}
              />
            ))}
          </div>
        </div>
      </div>

      <BoostedBadge />
    </div>
  );
}
