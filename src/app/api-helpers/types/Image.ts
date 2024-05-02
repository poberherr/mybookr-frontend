export type Image = {
  /**
   * @type integer | undefined
   */
  readonly id?: number;
  /**
   * @type integer
   */
  listing: number;
  /**
   * @type string | undefined, uri
   */
  readonly image?: string;
  /**
   * @type string | undefined, date-time
   */
  readonly uploaded_at?: string;
};
