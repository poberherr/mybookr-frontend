import { useContext, useMemo } from "react";

import { addDays, isWithinInterval } from "date-fns";

import { BookingContext } from "../contexts/booking";
import { ExperienceItem } from "@/gql/graphql";

export const useAveragePricePerNight = (experience: ExperienceItem): number => {
  const { selectedDate, selectedDate1 } = useContext(BookingContext);
  return useMemo(() => {
    if (!selectedDate || !selectedDate1 || !experience.activities) {
      return 0;
    }
    const allAvailabilities = experience.activities
      .map((activity) => activity.availabilities || [])
      .flat();
    if (allAvailabilities.length) {
      const availabilities = allAvailabilities.filter((availability) => {
        return isWithinInterval(availability?.dateAvailable, {
          start: addDays(selectedDate, -1),
          end: addDays(selectedDate1, 1),
        });
      });

      if (availabilities.length === 0) {
        return 0;
      }
      const sum = availabilities.reduce(
        (sum, cur) => sum + cur.pricePerUnit,
        0,
      );
      return Math.round((sum / availabilities.length) * 100) / 100;
    }
    return 0;
  }, [experience, selectedDate, selectedDate1]);
};
