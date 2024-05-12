/**
 * @description Successful Login
 */
export type ApiLoginCreate200 = {
  /**
   * @description User details
   * @type object | undefined
   */
  user?: {};
  /**
   * @description Refresh token
   * @type string | undefined
   */
  refresh?: string;
  /**
   * @description Access token
   * @type string | undefined
   */
  access?: string;
};

/**
 * @description No such user
 */
export type ApiLoginCreate404 = any;

export type ApiLoginCreateMutationRequest = {
  /**
   * @description Clerk user ID
   * @type string
   */
  clerk_id: string;
};

/**
 * @description Successful Login
 */
export type ApiLoginCreateMutationResponse = {
  /**
   * @description User details
   * @type object | undefined
   */
  user?: {};
  /**
   * @description Refresh token
   * @type string | undefined
   */
  refresh?: string;
  /**
   * @description Access token
   * @type string | undefined
   */
  access?: string;
};

export type ApiLoginCreateMutation = {
  Response: ApiLoginCreateMutationResponse;
  Request: ApiLoginCreateMutationRequest;
  Errors: ApiLoginCreate404;
};
