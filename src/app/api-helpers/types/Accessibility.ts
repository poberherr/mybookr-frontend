export type Accessibility = {
  /**
   * @type integer | undefined
   */
  readonly id?: number;
  /**
   * @description Indicates if the property has an accessible entrance.
   * @type boolean | undefined
   */
  accessible_entrance?: boolean;
  /**
   * @description Indicates if the property is equipped with an elevator.
   * @type boolean | undefined
   */
  elevator?: boolean;
  /**
   * @description Indicates if the property offers accessible parking spaces.
   * @type boolean | undefined
   */
  accessible_parking?: boolean;
  /**
   * @description Indicates if the property has a ramp for wheelchair access.
   * @type boolean | undefined
   */
  ramp?: boolean;
  /**
   * @description Indicates if visual aids like Braille are available at the property.
   * @type boolean | undefined
   */
  visual_aid?: boolean;
  /**
   * @description Indicates if communication aids like sign language interpreters or accessible formats are available.
   * @type boolean | undefined
   */
  communication_accessibility?: boolean;
};
