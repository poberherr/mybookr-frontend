export type Review = {
    /**
     * @type integer | undefined
    */
    readonly id?: number;
    /**
     * @type integer
    */
    guest: number;
    /**
     * @type integer
    */
    listing: number;
    /**
     * @type integer
    */
    rating: number;
    /**
     * @type string
    */
    review_text: string;
    /**
     * @type string | undefined date-time
    */
    readonly date?: string;
};