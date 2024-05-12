export type CreatePaymentCreate200 = {
  /**
   * @type string | undefined
   */
  client_secret?: string;
  /**
   * @type string | undefined
   */
  payment_intent_id?: string;
};

/**
 * @description Bad Request
 */
export type CreatePaymentCreate400 = any;

/**
 * @description Internal Server Error
 */
export type CreatePaymentCreate500 = any;

export type CreatePaymentCreateMutationRequest = {
  /**
   * @type integer
   */
  amount: number;
  /**
   * @default "usd"
   * @type string | undefined
   */
  currency?: string;
  /**
   * @description ID of the booking
   * @type integer
   */
  booking_id: number;
};

export type CreatePaymentCreateMutationResponse = {
  /**
   * @type string | undefined
   */
  client_secret?: string;
  /**
   * @type string | undefined
   */
  payment_intent_id?: string;
};

export type CreatePaymentCreateMutation = {
  Response: CreatePaymentCreateMutationResponse;
  Request: CreatePaymentCreateMutationRequest;
  Errors: CreatePaymentCreate400 | CreatePaymentCreate500;
};
