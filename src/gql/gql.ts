/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query ConfirmationEmailQuery($experienceId: ID!) {\n    experience(id: $experienceId) {\n      ...ExperienceItem\n    }\n  }\n": types.ConfirmationEmailQueryDocument,
    "\n  query ExperiencesQuery($dateStart: Date, $dateEnd: Date) {\n    experiences(dateStart: $dateStart, dateEnd: $dateEnd) {\n      edges {\n        node {\n          ...ExperienceItem\n        }\n      }\n    }\n  }\n": types.ExperiencesQueryDocument,
    "\n  fragment ExperienceItem on Experience {\n    id\n    title\n    description\n    medias {\n      url\n    }\n    location {\n      addressLineOne\n      addressLineTwo\n      city\n      country\n      federalState\n      postalCode\n      longitude\n      latitude\n    }\n    activities {\n      id\n      title\n      description\n      availabilities {\n        id\n        dateAvailable\n        pricePerUnit\n      }\n      medias {\n        url\n        width\n        height\n      }\n    }\n  }\n": types.ExperienceItemFragmentDoc,
    "\n  mutation CreateBookingMutation(\n    $name: String!\n    $email: String!\n    $activityId: ID!\n    $availabilityId: ID!\n    $numberOfSlots: Int!\n  ) {\n    createBooking(\n      data: {\n        name: $name\n        email: $email\n        activityId: $activityId\n        availabilityId: $availabilityId\n        numberOfSlots: $numberOfSlots\n      }\n    ) {\n      bookingFlowToken\n      paymentClientSecret\n    }\n  }\n": types.CreateBookingMutationDocument,
    "\n  mutation updateBookingMutation(\n    $bookingFlowToken: String!\n    $name: String!\n    $email: String!\n    $activityId: ID!\n    $availabilityId: ID!\n    $numberOfSlots: Int!\n  ) {\n    updateBooking(\n      data: {\n        bookingFlowToken: $bookingFlowToken\n        name: $name\n        email: $email\n        activityId: $activityId\n        availabilityId: $availabilityId\n        numberOfSlots: $numberOfSlots\n      }\n    ) {\n      paymentClientSecret\n    }\n  }\n": types.UpdateBookingMutationDocument,
    "\n  mutation CheckBookingMutation($bookingFlowToken: String!) {\n    checkBookingStatus(bookingFlowToken: $bookingFlowToken)\n  }\n": types.CheckBookingMutationDocument,
    "\n  query CheckoutQuery($experienceId: ID!) {\n    experience(id: $experienceId) {\n      ...ExperienceItem\n    }\n  }\n": types.CheckoutQueryDocument,
    "\n  query ExperienceQuery($experienceId: ID!) {\n    experience(id: $experienceId) {\n      ...ExperienceItem\n    }\n  }\n": types.ExperienceQueryDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query ConfirmationEmailQuery($experienceId: ID!) {\n    experience(id: $experienceId) {\n      ...ExperienceItem\n    }\n  }\n"): (typeof documents)["\n  query ConfirmationEmailQuery($experienceId: ID!) {\n    experience(id: $experienceId) {\n      ...ExperienceItem\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query ExperiencesQuery($dateStart: Date, $dateEnd: Date) {\n    experiences(dateStart: $dateStart, dateEnd: $dateEnd) {\n      edges {\n        node {\n          ...ExperienceItem\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query ExperiencesQuery($dateStart: Date, $dateEnd: Date) {\n    experiences(dateStart: $dateStart, dateEnd: $dateEnd) {\n      edges {\n        node {\n          ...ExperienceItem\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment ExperienceItem on Experience {\n    id\n    title\n    description\n    medias {\n      url\n    }\n    location {\n      addressLineOne\n      addressLineTwo\n      city\n      country\n      federalState\n      postalCode\n      longitude\n      latitude\n    }\n    activities {\n      id\n      title\n      description\n      availabilities {\n        id\n        dateAvailable\n        pricePerUnit\n      }\n      medias {\n        url\n        width\n        height\n      }\n    }\n  }\n"): (typeof documents)["\n  fragment ExperienceItem on Experience {\n    id\n    title\n    description\n    medias {\n      url\n    }\n    location {\n      addressLineOne\n      addressLineTwo\n      city\n      country\n      federalState\n      postalCode\n      longitude\n      latitude\n    }\n    activities {\n      id\n      title\n      description\n      availabilities {\n        id\n        dateAvailable\n        pricePerUnit\n      }\n      medias {\n        url\n        width\n        height\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateBookingMutation(\n    $name: String!\n    $email: String!\n    $activityId: ID!\n    $availabilityId: ID!\n    $numberOfSlots: Int!\n  ) {\n    createBooking(\n      data: {\n        name: $name\n        email: $email\n        activityId: $activityId\n        availabilityId: $availabilityId\n        numberOfSlots: $numberOfSlots\n      }\n    ) {\n      bookingFlowToken\n      paymentClientSecret\n    }\n  }\n"): (typeof documents)["\n  mutation CreateBookingMutation(\n    $name: String!\n    $email: String!\n    $activityId: ID!\n    $availabilityId: ID!\n    $numberOfSlots: Int!\n  ) {\n    createBooking(\n      data: {\n        name: $name\n        email: $email\n        activityId: $activityId\n        availabilityId: $availabilityId\n        numberOfSlots: $numberOfSlots\n      }\n    ) {\n      bookingFlowToken\n      paymentClientSecret\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation updateBookingMutation(\n    $bookingFlowToken: String!\n    $name: String!\n    $email: String!\n    $activityId: ID!\n    $availabilityId: ID!\n    $numberOfSlots: Int!\n  ) {\n    updateBooking(\n      data: {\n        bookingFlowToken: $bookingFlowToken\n        name: $name\n        email: $email\n        activityId: $activityId\n        availabilityId: $availabilityId\n        numberOfSlots: $numberOfSlots\n      }\n    ) {\n      paymentClientSecret\n    }\n  }\n"): (typeof documents)["\n  mutation updateBookingMutation(\n    $bookingFlowToken: String!\n    $name: String!\n    $email: String!\n    $activityId: ID!\n    $availabilityId: ID!\n    $numberOfSlots: Int!\n  ) {\n    updateBooking(\n      data: {\n        bookingFlowToken: $bookingFlowToken\n        name: $name\n        email: $email\n        activityId: $activityId\n        availabilityId: $availabilityId\n        numberOfSlots: $numberOfSlots\n      }\n    ) {\n      paymentClientSecret\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CheckBookingMutation($bookingFlowToken: String!) {\n    checkBookingStatus(bookingFlowToken: $bookingFlowToken)\n  }\n"): (typeof documents)["\n  mutation CheckBookingMutation($bookingFlowToken: String!) {\n    checkBookingStatus(bookingFlowToken: $bookingFlowToken)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query CheckoutQuery($experienceId: ID!) {\n    experience(id: $experienceId) {\n      ...ExperienceItem\n    }\n  }\n"): (typeof documents)["\n  query CheckoutQuery($experienceId: ID!) {\n    experience(id: $experienceId) {\n      ...ExperienceItem\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query ExperienceQuery($experienceId: ID!) {\n    experience(id: $experienceId) {\n      ...ExperienceItem\n    }\n  }\n"): (typeof documents)["\n  query ExperienceQuery($experienceId: ID!) {\n    experience(id: $experienceId) {\n      ...ExperienceItem\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;