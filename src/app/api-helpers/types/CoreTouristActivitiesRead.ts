import type { TouristActivities } from "./TouristActivities";

export type CoreTouristActivitiesReadPathParams = {
  /**
   * @description A unique integer value identifying this Tourist Activity.
   * @type integer
   */
  id: number;
};

export type CoreTouristActivitiesRead200 = TouristActivities;

export type CoreTouristActivitiesReadQueryResponse = TouristActivities;

export type CoreTouristActivitiesReadQuery = {
  Response: CoreTouristActivitiesReadQueryResponse;
  PathParams: CoreTouristActivitiesReadPathParams;
};
