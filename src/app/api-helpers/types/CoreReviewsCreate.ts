import type { Review } from "./Review";

export type CoreReviewsCreate201 = Review;

export type CoreReviewsCreateMutationRequest = Omit<NonNullable<Review>, "id">;

export type CoreReviewsCreateMutationResponse = Review;

export type CoreReviewsCreateMutation = {
  Response: CoreReviewsCreateMutationResponse;
  Request: CoreReviewsCreateMutationRequest;
};
