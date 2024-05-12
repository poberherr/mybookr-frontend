import type { ScheduleItem } from "./ScheduleItem";

export type ScheduleItemsReadPathParams = {
  /**
   * @description A UUID string identifying this Schedule Item.
   * @type string, uuid
   */
  id: string;
};

export type ScheduleItemsRead200 = ScheduleItem;

export type ScheduleItemsReadQueryResponse = ScheduleItem;

export type ScheduleItemsReadQuery = {
  Response: ScheduleItemsReadQueryResponse;
  PathParams: ScheduleItemsReadPathParams;
};
