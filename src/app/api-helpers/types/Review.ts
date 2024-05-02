export type Review = {
  /**
   * @type integer | undefined
   */
  readonly id?: number;
  /**
   * @description Rating given by the guest, from 1 (worst) to 5 (best).
   * @type integer
   */
  rating: number;
  /**
   * @description Detailed textual feedback provided by the guest.
   * @type string
   */
  review_text: string;
  /**
   * @description The date and time the review was submitted.
   * @type string | undefined, date-time
   */
  date?: string;
  /**
   * @description The guest who submitted the review.
   * @type integer
   */
  guest: number;
  /**
   * @description The listing to which the review pertains.
   * @type integer
   */
  listing: number;
};
