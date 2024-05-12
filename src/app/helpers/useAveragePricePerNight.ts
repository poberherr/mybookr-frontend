import { useContext, useMemo } from "react";

import { isWithinInterval } from "date-fns";

import { Listing } from "../api-helpers";
import { BookingContext } from "../contexts/booking";

export const useAveragePricePerNight = (listing?: Listing): number => {
  const { selectedDate, selectedDate1 } = useContext(BookingContext);
  return useMemo(() => {
    if (!selectedDate || !selectedDate1 || !listing) {
      return 0;
    }
    if (listing.availabilities?.length) {
      const availabilities = listing.availabilities.filter((availability) =>
        isWithinInterval(new Date(availability.date_available), {
          start: selectedDate,
          end: selectedDate1,
        }),
      );
      const sum = availabilities.reduce(
        (sum, cur) => sum + cur.price_per_unit,
        0,
      );
      return Math.round((sum / availabilities.length) * 100) / 100;
    }
    return 0;
  }, [listing, selectedDate, selectedDate1]);
};
