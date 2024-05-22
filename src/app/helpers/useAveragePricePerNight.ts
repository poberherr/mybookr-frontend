import { useContext, useMemo } from "react";

import { isSameDay, isWithinInterval } from "date-fns";

import { Listing } from "../api-helpers";
import { BookingContext } from "../contexts/booking";

export const useAveragePricePerNight = (listing?: Listing): number => {
  const { selectedDate, selectedDate1 } = useContext(BookingContext);
  return useMemo(() => {
    if (!selectedDate || !selectedDate1 || !listing) {
      return 0;
    }
    if (listing.availabilities?.length) {
      const availabilities = listing.availabilities.filter((availability) => {
        const dateFragments = availability.date_available.split("-");
        const date = new Date(
          parseInt(dateFragments[0]),
          parseInt(dateFragments[1]) - 1,
          parseInt(dateFragments[2]),
        );

        return (
          isSameDay(date, selectedDate) ||
          isSameDay(date, selectedDate1) ||
          isWithinInterval(date, {
            start: selectedDate,
            end: selectedDate1,
          })
        );
      });

      if (availabilities.length === 0) {
        return 0;
      }
      const sum = availabilities.reduce(
        (sum, cur) => sum + cur.price_per_unit,
        0,
      );
      return Math.round((sum / availabilities.length) * 100) / 100;
    }
    return 0;
  }, [listing, selectedDate, selectedDate1]);
};
