import type { Message } from "./Message";

export type MessagesReadPathParams = {
  /**
   * @description A unique integer value identifying this Message.
   * @type integer
   */
  id: number;
};

export type MessagesRead200 = Message;

export type MessagesReadQueryResponse = Message;

export type MessagesReadQuery = {
  Response: MessagesReadQueryResponse;
  PathParams: MessagesReadPathParams;
};
