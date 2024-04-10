import type { Review } from "./Review";

 export type CoreReviewsReadPathParams = {
    /**
     * @description A unique integer value identifying this review.
     * @type integer
    */
    id: number;
};

 export type CoreReviewsRead200 = Review;

 export type CoreReviewsReadQueryResponse = Review;

 export type CoreReviewsReadQuery = {
    Response: CoreReviewsReadQueryResponse;
    PathParams: CoreReviewsReadPathParams;
};