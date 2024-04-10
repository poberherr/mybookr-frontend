import type { Space } from "./Space";

 export type CoreSpacesPartialUpdatePathParams = {
    /**
     * @description A unique integer value identifying this space.
     * @type integer
    */
    id: number;
};

 export type CoreSpacesPartialUpdate200 = Space;

 export type CoreSpacesPartialUpdateMutationRequest = Space;

 export type CoreSpacesPartialUpdateMutationResponse = Space;

 export type CoreSpacesPartialUpdateMutation = {
    Response: CoreSpacesPartialUpdateMutationResponse;
    Request: CoreSpacesPartialUpdateMutationRequest;
    PathParams: CoreSpacesPartialUpdatePathParams;
};