import type { Review } from "./Review";

 export type CoreReviewsUpdatePathParams = {
    /**
     * @description A unique integer value identifying this review.
     * @type integer
    */
    id: number;
};

 export type CoreReviewsUpdate200 = Review;

 export type CoreReviewsUpdateMutationRequest = Omit<NonNullable<Review>, "id" | "date">;

 export type CoreReviewsUpdateMutationResponse = Review;

 export type CoreReviewsUpdateMutation = {
    Response: CoreReviewsUpdateMutationResponse;
    Request: CoreReviewsUpdateMutationRequest;
    PathParams: CoreReviewsUpdatePathParams;
};