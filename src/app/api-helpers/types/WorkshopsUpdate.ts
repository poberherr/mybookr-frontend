import type { Workshop } from "./Workshop";

export type WorkshopsUpdatePathParams = {
  /**
   * @description A unique integer value identifying this Workshop.
   * @type integer
   */
  id: number;
};

export type WorkshopsUpdate200 = Workshop;

export type WorkshopsUpdateMutationRequest = Omit<NonNullable<Workshop>, "id">;

export type WorkshopsUpdateMutationResponse = Workshop;

export type WorkshopsUpdateMutation = {
  Response: WorkshopsUpdateMutationResponse;
  Request: WorkshopsUpdateMutationRequest;
  PathParams: WorkshopsUpdatePathParams;
};
