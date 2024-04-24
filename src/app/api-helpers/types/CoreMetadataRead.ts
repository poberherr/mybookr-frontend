import type { MetaData } from "./MetaData";

export type CoreMetadataReadPathParams = {
  /**
   * @description A unique integer value identifying this meta data.
   * @type integer
   */
  id: number;
};

export type CoreMetadataRead200 = MetaData;

export type CoreMetadataReadQueryResponse = MetaData;

export type CoreMetadataReadQuery = {
  Response: CoreMetadataReadQueryResponse;
  PathParams: CoreMetadataReadPathParams;
};
