import type { ScheduleItem } from "./ScheduleItem";

export type CoreScheduleItemsReadPathParams = {
  /**
   * @description A UUID string identifying this Schedule Item.
   * @type string, uuid
   */
  id: string;
};

export type CoreScheduleItemsRead200 = ScheduleItem;

export type CoreScheduleItemsReadQueryResponse = ScheduleItem;

export type CoreScheduleItemsReadQuery = {
  Response: CoreScheduleItemsReadQueryResponse;
  PathParams: CoreScheduleItemsReadPathParams;
};
