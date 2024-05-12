import type { ScheduleItem } from "./ScheduleItem";

export type ScheduleItemsPartialUpdatePathParams = {
  /**
   * @description A UUID string identifying this Schedule Item.
   * @type string, uuid
   */
  id: string;
};

export type ScheduleItemsPartialUpdate200 = ScheduleItem;

export type ScheduleItemsPartialUpdateMutationRequest = Omit<
  NonNullable<ScheduleItem>,
  "id"
>;

export type ScheduleItemsPartialUpdateMutationResponse = ScheduleItem;

export type ScheduleItemsPartialUpdateMutation = {
  Response: ScheduleItemsPartialUpdateMutationResponse;
  Request: ScheduleItemsPartialUpdateMutationRequest;
  PathParams: ScheduleItemsPartialUpdatePathParams;
};
