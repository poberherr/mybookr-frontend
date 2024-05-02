export type TouristActivities = {
  /**
   * @type integer | undefined
   */
  readonly id?: number;
  /**
   * @description Type of activity (outdoor, adventure, cultural, etc.)
   * @type string | undefined
   */
  activity_type?: string;
  /**
   * @description Difficulty level of the activity
   * @type string | undefined
   */
  difficulty_level?: string;
  /**
   * @description Whether necessary equipment is provided
   * @type boolean | undefined
   */
  equipment_provided?: boolean;
  /**
   * @description Whether the activity includes a professional guide
   * @type boolean | undefined
   */
  guide_available?: boolean;
  /**
   * @description Minimum age required to participate
   * @type integer
   */
  minimum_age: number | null;
  /**
   * @description Whether the activity is dependent on weather conditions
   * @type boolean | undefined
   */
  weather_dependent?: boolean;
};
