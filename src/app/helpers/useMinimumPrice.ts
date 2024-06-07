import { useContext, useMemo } from "react";

import { addDays, isWithinInterval } from "date-fns";

import { BookingContext } from "../contexts/booking";
import { ExperienceItem } from "@/gql/graphql";

export const useMinimumPrice = (
  experience: ExperienceItem,
): number => {
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
      const cheapest = availabilities.reduce(
        (res, cur) => ((res === 0 || cur.pricePerUnit < res) ? cur.pricePerUnit : res),
        0,
      );
      return cheapest;
    }
    return 0;
  }, [experience, selectedDate, selectedDate1]);
};
