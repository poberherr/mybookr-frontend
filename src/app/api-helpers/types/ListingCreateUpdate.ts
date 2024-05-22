import type { Accessibility } from "./Accessibility";
import type { Amenity } from "./Amenity";
import type { HealthSafety } from "./HealthSafety";
import type { HouseRules } from "./HouseRules";
import type { Location } from "./Location";
import type { Space } from "./Space";

export type ListingCreateUpdate = {
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
  amenities: Amenity;
  space: Space;
  location: Location;
  house_rules?: HouseRules;
  health_safety?: HealthSafety;
  accessibility?: Accessibility;
  /**
   * @description The user who is listing the property.
   * @type integer
   */
  host: number;
};
