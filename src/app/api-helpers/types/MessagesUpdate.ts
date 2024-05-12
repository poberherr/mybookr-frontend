import type { Message } from "./Message";

export type MessagesUpdatePathParams = {
  /**
   * @description A unique integer value identifying this Message.
   * @type integer
   */
  id: number;
};

export type MessagesUpdate200 = Message;

export type MessagesUpdateMutationRequest = Omit<NonNullable<Message>, "id">;

export type MessagesUpdateMutationResponse = Message;

export type MessagesUpdateMutation = {
  Response: MessagesUpdateMutationResponse;
  Request: MessagesUpdateMutationRequest;
  PathParams: MessagesUpdatePathParams;
};
