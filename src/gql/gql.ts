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
    "\n  query AvailableActivitiesPerExperienceQuery(\n    $id: ID!\n    $dateStart: Date!\n    $dateEnd: Date!\n  ) {\n    experienceAvailableActivities(\n      id: $id\n      dateStart: $dateStart\n      dateEnd: $dateEnd\n    ) {\n      activities {\n        id\n        blockedDays\n      }\n    }\n  }\n": types.AvailableActivitiesPerExperienceQueryDocument,
    "\n  query ExperiencesQuery(\n    $dateStart: Date\n    $dateEnd: Date\n    $categories: [String!]\n  ) {\n    filterExperiences(\n      dateStart: $dateStart\n      dateEnd: $dateEnd\n      categories: $categories\n    ) {\n      edges {\n        node {\n          ...ExperienceItem\n        }\n      }\n    }\n  }\n": types.ExperiencesQueryDocument,
    "\n  fragment ExperienceItem on Experience {\n    id\n    title\n    slug\n    description\n    medias {\n      url\n    }\n    location {\n      addressLineOne\n      addressLineTwo\n      city\n      country\n      federalState\n      postalCode\n      longitude\n      latitude\n    }\n    activities {\n      id\n      title\n      description\n      blockedDays\n      durationMinutes\n      price\n      medias {\n        url\n        width\n        height\n      }\n    }\n    # @todo lets call this activeCategory in backend to avoid confusion\n    category {\n      name\n      depth\n      path\n    }\n    categories {\n      name\n      depth\n      path\n    }\n  }\n": types.ExperienceItemFragmentDoc,
    "\n  fragment OperatorItem on Operator {\n    id\n    name\n    description\n    contactEmail\n    contactWhatsapp\n    website\n    websiteBooking\n    logo {\n      url\n      width\n      height\n    }\n    media {\n      url\n      width\n      height\n    }\n  }\n": types.OperatorItemFragmentDoc,
    "\n  query OperatorQuery($experienceId: ID!) {\n    operator(id: $experienceId) {\n      ...OperatorItem\n    }\n  }\n": types.OperatorQueryDocument,
    "\n  query CurrencyQuery {\n    currency {\n      idr\n    }\n  }\n": types.CurrencyQueryDocument,
    "\n  mutation CreateBooking(\n    $name: String!\n    $email: String!\n    $telephone: String!\n    $additionalInformation: String!\n    $activityId: ID!\n    $bookedDate: Date!\n  ) {\n    createBooking(\n      data: {\n        name: $name\n        email: $email\n        telephone: $telephone\n        additionalInformation: $additionalInformation\n        activityId: $activityId\n        bookedDate: $bookedDate\n      }\n    ) {\n      bookingFlowToken\n      referenceCode\n    }\n  }\n": types.CreateBookingDocument,
    "\n  mutation UpdateBooking(\n    $bookingFlowToken: String!\n    $name: String!\n    $email: String!\n    $telephone: String!\n    $additionalInformation: String!\n    $activityId: ID!\n    $bookedDate: Date!\n  ) {\n    updateBooking(\n      data: {\n        bookingFlowToken: $bookingFlowToken\n        name: $name\n        email: $email\n        telephone: $telephone\n        additionalInformation: $additionalInformation\n        activityId: $activityId\n        bookedDate: $bookedDate\n      }\n    )\n  }\n": types.UpdateBookingDocument,
    "\n  mutation CreatePayment($bookingFlowToken: String!) {\n    createPayment(bookingFlowToken: $bookingFlowToken) {\n      url\n    }\n  }\n": types.CreatePaymentDocument,
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
export function graphql(source: "\n  query AvailableActivitiesPerExperienceQuery(\n    $id: ID!\n    $dateStart: Date!\n    $dateEnd: Date!\n  ) {\n    experienceAvailableActivities(\n      id: $id\n      dateStart: $dateStart\n      dateEnd: $dateEnd\n    ) {\n      activities {\n        id\n        blockedDays\n      }\n    }\n  }\n"): (typeof documents)["\n  query AvailableActivitiesPerExperienceQuery(\n    $id: ID!\n    $dateStart: Date!\n    $dateEnd: Date!\n  ) {\n    experienceAvailableActivities(\n      id: $id\n      dateStart: $dateStart\n      dateEnd: $dateEnd\n    ) {\n      activities {\n        id\n        blockedDays\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query ExperiencesQuery(\n    $dateStart: Date\n    $dateEnd: Date\n    $categories: [String!]\n  ) {\n    filterExperiences(\n      dateStart: $dateStart\n      dateEnd: $dateEnd\n      categories: $categories\n    ) {\n      edges {\n        node {\n          ...ExperienceItem\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query ExperiencesQuery(\n    $dateStart: Date\n    $dateEnd: Date\n    $categories: [String!]\n  ) {\n    filterExperiences(\n      dateStart: $dateStart\n      dateEnd: $dateEnd\n      categories: $categories\n    ) {\n      edges {\n        node {\n          ...ExperienceItem\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment ExperienceItem on Experience {\n    id\n    title\n    slug\n    description\n    medias {\n      url\n    }\n    location {\n      addressLineOne\n      addressLineTwo\n      city\n      country\n      federalState\n      postalCode\n      longitude\n      latitude\n    }\n    activities {\n      id\n      title\n      description\n      blockedDays\n      durationMinutes\n      price\n      medias {\n        url\n        width\n        height\n      }\n    }\n    # @todo lets call this activeCategory in backend to avoid confusion\n    category {\n      name\n      depth\n      path\n    }\n    categories {\n      name\n      depth\n      path\n    }\n  }\n"): (typeof documents)["\n  fragment ExperienceItem on Experience {\n    id\n    title\n    slug\n    description\n    medias {\n      url\n    }\n    location {\n      addressLineOne\n      addressLineTwo\n      city\n      country\n      federalState\n      postalCode\n      longitude\n      latitude\n    }\n    activities {\n      id\n      title\n      description\n      blockedDays\n      durationMinutes\n      price\n      medias {\n        url\n        width\n        height\n      }\n    }\n    # @todo lets call this activeCategory in backend to avoid confusion\n    category {\n      name\n      depth\n      path\n    }\n    categories {\n      name\n      depth\n      path\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment OperatorItem on Operator {\n    id\n    name\n    description\n    contactEmail\n    contactWhatsapp\n    website\n    websiteBooking\n    logo {\n      url\n      width\n      height\n    }\n    media {\n      url\n      width\n      height\n    }\n  }\n"): (typeof documents)["\n  fragment OperatorItem on Operator {\n    id\n    name\n    description\n    contactEmail\n    contactWhatsapp\n    website\n    websiteBooking\n    logo {\n      url\n      width\n      height\n    }\n    media {\n      url\n      width\n      height\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query OperatorQuery($experienceId: ID!) {\n    operator(id: $experienceId) {\n      ...OperatorItem\n    }\n  }\n"): (typeof documents)["\n  query OperatorQuery($experienceId: ID!) {\n    operator(id: $experienceId) {\n      ...OperatorItem\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query CurrencyQuery {\n    currency {\n      idr\n    }\n  }\n"): (typeof documents)["\n  query CurrencyQuery {\n    currency {\n      idr\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateBooking(\n    $name: String!\n    $email: String!\n    $telephone: String!\n    $additionalInformation: String!\n    $activityId: ID!\n    $bookedDate: Date!\n  ) {\n    createBooking(\n      data: {\n        name: $name\n        email: $email\n        telephone: $telephone\n        additionalInformation: $additionalInformation\n        activityId: $activityId\n        bookedDate: $bookedDate\n      }\n    ) {\n      bookingFlowToken\n      referenceCode\n    }\n  }\n"): (typeof documents)["\n  mutation CreateBooking(\n    $name: String!\n    $email: String!\n    $telephone: String!\n    $additionalInformation: String!\n    $activityId: ID!\n    $bookedDate: Date!\n  ) {\n    createBooking(\n      data: {\n        name: $name\n        email: $email\n        telephone: $telephone\n        additionalInformation: $additionalInformation\n        activityId: $activityId\n        bookedDate: $bookedDate\n      }\n    ) {\n      bookingFlowToken\n      referenceCode\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateBooking(\n    $bookingFlowToken: String!\n    $name: String!\n    $email: String!\n    $telephone: String!\n    $additionalInformation: String!\n    $activityId: ID!\n    $bookedDate: Date!\n  ) {\n    updateBooking(\n      data: {\n        bookingFlowToken: $bookingFlowToken\n        name: $name\n        email: $email\n        telephone: $telephone\n        additionalInformation: $additionalInformation\n        activityId: $activityId\n        bookedDate: $bookedDate\n      }\n    )\n  }\n"): (typeof documents)["\n  mutation UpdateBooking(\n    $bookingFlowToken: String!\n    $name: String!\n    $email: String!\n    $telephone: String!\n    $additionalInformation: String!\n    $activityId: ID!\n    $bookedDate: Date!\n  ) {\n    updateBooking(\n      data: {\n        bookingFlowToken: $bookingFlowToken\n        name: $name\n        email: $email\n        telephone: $telephone\n        additionalInformation: $additionalInformation\n        activityId: $activityId\n        bookedDate: $bookedDate\n      }\n    )\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreatePayment($bookingFlowToken: String!) {\n    createPayment(bookingFlowToken: $bookingFlowToken) {\n      url\n    }\n  }\n"): (typeof documents)["\n  mutation CreatePayment($bookingFlowToken: String!) {\n    createPayment(bookingFlowToken: $bookingFlowToken) {\n      url\n    }\n  }\n"];
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