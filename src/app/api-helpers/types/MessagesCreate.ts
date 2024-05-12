import type { Message } from "./Message";

export type MessagesCreate201 = Message;

export type MessagesCreateMutationRequest = Omit<NonNullable<Message>, "id">;

export type MessagesCreateMutationResponse = Message;

export type MessagesCreateMutation = {
  Response: MessagesCreateMutationResponse;
  Request: MessagesCreateMutationRequest;
};
