import type { Message } from "./Message";

export type CoreMessagesPartialUpdatePathParams = {
  /**
   * @description A unique integer value identifying this Message.
   * @type integer
   */
  id: number;
};

export type CoreMessagesPartialUpdate200 = Message;

export type CoreMessagesPartialUpdateMutationRequest = Omit<
  NonNullable<Message>,
  "id"
>;

export type CoreMessagesPartialUpdateMutationResponse = Message;

export type CoreMessagesPartialUpdateMutation = {
  Response: CoreMessagesPartialUpdateMutationResponse;
  Request: CoreMessagesPartialUpdateMutationRequest;
  PathParams: CoreMessagesPartialUpdatePathParams;
};
