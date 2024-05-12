export const customUserUserType = {
  backend: "backend",
  customer: "customer",
} as const;
export type CustomUserUserType =
  (typeof customUserUserType)[keyof typeof customUserUserType];
export type CustomUser = {
  /**
   * @type integer | undefined
   */
  readonly id?: number;
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
   * @type string | undefined
   */
  first_name?: string;
  /**
   * @type string | undefined
   */
  last_name?: string;
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
   * @type string
   */
  clerk_id: string | null;
  /**
   * @type string, uri
   */
  readonly profile_picture: string | null;
  /**
   * @type string, date
   */
  date_of_birth: string | null;
  /**
   * @type string
   */
  street_address: string | null;
  /**
   * @type string
   */
  city: string | null;
  /**
   * @type string
   */
  state: string | null;
  /**
   * @type string
   */
  country: string | null;
  /**
   * @type string
   */
  postal_code: string | null;
  /**
   * @type object
   */
  social_data: {} | null;
  /**
   * @type object
   */
  external_ids: {} | null;
  /**
   * @type string
   */
  phone_number: string | null;
  /**
   * @type string | undefined
   */
  user_type?: CustomUserUserType;
  /**
   * @type string
   */
  username: string | null;
  /**
   * @type string
   */
  password: string | null;
  /**
   * @type string, email
   */
  email: string;
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
