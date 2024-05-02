export type CustomUser = {
  /**
   * @type integer | undefined
   */
  readonly id?: number;
  /**
   * @type string
   */
  password: string;
  /**
   * @type string, date-time
   */
  last_login: string | null;
  /**
   * @description Designates that this user has all permissions without explicitly assigning them.
   * @type boolean | undefined
   */
  is_superuser?: boolean;
  /**
   * @description Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.
   * @type string
   */
  username: string;
  /**
   * @type string | undefined
   */
  first_name?: string;
  /**
   * @type string | undefined
   */
  last_name?: string;
  /**
   * @type string | undefined, email
   */
  email?: string;
  /**
   * @description Designates whether the user can log into this admin site.
   * @type boolean | undefined
   */
  is_staff?: boolean;
  /**
   * @description Designates whether this user should be treated as active. Unselect this instead of deleting accounts.
   * @type boolean | undefined
   */
  is_active?: boolean;
  /**
   * @type string | undefined, date-time
   */
  date_joined?: string;
  /**
   * @description Unique identifier from Clerk for the user.
   * @type string
   */
  clerk_id: string | null;
  /**
   * @description URL to the user\'s profile picture.
   * @type string, uri
   */
  readonly profile_picture: string | null;
  /**
   * @description User\'s date of birth.
   * @type string, date
   */
  date_of_birth: string | null;
  /**
   * @description Street address of the user.
   * @type string
   */
  street_address: string | null;
  /**
   * @description City where the user lives.
   * @type string
   */
  city: string | null;
  /**
   * @description State where the user lives.
   * @type string
   */
  state: string | null;
  /**
   * @description Country where the user lives.
   * @type string
   */
  country: string | null;
  /**
   * @description Postal code of the user\'s address.
   * @type string
   */
  postal_code: string | null;
  /**
   * @description JSON containing social media profiles and other social data.
   * @type object
   */
  social_data: {} | null;
  /**
   * @description JSON containing IDs from external systems for the user.
   * @type object
   */
  external_ids: {} | null;
  /**
   * @description User\'s phone number in international format.
   * @type string
   */
  phone_number: string | null;
  /**
   * @description The groups this user belongs to. A user will get all permissions granted to each of their groups.
   * @type array | undefined
   */
  groups?: number[];
  /**
   * @description Specific permissions for this user.
   * @type array | undefined
   */
  user_permissions?: number[];
};
