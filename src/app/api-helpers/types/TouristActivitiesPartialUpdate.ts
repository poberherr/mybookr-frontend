import type { TouristActivities } from "./TouristActivities";

export type TouristActivitiesPartialUpdatePathParams = {
  /**
   * @description A unique integer value identifying this Tourist Activity.
   * @type integer
   */
  id: number;
};

export type TouristActivitiesPartialUpdate200 = TouristActivities;

export type TouristActivitiesPartialUpdateMutationRequest = Omit<
  NonNullable<TouristActivities>,
  "id"
>;

export type TouristActivitiesPartialUpdateMutationResponse = TouristActivities;

export type TouristActivitiesPartialUpdateMutation = {
  Response: TouristActivitiesPartialUpdateMutationResponse;
  Request: TouristActivitiesPartialUpdateMutationRequest;
  PathParams: TouristActivitiesPartialUpdatePathParams;
};
