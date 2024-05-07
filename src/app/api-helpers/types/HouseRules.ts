export type HouseRules = {
  /**
   * @type integer | undefined
   */
  readonly id?: number;
  /**
   * @description Check-in time.
   * @type string, date-time
   */
  check_in_time: string;
  /**
   * @description Check-out time.
   * @type string, date-time
   */
  check_out_time: string;
  /**
   * @description Whether self check-in is available.
   * @type boolean | undefined
   */
  self_check_in?: boolean;
  /**
   * @description Maximum number of guests allowed.
   * @type integer
   */
  max_guests: number;
  /**
   * @description Quiet hours start time.
   * @type string
   */
  quiet_time: string;
  /**
   * @description Cancellation policy details.
   * @type string | undefined
   */
  cancellation_policy?: string;
  /**
   * @description Rules regarding alcohol consumption.
   * @type string | undefined
   */
  alcohol_policy?: string;
  /**
   * @description Rules regarding drug consumption.
   * @type string | undefined
   */
  drug_policy?: string;
  /**
   * @description Detailed pet policy.
   * @type string | undefined
   */
  pet_policy?: string;
};
