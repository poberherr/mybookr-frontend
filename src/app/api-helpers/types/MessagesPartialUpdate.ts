import type { Message } from "./Message";

export type MessagesPartialUpdatePathParams = {
  /**
   * @description A unique integer value identifying this Message.
   * @type integer
   */
  id: number;
};

export type MessagesPartialUpdate200 = Message;

export type MessagesPartialUpdateMutationRequest = Omit<
  NonNullable<Message>,
  "id"
>;

export type MessagesPartialUpdateMutationResponse = Message;

export type MessagesPartialUpdateMutation = {
  Response: MessagesPartialUpdateMutationResponse;
  Request: MessagesPartialUpdateMutationRequest;
  PathParams: MessagesPartialUpdatePathParams;
};
