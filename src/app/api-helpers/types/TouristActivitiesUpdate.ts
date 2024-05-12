import type { TouristActivities } from "./TouristActivities";

export type TouristActivitiesUpdatePathParams = {
  /**
   * @description A unique integer value identifying this Tourist Activity.
   * @type integer
   */
  id: number;
};

export type TouristActivitiesUpdate200 = TouristActivities;

export type TouristActivitiesUpdateMutationRequest = Omit<
  NonNullable<TouristActivities>,
  "id"
>;

export type TouristActivitiesUpdateMutationResponse = TouristActivities;

export type TouristActivitiesUpdateMutation = {
  Response: TouristActivitiesUpdateMutationResponse;
  Request: TouristActivitiesUpdateMutationRequest;
  PathParams: TouristActivitiesUpdatePathParams;
};
