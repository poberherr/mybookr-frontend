export type Payment = {
    /**
     * @type integer | undefined
    */
    readonly id?: number;
    /**
     * @type integer
    */
    booking: number;
    /**
     * @type integer
    */
    user: number;
    /**
     * @type string | undefined date-time
    */
    readonly payment_date?: string;
    /**
     * @type string decimal
    */
    payment_amount: string;
    /**
     * @type string
    */
    payment_status: string;
};