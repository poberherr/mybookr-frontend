export type Message = {
    /**
     * @type integer | undefined
    */
    readonly id?: number;
    /**
     * @type integer
    */
    sender: number;
    /**
     * @type integer
    */
    receiver: number;
    /**
     * @type integer
    */
    listing: number;
    /**
     * @type string
    */
    message_text: string;
    /**
     * @type string | undefined date-time
    */
    readonly timestamp?: string;
    /**
     * @type boolean | undefined
    */
    read_status?: boolean;
};