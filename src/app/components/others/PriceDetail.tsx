import React, { useMemo } from "react";

import { Typography } from "@mui/material";

import { ExperienceItemFragment } from "@/gql/graphql";
import { useGetActivityFromExperience } from "@/app/helpers/useGetActivityFromExperience";
import { useFormatPrice } from "@/app/helpers/useFormatPrice";

export default function PriceDetail({
  experience,
}: {
  experience: ExperienceItemFragment;
}) {
  const activity = useGetActivityFromExperience(experience);

  const price = activity?.price;

  const formattedPrice = useFormatPrice(price, true);

  return (
    <div className="grid gap-4">
      {/* Base Price */}
      {price && (
        <div className="flex justify-between">
          <Typography variant="body2">1 x {formattedPrice}</Typography>
          <Typography
            className="!text-sm !font-bold"
            variant="h6"
            component="p"
          >
            {formattedPrice}
          </Typography>
        </div>
      )}

      {/* Service fee */}
      <div className="flex justify-between">
        <Typography variant="body2">Service Fee</Typography>
        <Typography
          className="!text-sm !font-bold !text-green-700"
          variant="h6"
          component="p"
        >
          Rp 0.00
        </Typography>
      </div>
    </div>
  );
}
