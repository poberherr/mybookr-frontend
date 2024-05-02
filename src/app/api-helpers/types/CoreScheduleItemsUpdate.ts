import type { ScheduleItem } from "./ScheduleItem";

export type CoreScheduleItemsUpdatePathParams = {
  /**
   * @description A UUID string identifying this Schedule Item.
   * @type string, uuid
   */
  id: string;
};

export type CoreScheduleItemsUpdate200 = ScheduleItem;

export type CoreScheduleItemsUpdateMutationRequest = Omit<
  NonNullable<ScheduleItem>,
  "id"
>;

export type CoreScheduleItemsUpdateMutationResponse = ScheduleItem;

export type CoreScheduleItemsUpdateMutation = {
  Response: CoreScheduleItemsUpdateMutationResponse;
  Request: CoreScheduleItemsUpdateMutationRequest;
  PathParams: CoreScheduleItemsUpdatePathParams;
};
