import React, { useContext } from "react";

import { Typography } from "@mui/material";

import { ExperienceItemFragment } from "@/gql/graphql";
import { useMinimumPrice } from "@/app/helpers/useMinimumPrice";
import { BookingContext } from "@/app/contexts/booking";

export default function PriceDetail({
  experience,
}: {
  experience: ExperienceItemFragment;
}) {
  const { activities } = useContext(BookingContext);
  const activityId = activities[experience.id];
  const activity = experience.activities.find(
    (activity) => activity.id === activityId,
  );
  const price =
    activity?.availabilities && activity.availabilities[0].pricePerUnit;

  return (
    <div className="grid gap-4">
      {/* Base Price */}
      {price && (
        <div className="flex justify-between">
          <Typography variant="body2">1 x $ {price}</Typography>
          <Typography
            className="!text-sm !font-bold"
            variant="h6"
            component="p"
          >
            $ {price},00
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
          $ 0,00
        </Typography>
      </div>
    </div>
  );
}
