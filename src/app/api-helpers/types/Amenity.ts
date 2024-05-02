export type Amenity = {
  /**
   * @type integer | undefined
   */
  readonly id?: number;
  /**
   * @description Whether the property has WiFi.
   * @type boolean | undefined
   */
  wifi?: boolean;
  /**
   * @description Whether fast WiFi is available.
   * @type boolean | undefined
   */
  fast_wifi?: boolean;
  /**
   * @description Whether the property has parking available.
   * @type boolean | undefined
   */
  parking?: boolean;
  /**
   * @description Whether the property has a pool.
   * @type boolean | undefined
   */
  pool?: boolean;
  /**
   * @description Whether the property has a fitness center.
   * @type boolean | undefined
   */
  fitness_center?: boolean;
  /**
   * @description Whether the property is pet-friendly.
   * @type boolean | undefined
   */
  pet_friendly?: boolean;
  /**
   * @description Whether the property has TV available.
   * @type boolean | undefined
   */
  tv?: boolean;
  /**
   * @description Whether the property has a kitchen.
   * @type boolean | undefined
   */
  kitchen?: boolean;
  /**
   * @description Whether smoking is allowed in the property.
   * @type boolean | undefined
   */
  smoking_allowed?: boolean;
  /**
   * @description Whether parties are allowed in the property.
   * @type boolean | undefined
   */
  party_allowed?: boolean;
  /**
   * @description Whether the property has security cameras.
   * @type boolean | undefined
   */
  security_cameras?: boolean;
};
