import type { MetaData } from "./MetaData";

 export type CoreMetadataPartialUpdatePathParams = {
    /**
     * @description A unique integer value identifying this meta data.
     * @type integer
    */
    id: number;
};

 export type CoreMetadataPartialUpdate200 = MetaData;

 export type CoreMetadataPartialUpdateMutationRequest = MetaData;

 export type CoreMetadataPartialUpdateMutationResponse = MetaData;

 export type CoreMetadataPartialUpdateMutation = {
    Response: CoreMetadataPartialUpdateMutationResponse;
    Request: CoreMetadataPartialUpdateMutationRequest;
    PathParams: CoreMetadataPartialUpdatePathParams;
};