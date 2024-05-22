import type { Listing } from "./Listing";

export type FilterListingsListQueryParams = {
  /**
   * @description Filter by amenities wifi
   * @type boolean | undefined
   */
  amenities_wifi?: boolean;
  /**
   * @description Filter by amenities fast wifi
   * @type boolean | undefined
   */
  amenities_fast_wifi?: boolean;
  /**
   * @description Filter by amenities parking
   * @type boolean | undefined
   */
  amenities_parking?: boolean;
  /**
   * @description Filter by amenities pool
   * @type boolean | undefined
   */
  amenities_pool?: boolean;
  /**
   * @description Filter by amenities fitness center
   * @type boolean | undefined
   */
  amenities_fitness_center?: boolean;
  /**
   * @description Filter by amenities pet friendly
   * @type boolean | undefined
   */
  amenities_pet_friendly?: boolean;
  /**
   * @description Filter by amenities tv
   * @type boolean | undefined
   */
  amenities_tv?: boolean;
  /**
   * @description Filter by amenities kitchen
   * @type boolean | undefined
   */
  amenities_kitchen?: boolean;
  /**
   * @description Filter by amenities smoking allowed
   * @type boolean | undefined
   */
  amenities_smoking_allowed?: boolean;
  /**
   * @description Filter by amenities party allowed
   * @type boolean | undefined
   */
  amenities_party_allowed?: boolean;
  /**
   * @description Filter by amenities security cameras
   * @type boolean | undefined
   */
  amenities_security_cameras?: boolean;
  /**
   * @description Filter by space guests capacity
   * @type integer | undefined
   */
  space_guests_capacity?: number;
  /**
   * @description Filter by space bathrooms
   * @type integer | undefined
   */
  space_bathrooms?: number;
  /**
   * @description Filter by space bedrooms
   * @type integer | undefined
   */
  space_bedrooms?: number;
  /**
   * @description Filter by space double beds
   * @type integer | undefined
   */
  space_double_beds?: number;
  /**
   * @description Filter by space single beds
   * @type integer | undefined
   */
  space_single_beds?: number;
  /**
   * @description Filter by location country
   * @type string | undefined
   */
  location_country?: string;
  /**
   * @description Filter by location city
   * @type string | undefined
   */
  location_city?: string;
  /**
   * @description Filter by house rules check in time
   * @type string | undefined
   */
  house_rules_check_in_time?: string;
  /**
   * @description Filter by house rules check out time
   * @type string | undefined
   */
  house_rules_check_out_time?: string;
  /**
   * @description Filter by house rules self check in
   * @type boolean | undefined
   */
  house_rules_self_check_in?: boolean;
  /**
   * @description Filter by house rules max guests
   * @type integer | undefined
   */
  house_rules_max_guests?: number;
  /**
   * @description Filter by house rules quiet time
   * @type string | undefined
   */
  house_rules_quiet_time?: string;
  /**
   * @description Filter by house rules cancellation policy
   * @type string | undefined
   */
  house_rules_cancellation_policy?: string;
  /**
   * @description Filter by house rules alcohol policy
   * @type string | undefined
   */
  house_rules_alcohol_policy?: string;
  /**
   * @description Filter by house rules drug policy
   * @type string | undefined
   */
  house_rules_drug_policy?: string;
  /**
   * @description Filter by house rules pet policy
   * @type string | undefined
   */
  house_rules_pet_policy?: string;
  /**
   * @description Filter by health safety smoke detectors installed
   * @type boolean | undefined
   */
  health_safety_smoke_detectors_installed?: boolean;
  /**
   * @description Filter by health safety first aid kit available
   * @type boolean | undefined
   */
  health_safety_first_aid_kit_available?: boolean;
  /**
   * @description Filter by health safety fire extinguisher provided
   * @type boolean | undefined
   */
  health_safety_fire_extinguisher_provided?: boolean;
  /**
   * @description Filter by health safety emergency contact provided
   * @type boolean | undefined
   */
  health_safety_emergency_contact_provided?: boolean;
  /**
   * @description Filter by health safety regular cleaning protocols
   * @type boolean | undefined
   */
  health_safety_regular_cleaning_protocols?: boolean;
  /**
   * @description Filter by health safety covid 19 precautions
   * @type boolean | undefined
   */
  health_safety_covid_19_precautions?: boolean;
  /**
   * @description Filter by accessibility accessible entrance
   * @type boolean | undefined
   */
  accessibility_accessible_entrance?: boolean;
  /**
   * @description Filter by accessibility elevator
   * @type boolean | undefined
   */
  accessibility_elevator?: boolean;
  /**
   * @description Filter by accessibility accessible parking
   * @type boolean | undefined
   */
  accessibility_accessible_parking?: boolean;
  /**
   * @description Filter by accessibility ramp
   * @type boolean | undefined
   */
  accessibility_ramp?: boolean;
  /**
   * @description Filter by accessibility visual aid
   * @type boolean | undefined
   */
  accessibility_visual_aid?: boolean;
  /**
   * @description Filter by accessibility communication accessibility
   * @type boolean | undefined
   */
  accessibility_communication_accessibility?: boolean;
};

export type FilterListingsList200 = Listing[];

export type FilterListingsListQueryResponse = Listing[];

export type FilterListingsListQuery = {
  Response: FilterListingsListQueryResponse;
  QueryParams: FilterListingsListQueryParams;
};
