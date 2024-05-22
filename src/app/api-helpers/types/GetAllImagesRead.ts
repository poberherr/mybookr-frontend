import type { Image } from "./Image";

export type GetAllImagesReadPathParams = {
  /**
   * @type string
   */
  listing_id: string;
};

export type GetAllImagesRead200 = Image[];

export type GetAllImagesReadQueryResponse = Image[];

export type GetAllImagesReadQuery = {
  Response: GetAllImagesReadQueryResponse;
  PathParams: GetAllImagesReadPathParams;
};
