import { ExperienceItemFragment } from "@/gql/graphql";

export const useGetActivityFromExperience = (activityId: string | null, experience: ExperienceItemFragment) => activityId
  ? experience.activities.find((activity) => activity.id === activityId)
  : undefined;
