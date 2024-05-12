import type { ScheduleItem } from "./ScheduleItem";

export type ScheduleItemsCreate201 = ScheduleItem;

export type ScheduleItemsCreateMutationRequest = Omit<
  NonNullable<ScheduleItem>,
  "id"
>;

export type ScheduleItemsCreateMutationResponse = ScheduleItem;

export type ScheduleItemsCreateMutation = {
  Response: ScheduleItemsCreateMutationResponse;
  Request: ScheduleItemsCreateMutationRequest;
};
