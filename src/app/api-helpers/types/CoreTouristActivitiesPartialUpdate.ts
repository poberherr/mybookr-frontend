import type { TouristActivities } from "./TouristActivities";

export type CoreTouristActivitiesPartialUpdatePathParams = {
  /**
   * @description A unique integer value identifying this Tourist Activity.
   * @type integer
   */
  id: number;
};

export type CoreTouristActivitiesPartialUpdate200 = TouristActivities;

export type CoreTouristActivitiesPartialUpdateMutationRequest = Omit<
  NonNullable<TouristActivities>,
  "id"
>;

export type CoreTouristActivitiesPartialUpdateMutationResponse =
  TouristActivities;

export type CoreTouristActivitiesPartialUpdateMutation = {
  Response: CoreTouristActivitiesPartialUpdateMutationResponse;
  Request: CoreTouristActivitiesPartialUpdateMutationRequest;
  PathParams: CoreTouristActivitiesPartialUpdatePathParams;
};
