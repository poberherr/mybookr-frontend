import type { Message } from "./Message";

export type CoreMessagesCreate201 = Message;

export type CoreMessagesCreateMutationRequest = Omit<
  NonNullable<Message>,
  "id" | "timestamp"
>;

export type CoreMessagesCreateMutationResponse = Message;

export type CoreMessagesCreateMutation = {
  Response: CoreMessagesCreateMutationResponse;
  Request: CoreMessagesCreateMutationRequest;
};
