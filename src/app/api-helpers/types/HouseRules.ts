export type HouseRules = {
  /**
   * @type string
   */
  check_in_time: string;
  /**
   * @type string
   */
  check_out_time: string;
  /**
   * @type boolean | undefined
   */
  self_check_in?: boolean;
  /**
   * @type integer | undefined
   */
  max_guests?: number;
  /**
   * @type string
   */
  quiet_time: string;
};
