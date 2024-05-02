import type { Workshop } from "./Workshop";

export type CoreWorkshopsUpdatePathParams = {
  /**
   * @description A unique integer value identifying this Workshop.
   * @type integer
   */
  id: number;
};

export type CoreWorkshopsUpdate200 = Workshop;

export type CoreWorkshopsUpdateMutationRequest = Omit<
  NonNullable<Workshop>,
  "id"
>;

export type CoreWorkshopsUpdateMutationResponse = Workshop;

export type CoreWorkshopsUpdateMutation = {
  Response: CoreWorkshopsUpdateMutationResponse;
  Request: CoreWorkshopsUpdateMutationRequest;
  PathParams: CoreWorkshopsUpdatePathParams;
};
