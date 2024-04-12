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
   * @type string date-time
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
   * @type string | undefined email
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
   * @type string | undefined date-time
   */
  date_joined?: string;
  /**
   * @type string uri
   */
  readonly profile_picture: string | null;
  /**
   * @type string date
   */
  date_of_birth: string | null;
  /**
   * @type array | undefined
   */
  address?: string[];
  /**
   * @type object
   */
  social_data: {} | null;
  /**
   * @type object
   */
  external_ids: {} | null;
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
