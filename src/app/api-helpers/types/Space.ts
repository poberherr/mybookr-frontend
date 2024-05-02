export type Space = {
  /**
   * @type integer | undefined
   */
  readonly id?: number;
  /**
   * @description The maximum number of guests the space can accommodate.
   * @type integer
   */
  guests_capacity: number | null;
  /**
   * @description Number of bathrooms available in the space.
   * @type integer
   */
  bathrooms: number | null;
  /**
   * @description Number of bedrooms available in the space.
   * @type integer
   */
  bedrooms: number | null;
  /**
   * @description Number of double beds available in the space.
   * @type integer
   */
  double_beds: number | null;
  /**
   * @description Number of single beds available in the space.
   * @type integer
   */
  single_beds: number | null;
};
