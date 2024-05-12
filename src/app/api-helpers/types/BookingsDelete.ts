export type BookingsDeletePathParams = {
  /**
   * @description A UUID string identifying this Booking.
   * @type string, uuid
   */
  id: string;
};

export type BookingsDelete204 = any;

export type BookingsDeleteMutationResponse = any;

export type BookingsDeleteMutation = {
  Response: BookingsDeleteMutationResponse;
  PathParams: BookingsDeletePathParams;
};
