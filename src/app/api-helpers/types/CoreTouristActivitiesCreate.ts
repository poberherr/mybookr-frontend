import type { TouristActivities } from "./TouristActivities";

export type CoreTouristActivitiesCreate201 = TouristActivities;

export type CoreTouristActivitiesCreateMutationRequest = Omit<
  NonNullable<TouristActivities>,
  "id"
>;

export type CoreTouristActivitiesCreateMutationResponse = TouristActivities;

export type CoreTouristActivitiesCreateMutation = {
  Response: CoreTouristActivitiesCreateMutationResponse;
  Request: CoreTouristActivitiesCreateMutationRequest;
};
