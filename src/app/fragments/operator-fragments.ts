import { graphql } from "@/gql";

export const OperatorItem = graphql(/* GraphQL */ `
  fragment OperatorItem on Operator {
    id
    name
    description
    contactEmail
    contactWhatsapp
    website
    websiteBooking
    logo {
      url
      width
      height
    }
    media {
      url
      width
      height
    }
  }
`);
