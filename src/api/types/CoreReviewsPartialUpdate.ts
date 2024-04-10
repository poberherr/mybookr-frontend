import type { Review } from "./Review";

 export type CoreReviewsPartialUpdatePathParams = {
    /**
     * @description A unique integer value identifying this review.
     * @type integer
    */
    id: number;
};

 export type CoreReviewsPartialUpdate200 = Review;

 export type CoreReviewsPartialUpdateMutationRequest = Omit<NonNullable<Review>, "id" | "date">;

 export type CoreReviewsPartialUpdateMutationResponse = Review;

 export type CoreReviewsPartialUpdateMutation = {
    Response: CoreReviewsPartialUpdateMutationResponse;
    Request: CoreReviewsPartialUpdateMutationRequest;
    PathParams: CoreReviewsPartialUpdatePathParams;
};