import type { Message } from "./Message";

 export type CoreMessagesUpdatePathParams = {
    /**
     * @description A unique integer value identifying this message.
     * @type integer
    */
    id: number;
};

 export type CoreMessagesUpdate200 = Message;

 export type CoreMessagesUpdateMutationRequest = Omit<NonNullable<Message>, "id" | "timestamp">;

 export type CoreMessagesUpdateMutationResponse = Message;

 export type CoreMessagesUpdateMutation = {
    Response: CoreMessagesUpdateMutationResponse;
    Request: CoreMessagesUpdateMutationRequest;
    PathParams: CoreMessagesUpdatePathParams;
};