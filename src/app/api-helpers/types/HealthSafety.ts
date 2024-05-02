export type HealthSafety = {
  /**
   * @type integer | undefined
   */
  readonly id?: number;
  /**
   * @description Indicates if smoke detectors are installed in the property.
   * @type boolean | undefined
   */
  smoke_detectors_installed?: boolean;
  /**
   * @description Indicates if a first aid kit is available at the property.
   * @type boolean | undefined
   */
  first_aid_kit_available?: boolean;
  /**
   * @description Indicates if a fire extinguisher is available for use.
   * @type boolean | undefined
   */
  fire_extinguisher_provided?: boolean;
  /**
   * @description Indicates if emergency contact information is provided to guests.
   * @type boolean | undefined
   */
  emergency_contact_provided?: boolean;
  /**
   * @description Indicates if the property undergoes regular cleaning protocols to maintain hygiene.
   * @type boolean | undefined
   */
  regular_cleaning_protocols?: boolean;
  /**
   * @description Indicates whether measures against Covid-19 are in place.
   * @type boolean | undefined
   */
  covid_19_precautions?: boolean;
};
