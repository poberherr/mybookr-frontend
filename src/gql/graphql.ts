/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: { input: any; output: any; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.This scalar is serialized to a string in ISO 8601 format and parsed from a string in ISO 8601 format. */
  DateTimeISO: { input: any; output: any; }
  File: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
};

export type Activity = {
  __typename?: 'Activity';
  availabilities?: Maybe<Array<Availability>>;
  description?: Maybe<Scalars['String']['output']>;
  experience?: Maybe<Experience>;
  id: Scalars['ID']['output'];
  medias?: Maybe<Array<Media>>;
  title: Scalars['String']['output'];
};

export type Availability = {
  __typename?: 'Availability';
  activity?: Maybe<Activity>;
  dateAvailable: Scalars['Date']['output'];
  id: Scalars['ID']['output'];
  pricePerUnit: Scalars['Float']['output'];
  slotsAvailable: Scalars['Int']['output'];
  timeEnd?: Maybe<Time>;
  timeStart: Time;
};

export type Booking = {
  __typename?: 'Booking';
  activity?: Maybe<Activity>;
  availability?: Maybe<Availability>;
  booker?: Maybe<User>;
  currency?: Maybe<Scalars['String']['output']>;
  customerComment?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  numberOfSlots: Scalars['Int']['output'];
  status: BookingStatus;
  totalCost?: Maybe<Scalars['Float']['output']>;
};

export type BookingResultType = {
  __typename?: 'BookingResultType';
  bookingFlowToken: Scalars['String']['output'];
  paymentClientSecret: Scalars['String']['output'];
  paymentIntentId: Scalars['String']['output'];
};

export enum BookingStatus {
  BookingCancelled = 'BOOKING_CANCELLED',
  BookingConfirmed = 'BOOKING_CONFIRMED',
  DataCollected = 'DATA_COLLECTED',
  PaymentFailed = 'PAYMENT_FAILED',
  PaymentFinished = 'PAYMENT_FINISHED',
  PaymentStarted = 'PAYMENT_STARTED',
  Started = 'STARTED'
}

export type CreateBooking = {
  activityId: Scalars['ID']['input'];
  availabilityId: Scalars['ID']['input'];
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  numberOfSlots: Scalars['Int']['input'];
};

export type CreateExperience = {
  description?: InputMaybe<Scalars['String']['input']>;
  location: LocationInput;
  medias: Array<Scalars['File']['input']>;
  operatorUser?: InputMaybe<UserInput>;
  title: Scalars['String']['input'];
};

export type Experience = {
  __typename?: 'Experience';
  activities: Array<Activity>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  location: Location;
  medias?: Maybe<Array<Media>>;
  operator: User;
  title: Scalars['String']['output'];
};

export type Location = {
  __typename?: 'Location';
  addressLineOne?: Maybe<Scalars['String']['output']>;
  addressLineTwo?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  federalState?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  latitude?: Maybe<Scalars['Float']['output']>;
  longitude?: Maybe<Scalars['Float']['output']>;
  postalCode?: Maybe<Scalars['String']['output']>;
};

export type LocationInput = {
  id: Scalars['ID']['input'];
};

export type Media = {
  __typename?: 'Media';
  aspectRatio: Scalars['Float']['output'];
  height: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  mediaType: MediaType;
  title: Scalars['String']['output'];
  url: Scalars['String']['output'];
  width: Scalars['Int']['output'];
};

export enum MediaType {
  Image = 'IMAGE',
  Video = 'VIDEO'
}

export type Mutation = {
  __typename?: 'Mutation';
  checkBookingStatus: Scalars['String']['output'];
  createBooking: BookingResultType;
  createExperience: Experience;
  updateBooking: BookingResultType;
  updateExperience: Experience;
};


export type MutationCheckBookingStatusArgs = {
  bookingFlowToken: Scalars['String']['input'];
};


export type MutationCreateBookingArgs = {
  data: CreateBooking;
};


export type MutationCreateExperienceArgs = {
  data: CreateExperience;
};


export type MutationUpdateBookingArgs = {
  data: UpdateBooking;
};


export type MutationUpdateExperienceArgs = {
  data: UpdateExperience;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type Payment = {
  __typename?: 'Payment';
  amount: Scalars['Float']['output'];
  booking?: Maybe<Booking>;
  currency: Scalars['String']['output'];
  date: Scalars['Date']['output'];
  externalPaymentId: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  metadata: Scalars['JSON']['output'];
  paymentProvider: PaymentProvider;
  status: PaymentStatus;
};

export enum PaymentProvider {
  Midtrans = 'MIDTRANS',
  Stripe = 'STRIPE'
}

export enum PaymentStatus {
  Canceled = 'CANCELED',
  Processing = 'PROCESSING',
  RequiresAction = 'REQUIRES_ACTION',
  RequiresCapture = 'REQUIRES_CAPTURE',
  RequiresConfirmation = 'REQUIRES_CONFIRMATION',
  RequiresPaymentMethod = 'REQUIRES_PAYMENT_METHOD',
  Succeeded = 'SUCCEEDED'
}

export type Query = {
  __typename?: 'Query';
  activities: QueryActivitiesConnection;
  activity?: Maybe<Activity>;
  availabilities: QueryAvailabilitiesConnection;
  availability?: Maybe<Availability>;
  booking?: Maybe<Booking>;
  bookings: QueryBookingsConnection;
  experience?: Maybe<Experience>;
  experiences: QueryExperiencesConnection;
  me?: Maybe<User>;
  media?: Maybe<Media>;
  medias: QueryMediasConnection;
  payment?: Maybe<Payment>;
  payments: QueryPaymentsConnection;
  users: QueryUsersConnection;
};


export type QueryActivitiesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryActivityArgs = {
  id: Scalars['ID']['input'];
};


export type QueryAvailabilitiesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryAvailabilityArgs = {
  id: Scalars['ID']['input'];
};


export type QueryBookingArgs = {
  id: Scalars['ID']['input'];
};


export type QueryBookingsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryExperienceArgs = {
  id: Scalars['ID']['input'];
};


export type QueryExperiencesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateEnd?: InputMaybe<Scalars['Date']['input']>;
  dateStart?: InputMaybe<Scalars['Date']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryMediaArgs = {
  id: Scalars['ID']['input'];
};


export type QueryMediasArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryPaymentArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPaymentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryUsersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryActivitiesConnection = {
  __typename?: 'QueryActivitiesConnection';
  edges: Array<Maybe<QueryActivitiesConnectionEdge>>;
  pageInfo: PageInfo;
};

export type QueryActivitiesConnectionEdge = {
  __typename?: 'QueryActivitiesConnectionEdge';
  cursor: Scalars['String']['output'];
  node: Activity;
};

export type QueryAvailabilitiesConnection = {
  __typename?: 'QueryAvailabilitiesConnection';
  edges: Array<Maybe<QueryAvailabilitiesConnectionEdge>>;
  pageInfo: PageInfo;
};

export type QueryAvailabilitiesConnectionEdge = {
  __typename?: 'QueryAvailabilitiesConnectionEdge';
  cursor: Scalars['String']['output'];
  node: Availability;
};

export type QueryBookingsConnection = {
  __typename?: 'QueryBookingsConnection';
  edges: Array<Maybe<QueryBookingsConnectionEdge>>;
  pageInfo: PageInfo;
};

export type QueryBookingsConnectionEdge = {
  __typename?: 'QueryBookingsConnectionEdge';
  cursor: Scalars['String']['output'];
  node: Booking;
};

export type QueryExperiencesConnection = {
  __typename?: 'QueryExperiencesConnection';
  edges: Array<Maybe<QueryExperiencesConnectionEdge>>;
  pageInfo: PageInfo;
};

export type QueryExperiencesConnectionEdge = {
  __typename?: 'QueryExperiencesConnectionEdge';
  cursor: Scalars['String']['output'];
  node: Experience;
};

export type QueryMediasConnection = {
  __typename?: 'QueryMediasConnection';
  edges: Array<Maybe<QueryMediasConnectionEdge>>;
  pageInfo: PageInfo;
};

export type QueryMediasConnectionEdge = {
  __typename?: 'QueryMediasConnectionEdge';
  cursor: Scalars['String']['output'];
  node: Media;
};

export type QueryPaymentsConnection = {
  __typename?: 'QueryPaymentsConnection';
  edges: Array<Maybe<QueryPaymentsConnectionEdge>>;
  pageInfo: PageInfo;
};

export type QueryPaymentsConnectionEdge = {
  __typename?: 'QueryPaymentsConnectionEdge';
  cursor: Scalars['String']['output'];
  node: Payment;
};

export type QueryUsersConnection = {
  __typename?: 'QueryUsersConnection';
  edges: Array<Maybe<QueryUsersConnectionEdge>>;
  pageInfo: PageInfo;
};

export type QueryUsersConnectionEdge = {
  __typename?: 'QueryUsersConnectionEdge';
  cursor: Scalars['String']['output'];
  node: User;
};

export type Time = {
  __typename?: 'Time';
  hour: Scalars['Int']['output'];
  minute: Scalars['Int']['output'];
};

export type TimeInput = {
  hour: Scalars['Int']['input'];
  minute: Scalars['Int']['input'];
};

export type UpdateBooking = {
  availabilityId: Scalars['ID']['input'];
  bookingFlowToken: Scalars['String']['input'];
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  numberOfSlots: Scalars['Int']['input'];
};

export type UpdateExperience = {
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  location?: InputMaybe<LocationInput>;
  medias?: InputMaybe<Array<Scalars['File']['input']>>;
  operatorUser?: InputMaybe<UserInput>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  role: Scalars['String']['output'];
};

export type UserInput = {
  id: Scalars['ID']['input'];
};

export type ConfirmationEmailQueryQueryVariables = Exact<{
  experienceId: Scalars['ID']['input'];
}>;


export type ConfirmationEmailQueryQuery = { __typename?: 'Query', experience?: (
    { __typename?: 'Experience' }
    & { ' $fragmentRefs'?: { 'ExperienceItem': ExperienceItem } }
  ) | null };

export type ExperienceItem = { __typename?: 'Experience', id: string, title: string, description?: string | null, medias?: Array<{ __typename?: 'Media', url: string }> | null, location: { __typename?: 'Location', addressLineOne?: string | null, addressLineTwo?: string | null, city?: string | null, country?: string | null, federalState?: string | null, postalCode?: string | null, longitude?: number | null, latitude?: number | null }, activities: Array<{ __typename?: 'Activity', id: string, title: string, availabilities?: Array<{ __typename?: 'Availability', id: string, dateAvailable: any, pricePerUnit: number }> | null, medias?: Array<{ __typename?: 'Media', url: string }> | null }> } & { ' $fragmentName'?: 'ExperienceItem' };

export type CheckoutQueryQueryVariables = Exact<{
  experienceId: Scalars['ID']['input'];
}>;


export type CheckoutQueryQuery = { __typename?: 'Query', experience?: (
    { __typename?: 'Experience' }
    & { ' $fragmentRefs'?: { 'ExperienceItem': ExperienceItem } }
  ) | null };

export type ExperienceQueryQueryVariables = Exact<{
  experienceId: Scalars['ID']['input'];
}>;


export type ExperienceQueryQuery = { __typename?: 'Query', experience?: (
    { __typename?: 'Experience' }
    & { ' $fragmentRefs'?: { 'ExperienceItem': ExperienceItem } }
  ) | null };

export type ExperiencesQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type ExperiencesQueryQuery = { __typename?: 'Query', experiences: { __typename?: 'QueryExperiencesConnection', edges: Array<{ __typename?: 'QueryExperiencesConnectionEdge', node: (
        { __typename?: 'Experience' }
        & { ' $fragmentRefs'?: { 'ExperienceItem': ExperienceItem } }
      ) } | null> } };

export const ExperienceItemDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ExperienceItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Experience"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"medias"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"location"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addressLineOne"}},{"kind":"Field","name":{"kind":"Name","value":"addressLineTwo"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"federalState"}},{"kind":"Field","name":{"kind":"Name","value":"postalCode"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}}]}},{"kind":"Field","name":{"kind":"Name","value":"activities"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"availabilities"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"dateAvailable"}},{"kind":"Field","name":{"kind":"Name","value":"pricePerUnit"}}]}},{"kind":"Field","name":{"kind":"Name","value":"medias"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]} as unknown as DocumentNode<ExperienceItem, unknown>;
export const ConfirmationEmailQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ConfirmationEmailQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"experienceId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"experience"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"experienceId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ExperienceItem"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ExperienceItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Experience"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"medias"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"location"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addressLineOne"}},{"kind":"Field","name":{"kind":"Name","value":"addressLineTwo"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"federalState"}},{"kind":"Field","name":{"kind":"Name","value":"postalCode"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}}]}},{"kind":"Field","name":{"kind":"Name","value":"activities"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"availabilities"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"dateAvailable"}},{"kind":"Field","name":{"kind":"Name","value":"pricePerUnit"}}]}},{"kind":"Field","name":{"kind":"Name","value":"medias"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]} as unknown as DocumentNode<ConfirmationEmailQueryQuery, ConfirmationEmailQueryQueryVariables>;
export const CheckoutQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CheckoutQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"experienceId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"experience"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"experienceId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ExperienceItem"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ExperienceItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Experience"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"medias"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"location"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addressLineOne"}},{"kind":"Field","name":{"kind":"Name","value":"addressLineTwo"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"federalState"}},{"kind":"Field","name":{"kind":"Name","value":"postalCode"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}}]}},{"kind":"Field","name":{"kind":"Name","value":"activities"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"availabilities"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"dateAvailable"}},{"kind":"Field","name":{"kind":"Name","value":"pricePerUnit"}}]}},{"kind":"Field","name":{"kind":"Name","value":"medias"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]} as unknown as DocumentNode<CheckoutQueryQuery, CheckoutQueryQueryVariables>;
export const ExperienceQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ExperienceQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"experienceId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"experience"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"experienceId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ExperienceItem"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ExperienceItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Experience"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"medias"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"location"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addressLineOne"}},{"kind":"Field","name":{"kind":"Name","value":"addressLineTwo"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"federalState"}},{"kind":"Field","name":{"kind":"Name","value":"postalCode"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}}]}},{"kind":"Field","name":{"kind":"Name","value":"activities"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"availabilities"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"dateAvailable"}},{"kind":"Field","name":{"kind":"Name","value":"pricePerUnit"}}]}},{"kind":"Field","name":{"kind":"Name","value":"medias"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]} as unknown as DocumentNode<ExperienceQueryQuery, ExperienceQueryQueryVariables>;
export const ExperiencesQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ExperiencesQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"experiences"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ExperienceItem"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ExperienceItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Experience"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"medias"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"location"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addressLineOne"}},{"kind":"Field","name":{"kind":"Name","value":"addressLineTwo"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"federalState"}},{"kind":"Field","name":{"kind":"Name","value":"postalCode"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}}]}},{"kind":"Field","name":{"kind":"Name","value":"activities"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"availabilities"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"dateAvailable"}},{"kind":"Field","name":{"kind":"Name","value":"pricePerUnit"}}]}},{"kind":"Field","name":{"kind":"Name","value":"medias"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]} as unknown as DocumentNode<ExperiencesQueryQuery, ExperiencesQueryQueryVariables>;