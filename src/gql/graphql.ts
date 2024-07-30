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
  childs?: Maybe<Array<Category>>;
  depth: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  parent?: Maybe<Category>;
  path: Scalars['String']['output'];
  weight: Scalars['Int']['output'];
};

export type CreateBooking = {
  activityId: Scalars['ID']['input'];
  /** Date of the booking */
  bookedDate: Scalars['Date']['input'];
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type CreateBookingResultType = {
  __typename?: 'CreateBookingResultType';
  bookingFlowToken: Scalars['String']['output'];
};

export type Experience = {
  __typename?: 'Experience';
  activities: Array<Activity>;
  category?: Maybe<Category>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  location: Location;
  medias?: Maybe<Array<Media>>;
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
  createPayment: UpdateBookingResultType;
  updateBooking: Scalars['Boolean']['output'];
};


export type MutationCheckBookingStatusArgs = {
  bookingFlowToken: Scalars['String']['input'];
};


export type MutationCreateBookingArgs = {
  data: CreateBooking;
};


export type MutationCreatePaymentArgs = {
  bookingFlowToken: Scalars['String']['input'];
};


export type MutationUpdateBookingArgs = {
  data: UpdateBooking;
};

export type Query = {
  __typename?: 'Query';
  category?: Maybe<Category>;
  experience?: Maybe<Experience>;
  experienceAvailableActivities?: Maybe<Experience>;
  filterExperiences: QueryFilterExperiencesConnection;
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


export type QueryFilterExperiencesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  categories?: InputMaybe<Array<Scalars['String']['input']>>;
  dateEnd?: InputMaybe<Scalars['Date']['input']>;
  dateStart?: InputMaybe<Scalars['Date']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryFilterExperiencesConnection = {
  __typename?: 'QueryFilterExperiencesConnection';
  edges: Array<Maybe<QueryFilterExperiencesConnectionEdge>>;
};

export type QueryFilterExperiencesConnectionEdge = {
  __typename?: 'QueryFilterExperiencesConnectionEdge';
  cursor: Scalars['String']['output'];
  node: Experience;
};

export type UpdateBooking = {
  activityId: Scalars['ID']['input'];
  /** Date of the booking */
  bookedDate: Scalars['Date']['input'];
  bookingFlowToken: Scalars['String']['input'];
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type UpdateBookingResultType = {
  __typename?: 'UpdateBookingResultType';
  url: Scalars['String']['output'];
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
}>;


export type ExperiencesQueryQuery = { __typename?: 'Query', filterExperiences: { __typename?: 'QueryFilterExperiencesConnection', edges: Array<{ __typename?: 'QueryFilterExperiencesConnectionEdge', node: (
        { __typename?: 'Experience' }
        & { ' $fragmentRefs'?: { 'ExperienceItemFragment': ExperienceItemFragment } }
      ) } | null> } };

export type ExperienceItemFragment = { __typename?: 'Experience', id: string, title: string, description?: string | null, medias?: Array<{ __typename?: 'Media', url: string }> | null, location: { __typename?: 'Location', addressLineOne?: string | null, addressLineTwo?: string | null, city?: string | null, country?: string | null, federalState?: string | null, postalCode?: string | null, longitude?: number | null, latitude?: number | null }, activities: Array<{ __typename?: 'Activity', id: string, title: string, description?: string | null, blockedDays: Array<any>, durationMinutes: number, price: number, medias?: Array<{ __typename?: 'Media', url: string, width: number, height: number }> | null }>, category?: { __typename?: 'Category', name: string, depth: number } | null } & { ' $fragmentName'?: 'ExperienceItemFragment' };

export type CreateBookingMutationVariables = Exact<{
  name: Scalars['String']['input'];
  email: Scalars['String']['input'];
  activityId: Scalars['ID']['input'];
  bookedDate: Scalars['Date']['input'];
}>;


export type CreateBookingMutation = { __typename?: 'Mutation', createBooking: { __typename?: 'CreateBookingResultType', bookingFlowToken: string } };

export type UpdateBookingMutationVariables = Exact<{
  bookingFlowToken: Scalars['String']['input'];
  name: Scalars['String']['input'];
  email: Scalars['String']['input'];
  activityId: Scalars['ID']['input'];
  bookedDate: Scalars['Date']['input'];
}>;


export type UpdateBookingMutation = { __typename?: 'Mutation', updateBooking: boolean };

export type CreatePaymentMutationVariables = Exact<{
  bookingFlowToken: Scalars['String']['input'];
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

export const ExperienceItemFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ExperienceItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Experience"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"medias"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"location"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addressLineOne"}},{"kind":"Field","name":{"kind":"Name","value":"addressLineTwo"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"federalState"}},{"kind":"Field","name":{"kind":"Name","value":"postalCode"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}}]}},{"kind":"Field","name":{"kind":"Name","value":"activities"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"blockedDays"}},{"kind":"Field","name":{"kind":"Name","value":"durationMinutes"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"medias"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"depth"}}]}}]}}]} as unknown as DocumentNode<ExperienceItemFragment, unknown>;
export const AvailableActivitiesPerExperienceQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AvailableActivitiesPerExperienceQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dateStart"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Date"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dateEnd"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Date"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"experienceAvailableActivities"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"dateStart"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dateStart"}}},{"kind":"Argument","name":{"kind":"Name","value":"dateEnd"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dateEnd"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"activities"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"blockedDays"}}]}}]}}]}}]} as unknown as DocumentNode<AvailableActivitiesPerExperienceQueryQuery, AvailableActivitiesPerExperienceQueryQueryVariables>;
export const ExperiencesQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ExperiencesQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dateStart"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Date"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dateEnd"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Date"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"filterExperiences"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"dateStart"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dateStart"}}},{"kind":"Argument","name":{"kind":"Name","value":"dateEnd"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dateEnd"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ExperienceItem"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ExperienceItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Experience"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"medias"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"location"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addressLineOne"}},{"kind":"Field","name":{"kind":"Name","value":"addressLineTwo"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"federalState"}},{"kind":"Field","name":{"kind":"Name","value":"postalCode"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}}]}},{"kind":"Field","name":{"kind":"Name","value":"activities"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"blockedDays"}},{"kind":"Field","name":{"kind":"Name","value":"durationMinutes"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"medias"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"depth"}}]}}]}}]} as unknown as DocumentNode<ExperiencesQueryQuery, ExperiencesQueryQueryVariables>;
export const CreateBookingDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateBooking"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"activityId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"bookedDate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Date"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createBooking"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"activityId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"activityId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"bookedDate"},"value":{"kind":"Variable","name":{"kind":"Name","value":"bookedDate"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"bookingFlowToken"}}]}}]}}]} as unknown as DocumentNode<CreateBookingMutation, CreateBookingMutationVariables>;
export const UpdateBookingDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateBooking"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"bookingFlowToken"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"activityId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"bookedDate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Date"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateBooking"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"bookingFlowToken"},"value":{"kind":"Variable","name":{"kind":"Name","value":"bookingFlowToken"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"activityId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"activityId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"bookedDate"},"value":{"kind":"Variable","name":{"kind":"Name","value":"bookedDate"}}}]}}]}]}}]} as unknown as DocumentNode<UpdateBookingMutation, UpdateBookingMutationVariables>;
export const CreatePaymentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreatePayment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"bookingFlowToken"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createPayment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"bookingFlowToken"},"value":{"kind":"Variable","name":{"kind":"Name","value":"bookingFlowToken"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]} as unknown as DocumentNode<CreatePaymentMutation, CreatePaymentMutationVariables>;
export const CheckBookingMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CheckBookingMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"bookingFlowToken"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"checkBookingStatus"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"bookingFlowToken"},"value":{"kind":"Variable","name":{"kind":"Name","value":"bookingFlowToken"}}}]}]}}]} as unknown as DocumentNode<CheckBookingMutationMutation, CheckBookingMutationMutationVariables>;
export const CheckoutQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CheckoutQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"experienceId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"experience"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"experienceId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ExperienceItem"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ExperienceItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Experience"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"medias"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"location"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addressLineOne"}},{"kind":"Field","name":{"kind":"Name","value":"addressLineTwo"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"federalState"}},{"kind":"Field","name":{"kind":"Name","value":"postalCode"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}}]}},{"kind":"Field","name":{"kind":"Name","value":"activities"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"blockedDays"}},{"kind":"Field","name":{"kind":"Name","value":"durationMinutes"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"medias"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"depth"}}]}}]}}]} as unknown as DocumentNode<CheckoutQueryQuery, CheckoutQueryQueryVariables>;
export const ExperienceQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ExperienceQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"experienceId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"experience"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"experienceId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ExperienceItem"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ExperienceItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Experience"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"medias"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"location"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addressLineOne"}},{"kind":"Field","name":{"kind":"Name","value":"addressLineTwo"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"federalState"}},{"kind":"Field","name":{"kind":"Name","value":"postalCode"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}}]}},{"kind":"Field","name":{"kind":"Name","value":"activities"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"blockedDays"}},{"kind":"Field","name":{"kind":"Name","value":"durationMinutes"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"medias"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"depth"}}]}}]}}]} as unknown as DocumentNode<ExperienceQueryQuery, ExperienceQueryQueryVariables>;