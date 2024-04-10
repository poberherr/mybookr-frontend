import { Amenity } from "./Amenity";
import { HouseRules } from "./HouseRules";
import { HealthSafety } from "./HealthSafety";
import { Accessibility } from "./Accessibility";
import { Space } from "./Space";
import { MetaData } from "./MetaData";

 export type Listing = {
    /**
     * @type integer | undefined
    */
    readonly id?: number;
    /**
     * @type integer
    */
    host: number;
    /**
     * @type string decimal
    */
    price_per_night: string;
    /**
     * @type boolean | undefined
    */
    free_cancellation?: boolean;
    /**
     * @type array | undefined
    */
    images?: string[];
    /**
     * @type array | undefined
    */
    reserved_dates?: string[];
    /**
     * @type array | undefined
    */
    boost_dates?: string[];
    amenities: Amenity;
    house_rules: HouseRules;
    health_safety: HealthSafety;
    accessibility: Accessibility;
    space: Space;
    meta: MetaData;
};