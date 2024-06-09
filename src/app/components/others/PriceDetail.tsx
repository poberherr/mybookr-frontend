import React from "react";

import { Typography } from "@mui/material";

import { ExperienceItemFragment } from "@/gql/graphql";
import { useMinimumPrice } from "@/app/helpers/useMinimumPrice";

export default function PriceDetail({ listing }: { listing: ExperienceItemFragment }) {
  // @todo get price from selected availability - if no selected, show as "from" price - disable reserve button (rename to checkout)
  const minimumPrice = useMinimumPrice(listing);

  return (
    <div className="grid gap-4">
      {/* Base Price */}
      <div className="flex justify-between">
        <Typography variant="body2">
          1 x {minimumPrice}$
        </Typography>
        <Typography className="!text-sm !font-bold" variant="h6" component="p">
          {minimumPrice}$
        </Typography>
      </div>

      {/* Service fee */}
      <div className="flex justify-between">
        <Typography variant="body2">Service Fee</Typography>
        <Typography
          className="!text-sm !font-bold !text-green-700"
          variant="h6"
          component="p"
        >
          0.00 $
        </Typography>
      </div>
    </div>
  );
}
