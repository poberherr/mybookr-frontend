export type ListingsAvailabilitiesDeletePathParams = {
  /**
   * @type string
   */
  listing_pk: string;
  /**
   * @description A unique integer value identifying this Availability.
   * @type integer
   */
  id: number;
};

export type ListingsAvailabilitiesDelete204 = any;

export type ListingsAvailabilitiesDeleteMutationResponse = any;

export type ListingsAvailabilitiesDeleteMutation = {
  Response: ListingsAvailabilitiesDeleteMutationResponse;
  PathParams: ListingsAvailabilitiesDeletePathParams;
};
