export type Location = {
  /**
   * @type integer | undefined
   */
  readonly id?: number;
  /**
   * @description Latitude coordinate of the location.
   * @type number
   */
  latitude: number | null;
  /**
   * @description Longitude coordinate of the location.
   * @type number
   */
  longitude: number | null;
  /**
   * @description Country where the listing is located.
   * @type string
   */
  country: string | null;
  /**
   * @description City where the listing is located.
   * @type string
   */
  city: string | null;
  /**
   * @description Street address of the listing.
   * @type string
   */
  street: string | null;
  /**
   * @description ZIP or postal code of the listing.
   * @type string
   */
  zip: string | null;
};
