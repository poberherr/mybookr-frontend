import React from "react";

import { Typography } from "@mui/material";

import { Listing } from "@/app/api-helpers";
import { BookingContext } from "@/app/contexts/booking";
import { useAveragePricePerNight } from "@/app/helpers/useAveragePricePerNight";

export default function PriceDetail({ listing }: { listing: Listing }) {
  const { nights } = React.useContext(BookingContext);
  const averagePricePerNight = useAveragePricePerNight(listing);

  return (
    <div className="grid gap-4">
      {/* Night */}
      <div className="flex justify-between">
        <Typography variant="body2">
          {averagePricePerNight}$ x {nights} Nights
        </Typography>
        <Typography className="!text-sm !font-bold" variant="h6" component="p">
          {(averagePricePerNight * nights).toFixed(2)} $
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
