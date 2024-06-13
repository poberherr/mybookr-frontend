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
    if (experience.activities.length) {

      const cheapest = experience.activities.reduce(
        (res, cur) =>
          res === 0 || cur.price < res ? cur.price : res,
        0,
      );
      return cheapest;
    }
    return 0;
  }, [experience, dateFrom, dateTo]);
};
