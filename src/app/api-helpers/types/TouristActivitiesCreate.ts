import type { TouristActivities } from "./TouristActivities";

export type TouristActivitiesCreate201 = TouristActivities;

export type TouristActivitiesCreateMutationRequest = Omit<
  NonNullable<TouristActivities>,
  "id"
>;

export type TouristActivitiesCreateMutationResponse = TouristActivities;

export type TouristActivitiesCreateMutation = {
  Response: TouristActivitiesCreateMutationResponse;
  Request: TouristActivitiesCreateMutationRequest;
};
