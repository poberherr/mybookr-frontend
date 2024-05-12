/**
 * @description User already exists, logged in instead
 */
export type ApiSignupCreate200 = any;

/**
 * @description Successful Sign Up
 */
export type ApiSignupCreate201 = any;

export type ApiSignupCreateMutationRequest = {
  /**
   * @description Clerk user ID
   * @type string
   */
  clerk_id: string;
  /**
   * @description User email address
   * @type string
   */
  email: string;
};

export type ApiSignupCreateMutationResponse = any;

export type ApiSignupCreateMutation = {
  Response: ApiSignupCreateMutationResponse;
  Request: ApiSignupCreateMutationRequest;
};
