import type { MetaData } from "./MetaData";

export type CoreMetadataUpdatePathParams = {
  /**
   * @description A unique integer value identifying this meta data.
   * @type integer
   */
  id: number;
};

export type CoreMetadataUpdate200 = MetaData;

export type CoreMetadataUpdateMutationRequest = MetaData;

export type CoreMetadataUpdateMutationResponse = MetaData;

export type CoreMetadataUpdateMutation = {
  Response: CoreMetadataUpdateMutationResponse;
  Request: CoreMetadataUpdateMutationRequest;
  PathParams: CoreMetadataUpdatePathParams;
};
