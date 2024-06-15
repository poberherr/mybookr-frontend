import { useContext, useMemo } from "react";

import { addDays, isWithinInterval } from "date-fns";

import { ExperienceItemFragment } from "@/gql/graphql";
import { SearchStateMachineContext } from "../state-machines/searchMachine";

export const useMinimumPrice = (experience: ExperienceItemFragment): number => {
  const {
    searchMachineState: {
      context: { dateFrom, dateTo },
    },
  } = useContext(SearchStateMachineContext);
  return useMemo(() => {
    if (!dateFrom || !dateTo || !experience.activities) {
      return 0;
    }
    const allAvailabilities = experience.activities
      .map((activity) => activity.availabilities || [])
      .flat();
    if (allAvailabilities.length) {
      const availabilities = allAvailabilities.filter((availability) => {
        return isWithinInterval(availability?.dateAvailable, {
          start: addDays(dateFrom, -1),
          end: addDays(dateTo, 1),
        });
      });

      if (availabilities.length === 0) {
        return 0;
      }
      const cheapest = availabilities.reduce(
        (res, cur) =>
          res === 0 || cur.pricePerUnit < res ? cur.pricePerUnit : res,
        0,
      );
      return cheapest;
    }
    return 0;
  }, [experience, dateFrom, dateTo]);
};
