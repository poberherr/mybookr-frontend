import type { TouristActivities } from "./TouristActivities";

export type TouristActivitiesReadPathParams = {
  /**
   * @description A unique integer value identifying this Tourist Activity.
   * @type integer
   */
  id: number;
};

export type TouristActivitiesRead200 = TouristActivities;

export type TouristActivitiesReadQueryResponse = TouristActivities;

export type TouristActivitiesReadQuery = {
  Response: TouristActivitiesReadQueryResponse;
  PathParams: TouristActivitiesReadPathParams;
};
