import type { Workshop } from "./Workshop";

export type CoreWorkshopsPartialUpdatePathParams = {
  /**
   * @description A unique integer value identifying this Workshop.
   * @type integer
   */
  id: number;
};

export type CoreWorkshopsPartialUpdate200 = Workshop;

export type CoreWorkshopsPartialUpdateMutationRequest = Omit<
  NonNullable<Workshop>,
  "id"
>;

export type CoreWorkshopsPartialUpdateMutationResponse = Workshop;

export type CoreWorkshopsPartialUpdateMutation = {
  Response: CoreWorkshopsPartialUpdateMutationResponse;
  Request: CoreWorkshopsPartialUpdateMutationRequest;
  PathParams: CoreWorkshopsPartialUpdatePathParams;
};
