import type { ScheduleItem } from "./ScheduleItem";

export type ScheduleItemsUpdatePathParams = {
  /**
   * @description A UUID string identifying this Schedule Item.
   * @type string, uuid
   */
  id: string;
};

export type ScheduleItemsUpdate200 = ScheduleItem;

export type ScheduleItemsUpdateMutationRequest = Omit<
  NonNullable<ScheduleItem>,
  "id"
>;

export type ScheduleItemsUpdateMutationResponse = ScheduleItem;

export type ScheduleItemsUpdateMutation = {
  Response: ScheduleItemsUpdateMutationResponse;
  Request: ScheduleItemsUpdateMutationRequest;
  PathParams: ScheduleItemsUpdatePathParams;
};
