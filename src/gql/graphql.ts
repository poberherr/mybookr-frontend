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
  blockedDays: Array<Scalars['Date']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  durationMinutes: Scalars['Int']['output'];
  experience?: Maybe<Experience>;
  guestMax?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  medias?: Maybe<Array<Media>>;
  price: Scalars['Int']['output'];
  title: Scalars['String']['output'];
};


export type ActivityBlockedDaysArgs = {
  dateEnd?: InputMaybe<Scalars['Date']['input']>;
  dateStart?: InputMaybe<Scalars['Date']['input']>;
};

export type Booking = {
  __typename?: 'Booking';
  activity?: Maybe<Activity>;
  additionalInformation?: Maybe<Scalars['String']['output']>;
  booker?: Maybe<User>;
  currency?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  referenceCode: Scalars['String']['output'];
  status: BookingStatus;
  telephone: Scalars['String']['output'];
  totalCost: Scalars['Int']['output'];
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

export type Category = {
  __typename?: 'Category';
  children?: Maybe<Array<Category>>;
  depth: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  parent?: Maybe<Category>;
  path: Scalars['String']['output'];
  weight: Scalars['Int']['output'];
};

export type CreateBooking = {
  activityId: Scalars['ID']['input'];
  additionalInformation?: InputMaybe<Scalars['String']['input']>;
  /** Date of the booking */
  bookedDate: Scalars['Date']['input'];
  email?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  telephone?: InputMaybe<Scalars['String']['input']>;
};

export type CreateBookingResultType = {
  __typename?: 'CreateBookingResultType';
  bookingFlowToken: Scalars['String']['output'];
  referenceCode: Scalars['String']['output'];
};

export type CreateExperience = {
  description?: InputMaybe<Scalars['String']['input']>;
  location: LocationInput;
  medias: Array<Scalars['File']['input']>;
  operatorUser?: InputMaybe<UserInput>;
  slug: Scalars['String']['input'];
  title: Scalars['String']['input'];
  weight?: Scalars['Int']['input'];
};

export type Experience = {
  __typename?: 'Experience';
  activities: Array<Activity>;
  categories?: Maybe<Array<Category>>;
  category?: Maybe<Category>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  location: Location;
  medias?: Maybe<Array<Media>>;
  operator: User;
  slug: Scalars['String']['output'];
  title: Scalars['String']['output'];
  weight: Scalars['Int']['output'];
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
  hash: Scalars['String']['output'];
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
  checkBookingStatus: BookingStatus;
  createBooking: CreateBookingResultType;
  createExperience: Experience;
  createPayment: UpdateBookingResultType;
  updateBooking: Scalars['Boolean']['output'];
  updateExperience: Experience;
  uploadMedia: Scalars['Boolean']['output'];
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


export type MutationCreatePaymentArgs = {
  bookingFlowToken: Scalars['String']['input'];
  redirectOrigin: Scalars['String']['input'];
};


export type MutationUpdateBookingArgs = {
  data: UpdateBooking;
};


export type MutationUpdateExperienceArgs = {
  data: UpdateExperience;
};


export type MutationUploadMediaArgs = {
  file: Array<Scalars['File']['input']>;
};

export type Operator = {
  __typename?: 'Operator';
  contactEmail: Scalars['String']['output'];
  contactWhatsapp: Scalars['String']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  logo?: Maybe<Media>;
  media?: Maybe<Media>;
  name: Scalars['String']['output'];
  user?: Maybe<User>;
  website: Scalars['String']['output'];
  websiteBooking: Scalars['String']['output'];
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
  amount: Scalars['Int']['output'];
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
  Stripe = 'STRIPE',
  Xendit = 'XENDIT'
}

export enum PaymentStatus {
  Expired = 'Expired',
  Paid = 'Paid',
  Pending = 'Pending',
  Settled = 'Settled',
  XenditEnumDefaultFallback = 'XenditEnumDefaultFallback'
}

export type Query = {
  __typename?: 'Query';
  activities: QueryActivitiesConnection;
  activity?: Maybe<Activity>;
  booking?: Maybe<Booking>;
  bookings: QueryBookingsConnection;
  categories: QueryCategoriesConnection;
  category?: Maybe<Category>;
  currency: QueryCurrencyResultType;
  experience?: Maybe<Experience>;
  experienceAvailableActivities?: Maybe<Experience>;
  experiences: QueryExperiencesConnection;
  filterExperiences: QueryFilterExperiencesConnection;
  me?: Maybe<User>;
  media?: Maybe<Media>;
  medias: QueryMediasConnection;
  operator?: Maybe<Operator>;
  operators: QueryOperatorsConnection;
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


export type QueryBookingArgs = {
  id: Scalars['ID']['input'];
};


export type QueryBookingsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryCategoriesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryCategoryArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
};


export type QueryExperienceArgs = {
  id: Scalars['ID']['input'];
};


export type QueryExperienceAvailableActivitiesArgs = {
  dateEnd?: InputMaybe<Scalars['Date']['input']>;
  dateStart?: InputMaybe<Scalars['Date']['input']>;
  id: Scalars['ID']['input'];
};


export type QueryExperiencesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryFilterExperiencesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  categories?: InputMaybe<Array<Scalars['String']['input']>>;
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


export type QueryOperatorArgs = {
  id: Scalars['ID']['input'];
};


export type QueryOperatorsArgs = {
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

export type QueryCategoriesConnection = {
  __typename?: 'QueryCategoriesConnection';
  edges: Array<Maybe<QueryCategoriesConnectionEdge>>;
  pageInfo: PageInfo;
};

export type QueryCategoriesConnectionEdge = {
  __typename?: 'QueryCategoriesConnectionEdge';
  cursor: Scalars['String']['output'];
  node: Category;
};

export type QueryCurrencyResultType = {
  __typename?: 'QueryCurrencyResultType';
  idr: Scalars['Int']['output'];
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

export type QueryFilterExperiencesConnection = {
  __typename?: 'QueryFilterExperiencesConnection';
  edges: Array<Maybe<QueryFilterExperiencesConnectionEdge>>;
  pageInfo: PageInfo;
};

export type QueryFilterExperiencesConnectionEdge = {
  __typename?: 'QueryFilterExperiencesConnectionEdge';
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

export type QueryOperatorsConnection = {
  __typename?: 'QueryOperatorsConnection';
  edges: Array<Maybe<QueryOperatorsConnectionEdge>>;
  pageInfo: PageInfo;
};

export type QueryOperatorsConnectionEdge = {
  __typename?: 'QueryOperatorsConnectionEdge';
  cursor: Scalars['String']['output'];
  node: Operator;
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

export type UpdateBooking = {
  activityId: Scalars['ID']['input'];
  additionalInformation?: InputMaybe<Scalars['String']['input']>;
  /** Date of the booking */
  bookedDate: Scalars['Date']['input'];
  bookingFlowToken: Scalars['String']['input'];
  email?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  telephone?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateBookingResultType = {
  __typename?: 'UpdateBookingResultType';
  url: Scalars['String']['output'];
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

export type AvailableActivitiesPerExperienceQueryQueryVariables = Exact<{
  id: Scalars['ID']['input'];
  dateStart: Scalars['Date']['input'];
  dateEnd: Scalars['Date']['input'];
}>;


export type AvailableActivitiesPerExperienceQueryQuery = { __typename?: 'Query', experienceAvailableActivities?: { __typename?: 'Experience', activities: Array<{ __typename?: 'Activity', id: string, blockedDays: Array<any> }> } | null };

export type ExperiencesQueryQueryVariables = Exact<{
  dateStart?: InputMaybe<Scalars['Date']['input']>;
  dateEnd?: InputMaybe<Scalars['Date']['input']>;
  categories?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
}>;


export type ExperiencesQueryQuery = { __typename?: 'Query', filterExperiences: { __typename?: 'QueryFilterExperiencesConnection', edges: Array<{ __typename?: 'QueryFilterExperiencesConnectionEdge', node: (
        { __typename?: 'Experience' }
        & { ' $fragmentRefs'?: { 'ExperienceItemFragment': ExperienceItemFragment } }
      ) } | null> } };

export type ExperienceItemFragment = { __typename?: 'Experience', id: string, title: string, slug: string, description?: string | null, medias?: Array<{ __typename?: 'Media', url: string }> | null, location: { __typename?: 'Location', addressLineOne?: string | null, addressLineTwo?: string | null, city?: string | null, country?: string | null, federalState?: string | null, postalCode?: string | null, longitude?: number | null, latitude?: number | null }, activities: Array<{ __typename?: 'Activity', id: string, title: string, description?: string | null, blockedDays: Array<any>, durationMinutes: number, price: number, medias?: Array<{ __typename?: 'Media', url: string, width: number, height: number }> | null }>, category?: { __typename?: 'Category', name: string, depth: number, path: string } | null, categories?: Array<{ __typename?: 'Category', name: string, depth: number, path: string }> | null } & { ' $fragmentName'?: 'ExperienceItemFragment' };

export type OperatorItemFragment = { __typename?: 'Operator', id: string, name: string, description: string, contactEmail: string, contactWhatsapp: string, website: string, websiteBooking: string, logo?: { __typename?: 'Media', url: string, width: number, height: number } | null, media?: { __typename?: 'Media', url: string, width: number, height: number } | null } & { ' $fragmentName'?: 'OperatorItemFragment' };

export type OperatorQueryQueryVariables = Exact<{
  experienceId: Scalars['ID']['input'];
}>;


export type OperatorQueryQuery = { __typename?: 'Query', operator?: (
    { __typename?: 'Operator' }
    & { ' $fragmentRefs'?: { 'OperatorItemFragment': OperatorItemFragment } }
  ) | null };

export type CurrencyQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrencyQueryQuery = { __typename?: 'Query', currency: { __typename?: 'QueryCurrencyResultType', idr: number } };

export type ExperienceTrackingQueryQueryVariables = Exact<{
  experienceId: Scalars['ID']['input'];
}>;


export type ExperienceTrackingQueryQuery = { __typename?: 'Query', experience?: { __typename?: 'Experience', id: string, title: string, slug: string, activities: Array<{ __typename?: 'Activity', id: string, title: string, price: number }> } | null };

export type CreateBookingMutationVariables = Exact<{
  name: Scalars['String']['input'];
  email: Scalars['String']['input'];
  telephone: Scalars['String']['input'];
  additionalInformation: Scalars['String']['input'];
  activityId: Scalars['ID']['input'];
  bookedDate: Scalars['Date']['input'];
}>;


export type CreateBookingMutation = { __typename?: 'Mutation', createBooking: { __typename?: 'CreateBookingResultType', bookingFlowToken: string, referenceCode: string } };

export type UpdateBookingMutationVariables = Exact<{
  bookingFlowToken: Scalars['String']['input'];
  name: Scalars['String']['input'];
  email: Scalars['String']['input'];
  telephone: Scalars['String']['input'];
  additionalInformation: Scalars['String']['input'];
  activityId: Scalars['ID']['input'];
  bookedDate: Scalars['Date']['input'];
}>;


export type UpdateBookingMutation = { __typename?: 'Mutation', updateBooking: boolean };

export type CreatePaymentMutationVariables = Exact<{
  bookingFlowToken: Scalars['String']['input'];
  redirectOrigin: Scalars['String']['input'];
}>;


export type CreatePaymentMutation = { __typename?: 'Mutation', createPayment: { __typename?: 'UpdateBookingResultType', url: string } };

export type CheckBookingMutationMutationVariables = Exact<{
  bookingFlowToken: Scalars['String']['input'];
}>;


export type CheckBookingMutationMutation = { __typename?: 'Mutation', checkBookingStatus: BookingStatus };

export type CheckoutQueryQueryVariables = Exact<{
  experienceId: Scalars['ID']['input'];
}>;


export type CheckoutQueryQuery = { __typename?: 'Query', experience?: (
    { __typename?: 'Experience' }
    & { ' $fragmentRefs'?: { 'ExperienceItemFragment': ExperienceItemFragment } }
  ) | null };

export type ExperienceQueryQueryVariables = Exact<{
  experienceId: Scalars['ID']['input'];
}>;


export type ExperienceQueryQuery = { __typename?: 'Query', experience?: (
    { __typename?: 'Experience' }
    & { ' $fragmentRefs'?: { 'ExperienceItemFragment': ExperienceItemFragment } }
  ) | null };

export const ExperienceItemFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ExperienceItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Experience"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"medias"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"location"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addressLineOne"}},{"kind":"Field","name":{"kind":"Name","value":"addressLineTwo"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"federalState"}},{"kind":"Field","name":{"kind":"Name","value":"postalCode"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}}]}},{"kind":"Field","name":{"kind":"Name","value":"activities"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"blockedDays"}},{"kind":"Field","name":{"kind":"Name","value":"durationMinutes"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"medias"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"depth"}},{"kind":"Field","name":{"kind":"Name","value":"path"}}]}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"depth"}},{"kind":"Field","name":{"kind":"Name","value":"path"}}]}}]}}]} as unknown as DocumentNode<ExperienceItemFragment, unknown>;
export const OperatorItemFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OperatorItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Operator"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"contactEmail"}},{"kind":"Field","name":{"kind":"Name","value":"contactWhatsapp"}},{"kind":"Field","name":{"kind":"Name","value":"website"}},{"kind":"Field","name":{"kind":"Name","value":"websiteBooking"}},{"kind":"Field","name":{"kind":"Name","value":"logo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}}]} as unknown as DocumentNode<OperatorItemFragment, unknown>;
export const AvailableActivitiesPerExperienceQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AvailableActivitiesPerExperienceQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dateStart"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Date"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dateEnd"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Date"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"experienceAvailableActivities"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"dateStart"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dateStart"}}},{"kind":"Argument","name":{"kind":"Name","value":"dateEnd"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dateEnd"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"activities"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"blockedDays"}}]}}]}}]}}]} as unknown as DocumentNode<AvailableActivitiesPerExperienceQueryQuery, AvailableActivitiesPerExperienceQueryQueryVariables>;
export const ExperiencesQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ExperiencesQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dateStart"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Date"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dateEnd"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Date"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"categories"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"filterExperiences"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"dateStart"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dateStart"}}},{"kind":"Argument","name":{"kind":"Name","value":"dateEnd"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dateEnd"}}},{"kind":"Argument","name":{"kind":"Name","value":"categories"},"value":{"kind":"Variable","name":{"kind":"Name","value":"categories"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ExperienceItem"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ExperienceItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Experience"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"medias"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"location"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addressLineOne"}},{"kind":"Field","name":{"kind":"Name","value":"addressLineTwo"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"federalState"}},{"kind":"Field","name":{"kind":"Name","value":"postalCode"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}}]}},{"kind":"Field","name":{"kind":"Name","value":"activities"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"blockedDays"}},{"kind":"Field","name":{"kind":"Name","value":"durationMinutes"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"medias"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"depth"}},{"kind":"Field","name":{"kind":"Name","value":"path"}}]}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"depth"}},{"kind":"Field","name":{"kind":"Name","value":"path"}}]}}]}}]} as unknown as DocumentNode<ExperiencesQueryQuery, ExperiencesQueryQueryVariables>;
export const OperatorQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"OperatorQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"experienceId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"operator"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"experienceId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"OperatorItem"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OperatorItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Operator"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"contactEmail"}},{"kind":"Field","name":{"kind":"Name","value":"contactWhatsapp"}},{"kind":"Field","name":{"kind":"Name","value":"website"}},{"kind":"Field","name":{"kind":"Name","value":"websiteBooking"}},{"kind":"Field","name":{"kind":"Name","value":"logo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}}]} as unknown as DocumentNode<OperatorQueryQuery, OperatorQueryQueryVariables>;
export const CurrencyQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CurrencyQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currency"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"idr"}}]}}]}}]} as unknown as DocumentNode<CurrencyQueryQuery, CurrencyQueryQueryVariables>;
export const ExperienceTrackingQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ExperienceTrackingQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"experienceId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"experience"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"experienceId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"activities"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"price"}}]}}]}}]}}]} as unknown as DocumentNode<ExperienceTrackingQueryQuery, ExperienceTrackingQueryQueryVariables>;
export const CreateBookingDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateBooking"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"telephone"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"additionalInformation"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"activityId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"bookedDate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Date"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createBooking"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"telephone"},"value":{"kind":"Variable","name":{"kind":"Name","value":"telephone"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"additionalInformation"},"value":{"kind":"Variable","name":{"kind":"Name","value":"additionalInformation"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"activityId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"activityId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"bookedDate"},"value":{"kind":"Variable","name":{"kind":"Name","value":"bookedDate"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"bookingFlowToken"}},{"kind":"Field","name":{"kind":"Name","value":"referenceCode"}}]}}]}}]} as unknown as DocumentNode<CreateBookingMutation, CreateBookingMutationVariables>;
export const UpdateBookingDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateBooking"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"bookingFlowToken"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"telephone"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"additionalInformation"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"activityId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"bookedDate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Date"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateBooking"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"bookingFlowToken"},"value":{"kind":"Variable","name":{"kind":"Name","value":"bookingFlowToken"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"telephone"},"value":{"kind":"Variable","name":{"kind":"Name","value":"telephone"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"additionalInformation"},"value":{"kind":"Variable","name":{"kind":"Name","value":"additionalInformation"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"activityId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"activityId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"bookedDate"},"value":{"kind":"Variable","name":{"kind":"Name","value":"bookedDate"}}}]}}]}]}}]} as unknown as DocumentNode<UpdateBookingMutation, UpdateBookingMutationVariables>;
export const CreatePaymentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreatePayment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"bookingFlowToken"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"redirectOrigin"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createPayment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"bookingFlowToken"},"value":{"kind":"Variable","name":{"kind":"Name","value":"bookingFlowToken"}}},{"kind":"Argument","name":{"kind":"Name","value":"redirectOrigin"},"value":{"kind":"Variable","name":{"kind":"Name","value":"redirectOrigin"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]} as unknown as DocumentNode<CreatePaymentMutation, CreatePaymentMutationVariables>;
export const CheckBookingMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CheckBookingMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"bookingFlowToken"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"checkBookingStatus"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"bookingFlowToken"},"value":{"kind":"Variable","name":{"kind":"Name","value":"bookingFlowToken"}}}]}]}}]} as unknown as DocumentNode<CheckBookingMutationMutation, CheckBookingMutationMutationVariables>;
export const CheckoutQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CheckoutQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"experienceId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"experience"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"experienceId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ExperienceItem"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ExperienceItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Experience"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"medias"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"location"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addressLineOne"}},{"kind":"Field","name":{"kind":"Name","value":"addressLineTwo"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"federalState"}},{"kind":"Field","name":{"kind":"Name","value":"postalCode"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}}]}},{"kind":"Field","name":{"kind":"Name","value":"activities"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"blockedDays"}},{"kind":"Field","name":{"kind":"Name","value":"durationMinutes"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"medias"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"depth"}},{"kind":"Field","name":{"kind":"Name","value":"path"}}]}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"depth"}},{"kind":"Field","name":{"kind":"Name","value":"path"}}]}}]}}]} as unknown as DocumentNode<CheckoutQueryQuery, CheckoutQueryQueryVariables>;
export const ExperienceQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ExperienceQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"experienceId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"experience"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"experienceId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ExperienceItem"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ExperienceItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Experience"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"medias"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"location"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addressLineOne"}},{"kind":"Field","name":{"kind":"Name","value":"addressLineTwo"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"federalState"}},{"kind":"Field","name":{"kind":"Name","value":"postalCode"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}}]}},{"kind":"Field","name":{"kind":"Name","value":"activities"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"blockedDays"}},{"kind":"Field","name":{"kind":"Name","value":"durationMinutes"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"medias"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"depth"}},{"kind":"Field","name":{"kind":"Name","value":"path"}}]}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"depth"}},{"kind":"Field","name":{"kind":"Name","value":"path"}}]}}]}}]} as unknown as DocumentNode<ExperienceQueryQuery, ExperienceQueryQueryVariables>;