export type Message = {
  /**
   * @type integer | undefined
   */
  readonly id?: number;
  /**
   * @description The content of the message.
   * @type string
   */
  content: string | null;
  /**
   * @description The date and time the message was sent.
   * @type string | undefined, date-time
   */
  timestamp?: string;
  /**
   * @description Indicates whether the message has been read by the receiver.
   * @type boolean | undefined
   */
  read_status?: boolean;
  /**
   * @description The user who sent the message.
   * @type integer
   */
  sender: number;
  /**
   * @description The user who received the message.
   * @type integer
   */
  receiver: number;
  /**
   * @description The property listing related to the message.
   * @type integer
   */
  listing: number | null;
};
