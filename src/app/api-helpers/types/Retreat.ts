import { ScheduleItem } from "./ScheduleItem";

export type Retreat = {
  /**
   * @type integer | undefined
   */
  readonly id?: number;
  /**
   * @type array | undefined
   */
  readonly program_schedule?: ScheduleItem[];
  /**
   * @description Type of retreat (Yoga, Wellness, Spiritual, etc.)
   * @type string | undefined
   */
  retreat_type?: string;
  /**
   * @description Overall theme or focus of the retreat
   * @type string | undefined
   */
  theme?: string;
  /**
   * @description Rules regarding silence periods during the retreat
   * @type string | undefined
   */
  silence_policy?: string;
  /**
   * @description Structured dietary options available for participants
   * @type integer
   */
  dietary_options: number | null;
};
