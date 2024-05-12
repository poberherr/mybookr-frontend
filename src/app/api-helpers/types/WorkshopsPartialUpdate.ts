import type { Workshop } from "./Workshop";

export type WorkshopsPartialUpdatePathParams = {
  /**
   * @description A unique integer value identifying this Workshop.
   * @type integer
   */
  id: number;
};

export type WorkshopsPartialUpdate200 = Workshop;

export type WorkshopsPartialUpdateMutationRequest = Omit<
  NonNullable<Workshop>,
  "id"
>;

export type WorkshopsPartialUpdateMutationResponse = Workshop;

export type WorkshopsPartialUpdateMutation = {
  Response: WorkshopsPartialUpdateMutationResponse;
  Request: WorkshopsPartialUpdateMutationRequest;
  PathParams: WorkshopsPartialUpdatePathParams;
};
