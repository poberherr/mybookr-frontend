export type Availabilities = {
  /**
   * @type integer | undefined
   */
  readonly id?: number;
  /**
   * @type number, decimal
   */
  price_per_unit: number;
  /**
   * @type integer
   */
  listing_id: number;
  /**
   * @description Specific date for which the listing is available.
   * @type string, date
   */
  date_available: string;
  /**
   * @description Number of identical units available (e.g., rooms, tickets).
   * @type integer | undefined
   */
  number_available?: number;
  /**
   * @description Start time for the availability (optional).
   * @type string, date-time
   */
  time_start: string | null;
  /**
   * @description End time for the availability (optional).
   * @type string, date-time
   */
  time_end: string | null;
  /**
   * @description Minimum number of nights/days required for booking (primarily for accommodations).
   * @type integer
   */
  minimum_stay: number | null;
};
