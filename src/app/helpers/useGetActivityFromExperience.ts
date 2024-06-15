import { ExperienceItemFragment } from "@/gql/graphql";
import { useContext, useMemo } from "react";
import { SearchStateMachineContext } from "../state-machines/searchMachine";

export const useGetActivityFromExperience = (
  experience: ExperienceItemFragment,
) => {
  const {
    searchMachineState: {
      context: { activities },
    },
  } = useContext(SearchStateMachineContext);

  return useMemo(() => {
    const activityId = activities ? activities[experience.id] : undefined;
    return activityId
      ? experience.activities.find((activity) => activity.id === activityId)
      : undefined;
  }, [activities]);
};
