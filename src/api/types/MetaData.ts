export type MetaData = {
    /**
     * @type string
    */
    title: string;
    /**
     * @type string
    */
    description: string;
    /**
     * @type string
    */
    property_type: string;
    /**
     * @type number | undefined
    */
    latitude?: number;
    /**
     * @type number | undefined
    */
    longitude?: number;
    /**
     * @type string
    */
    country: string;
    /**
     * @type string
    */
    city: string;
    /**
     * @type string
    */
    street: string;
    /**
     * @type string
    */
    zip: string;
};