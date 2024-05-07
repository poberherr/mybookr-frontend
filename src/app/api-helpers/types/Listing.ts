import { Accessibility } from "./Accessibility";
import { Amenity } from "./Amenity";
import { Availabilities } from "./Availabilities";
import { HealthSafety } from "./HealthSafety";
import { HouseRules } from "./HouseRules";
import { Image } from "./Image";
import { Location } from "./Location";
import { Space } from "./Space";

export type Listing = {
  /**
   * @type integer | undefined
   */
  readonly id?: number;
  amenities: Amenity;
  space: Space;
  location: Location;
  house_rules: HouseRules;
  health_safety: HealthSafety;
  accessibility: Accessibility;
  /**
   * @type array | undefined
   */
  readonly availabilities?: Availabilities[];
  /**
   * @type array | undefined
   */
  readonly images?: Image[];
  /**
   * @description Title of the listing
   * @type string
   */
  title: string | null;
  /**
   * @description Detailed description of the listing
   * @type string
   */
  description: string | null;
  /**
   * @description Type of property (e.g., Apartment, House, Cottage)
   * @type string | undefined
   */
  property_type?: string;
  /**
   * @description Additional information about the listing
   * @type string | undefined
   */
  extra?: string;
  /**
   * @description The user who is listing the property.
   * @type integer
   */
  host: number;
};
