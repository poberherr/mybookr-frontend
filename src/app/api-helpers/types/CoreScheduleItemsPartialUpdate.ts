import type { ScheduleItem } from "./ScheduleItem";

export type CoreScheduleItemsPartialUpdatePathParams = {
  /**
   * @description A UUID string identifying this Schedule Item.
   * @type string, uuid
   */
  id: string;
};

export type CoreScheduleItemsPartialUpdate200 = ScheduleItem;

export type CoreScheduleItemsPartialUpdateMutationRequest = Omit<
  NonNullable<ScheduleItem>,
  "id"
>;

export type CoreScheduleItemsPartialUpdateMutationResponse = ScheduleItem;

export type CoreScheduleItemsPartialUpdateMutation = {
  Response: CoreScheduleItemsPartialUpdateMutationResponse;
  Request: CoreScheduleItemsPartialUpdateMutationRequest;
  PathParams: CoreScheduleItemsPartialUpdatePathParams;
};
