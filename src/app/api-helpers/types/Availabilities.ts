export type Availabilities = {
  /**
   * @type integer | undefined
   */
  readonly id?: number;
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
   * @description Start time for the availability (useful for events and activities).
   * @type string, date-time
   */
  time_start: string | null;
  /**
   * @description End time for the availability (useful for events and activities).
   * @type string, date-time
   */
  time_end: string | null;
  /**
   * @description Minimum number of nights/days required for booking (primarily for accommodations).
   * @type integer
   */
  minimum_stay: number | null;
  /**
   * @description Price per unit for the duration of the stay or event.
   * @type string, decimal
   */
  price_per_unit: string;
  /**
   * @description Identifier for the listing to which this availability pertains.
   * @type integer
   */
  listing: number;
};
