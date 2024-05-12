export type PaymentsDeletePathParams = {
  /**
   * @description A UUID string identifying this Payment.
   * @type string, uuid
   */
  id: string;
};

export type PaymentsDelete204 = any;

export type PaymentsDeleteMutationResponse = any;

export type PaymentsDeleteMutation = {
  Response: PaymentsDeleteMutationResponse;
  PathParams: PaymentsDeletePathParams;
};
