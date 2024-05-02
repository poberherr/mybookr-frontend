import type { ScheduleItem } from "./ScheduleItem";

export type CoreScheduleItemsCreate201 = ScheduleItem;

export type CoreScheduleItemsCreateMutationRequest = Omit<
  NonNullable<ScheduleItem>,
  "id"
>;

export type CoreScheduleItemsCreateMutationResponse = ScheduleItem;

export type CoreScheduleItemsCreateMutation = {
  Response: CoreScheduleItemsCreateMutationResponse;
  Request: CoreScheduleItemsCreateMutationRequest;
};
