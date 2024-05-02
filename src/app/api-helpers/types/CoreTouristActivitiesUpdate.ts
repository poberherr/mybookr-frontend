import type { TouristActivities } from "./TouristActivities";

export type CoreTouristActivitiesUpdatePathParams = {
  /**
   * @description A unique integer value identifying this Tourist Activity.
   * @type integer
   */
  id: number;
};

export type CoreTouristActivitiesUpdate200 = TouristActivities;

export type CoreTouristActivitiesUpdateMutationRequest = Omit<
  NonNullable<TouristActivities>,
  "id"
>;

export type CoreTouristActivitiesUpdateMutationResponse = TouristActivities;

export type CoreTouristActivitiesUpdateMutation = {
  Response: CoreTouristActivitiesUpdateMutationResponse;
  Request: CoreTouristActivitiesUpdateMutationRequest;
  PathParams: CoreTouristActivitiesUpdatePathParams;
};
