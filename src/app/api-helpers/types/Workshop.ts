export type Workshop = {
  /**
   * @type integer | undefined
   */
  readonly id?: number;
  /**
   * @description Main theme or focus of the workshop
   * @type string | undefined
   */
  focus_area?: string;
  /**
   * @description Required skill level
   * @type string | undefined
   */
  skill_level_required?: string;
  /**
   * @description Whether materials needed for the workshop are provided
   * @type boolean | undefined
   */
  materials_provided?: boolean;
  /**
   * @description Qualifications of the instructor
   * @type string | undefined
   */
  instructor_credentials?: string;
  /**
   * @description Whether attendees receive a certification
   * @type boolean | undefined
   */
  certification_offered?: boolean;
};
