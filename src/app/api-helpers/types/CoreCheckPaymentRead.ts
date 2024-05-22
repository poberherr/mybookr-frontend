export type CoreCheckPaymentReadPathParams = {
  /**
   * @description Stripe Payment Intent ID
   * @type string
   */
  payment_intent_id: string;
};

export type CoreCheckPaymentRead200 = any;

export type CoreCheckPaymentReadQueryResponse = any;

export type CoreCheckPaymentReadQuery = {
  Response: CoreCheckPaymentReadQueryResponse;
  PathParams: CoreCheckPaymentReadPathParams;
};
