export type CoreCreatePaymentCreate200 = {
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
export type CoreCreatePaymentCreate400 = any;

/**
 * @description Internal Server Error
 */
export type CoreCreatePaymentCreate500 = any;

export type CoreCreatePaymentCreateMutationRequest = {
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

export type CoreCreatePaymentCreateMutationResponse = {
  /**
   * @type string | undefined
   */
  client_secret?: string;
  /**
   * @type string | undefined
   */
  payment_intent_id?: string;
};

export type CoreCreatePaymentCreateMutation = {
  Response: CoreCreatePaymentCreateMutationResponse;
  Request: CoreCreatePaymentCreateMutationRequest;
  Errors: CoreCreatePaymentCreate400 | CoreCreatePaymentCreate500;
};
