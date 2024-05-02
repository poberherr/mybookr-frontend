export type ScheduleItem = {
  /**
   * @type string | undefined, uuid
   */
  readonly id?: string;
  /**
   * @description Start date and time for the activity
   * @type string, date-time
   */
  date_start: string;
  /**
   * @description End date and time for the activity, same or later than date_start
   * @type string, date-time
   */
  date_end: string;
  /**
   * @description Title of the schedule item
   * @type string | undefined
   */
  title?: string;
  /**
   * @description Detailed description of the activity
   * @type string | undefined
   */
  description?: string;
};
