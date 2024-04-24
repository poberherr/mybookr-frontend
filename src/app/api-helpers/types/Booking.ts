export type Booking = {
  /**
   * @type integer | undefined
   */
  readonly id?: number;
  /**
   * @type integer
   */
  guest: number;
  /**
   * @type integer
   */
  listing: number;
  /**
   * @type string date
   */
  check_in_date: string;
  /**
   * @type string date
   */
  check_out_date: string;
  /**
   * @type string decimal
   */
  total_cost: string;
  /**
   * @type string
   */
  booking_status: string;
  /**
   * @type string
   */
  special_requests: string;
};
