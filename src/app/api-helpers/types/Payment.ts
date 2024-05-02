export const paymentPaymentStatus = {
  Unconfirmed: "Unconfirmed",
  Charged: "Charged",
  Collected: "Collected",
} as const;
export type PaymentPaymentStatus =
  (typeof paymentPaymentStatus)[keyof typeof paymentPaymentStatus];
export type Payment = {
  /**
   * @type string | undefined, uuid
   */
  readonly id?: string;
  /**
   * @description Date and time when the payment was processed.
   * @type string | undefined, date-time
   */
  payment_date?: string;
  /**
   * @description Amount that was paid.
   * @type string | undefined, decimal
   */
  payment_amount?: string;
  /**
   * @description Current status of the payment.
   * @type string | undefined
   */
  payment_status?: PaymentPaymentStatus;
  /**
   * @description Stripe\'s unique identifier for the payment.
   * @type string
   */
  stripe_payment_id: string | null;
  /**
   * @description Detailed items that sum up to the total payment.
   * @type object
   */
  line_items: {} | null;
  /**
   * @description Currency in which the payment was made.
   * @type string | undefined
   */
  currency?: string;
  /**
   * @description Identifier for the associated booking.
   * @type string, uuid
   */
  booking_id: string;
  /**
   * @description Identifier for the user making the payment.
   * @type integer
   */
  user_id: number;
};
