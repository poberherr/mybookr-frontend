export const bookingBookingStatus = {
  NotStarted: "NotStarted",
  DataCollected: "DataCollected",
  PendingReservation: "PendingReservation",
  ConfirmedReservation: "ConfirmedReservation",
  DeniedReservation: "DeniedReservation",
  SuccessfulPayment: "SuccessfulPayment",
  FailedPayment: "FailedPayment",
  CompletedBooking: "CompletedBooking",
} as const;
export type BookingBookingStatus =
  (typeof bookingBookingStatus)[keyof typeof bookingBookingStatus];
export type Booking = {
  /**
   * @type string | undefined, uuid
   */
  readonly id?: string;
  /**
   * @description Date and time the guest will check in.
   * @type string, date-time
   */
  check_in_date: string;
  /**
   * @description Date and time the guest will check out.
   * @type string, date-time
   */
  check_out_date: string;
  /**
   * @description Total cost of the booking.
   * @type string | undefined, decimal
   */
  total_cost?: string;
  /**
   * @description Currency for the total cost.
   * @type string | undefined
   */
  total_cost_currency?: string;
  /**
   * @description Current status of the booking.
   * @type string | undefined
   */
  booking_status?: BookingBookingStatus;
  /**
   * @description Any special requests made by the guest.
   * @type string | undefined
   */
  special_requests?: string;
  /**
   * @description Number of guests included in the booking.
   * @type integer | undefined
   */
  number_of_guests?: number;
  /**
   * @type string | undefined, date-time
   */
  readonly created_at?: string;
  /**
   * @type string | undefined, date-time
   */
  readonly updated_at?: string;
  /**
   * @description The guest who made the booking.
   * @type integer
   */
  guest_id: number;
  /**
   * @description The property that is booked.
   * @type integer
   */
  listing_id: number;
};
