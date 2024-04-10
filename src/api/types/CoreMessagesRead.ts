import type { Message } from "./Message";

 export type CoreMessagesReadPathParams = {
    /**
     * @description A unique integer value identifying this message.
     * @type integer
    */
    id: number;
};

 export type CoreMessagesRead200 = Message;

 export type CoreMessagesReadQueryResponse = Message;

 export type CoreMessagesReadQuery = {
    Response: CoreMessagesReadQueryResponse;
    PathParams: CoreMessagesReadPathParams;
};