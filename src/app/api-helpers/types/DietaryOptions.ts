export type DietaryOptions = {
  /**
   * @type integer | undefined
   */
  readonly id?: number;
  /**
   * @description Whether vegetarian options are available
   * @type boolean | undefined
   */
  vegetarian?: boolean;
  /**
   * @description Whether vegan options are available
   * @type boolean | undefined
   */
  vegan?: boolean;
  /**
   * @description Whether gluten-free options are available
   * @type boolean | undefined
   */
  gluten_free?: boolean;
  /**
   * @description Whether kosher options are available
   * @type boolean | undefined
   */
  kosher?: boolean;
  /**
   * @description Whether halal options are available
   * @type boolean | undefined
   */
  halal?: boolean;
  /**
   * @description Whether dairy-free options are available
   * @type boolean | undefined
   */
  no_dairy?: boolean;
  /**
   * @description Whether nut-free options are available
   * @type boolean | undefined
   */
  no_nuts?: boolean;
  /**
   * @description Whether seafood-free options are available
   * @type boolean | undefined
   */
  seafood_free?: boolean;
  /**
   * @description Whether egg-free options are available
   * @type boolean | undefined
   */
  egg_free?: boolean;
  /**
   * @description Whether soy-free options are available
   * @type boolean | undefined
   */
  soy_free?: boolean;
  /**
   * @description Whether low sugar options are available
   * @type boolean | undefined
   */
  low_sugar?: boolean;
  /**
   * @description Whether options with no added sugar are available
   * @type boolean | undefined
   */
  no_sugar_added?: boolean;
  /**
   * @description Free text field for other dietary requirements
   * @type string | undefined
   */
  other?: string;
};
