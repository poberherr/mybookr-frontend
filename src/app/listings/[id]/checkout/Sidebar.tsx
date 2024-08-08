import React from "react";

import Image from "next/image";

import { Divider, Typography } from "@mui/material";

import PriceDetail from "@/app/components/others/PriceDetail";

import { ExperienceItemFragment } from "@/gql/graphql";
import { useFormatPrice } from "@/app/helpers/useFormatPrice";

interface IProps {
  experience: ExperienceItemFragment;
  price: number | undefined;
}

const Sidebar = ({ experience, price }: IProps) => {
  const formattedPrice = useFormatPrice(price, true);

  return (
    <div className="sticky top-24 grid gap-8 bg-white px-0 py-16">
      <div>
        <Typography
          className="p-0 !font-extrabold md:px-8 md:py-0 md:!text-2xl"
          variant="h6"
        >
          {experience.title}
        </Typography>

        <Typography
          className="p-0 !text-gray-600 md:px-8 md:py-0"
          variant="body2"
        >
          in {experience.location.city}, {experience.location.federalState},{" "}
          {experience.location.country}
        </Typography>

        <Typography
          className="p-0 !text-gray-600 md:px-8 md:py-0"
          variant="body2"
        >
          {experience.categories && experience.categories.length > 1
            ? "Categories"
            : "Category"}
          :{" "}
          {experience.categories?.map((category) => (
            <span
              key={category.path}
              className="[&:not(:last-child)]:after:whitespace-pre [&:not(:last-child)]:after:content-['__•__']"
            >
              {category.name}
            </span>
          ))}
        </Typography>
      </div>

      {/* Image */}
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
