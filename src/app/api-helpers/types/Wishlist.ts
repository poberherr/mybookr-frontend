export type Wishlist = {
  /**
   * @type integer | undefined
   */
  readonly id?: number;
  /**
   * @description The date and time when the listing was added to the wishlist.
   * @type string | undefined, date-time
   */
  added_on?: string;
  /**
   * @description The user who owns this wishlist.
   * @type integer
   */
  user: number;
  /**
   * @description The listing saved to the user\'s wishlist.
   * @type integer
   */
  listing: number;
};
