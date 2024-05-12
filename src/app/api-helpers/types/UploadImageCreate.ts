import type { Image } from "./Image";

export type UploadImageCreateQueryParams = {
  /**
   * @description ID of the listing to which the image belongs
   * @type string
   */
  listing_id: string;
};

export type UploadImageCreate201 = Image;

export type UploadImageCreateMutationRequest = {
  /**
   * @description Image file to upload
   * @type string, binary
   */
  image: string;
};

export type UploadImageCreateMutationResponse = Image;

export type UploadImageCreateMutation = {
  Response: UploadImageCreateMutationResponse;
  Request: UploadImageCreateMutationRequest;
  QueryParams: UploadImageCreateQueryParams;
};
