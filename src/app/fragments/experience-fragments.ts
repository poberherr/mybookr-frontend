import { graphql } from "@/gql";

export const ExperienceItem = graphql(/* GraphQL */ `
  fragment ExperienceItem on Experience {
    id
    title
    description
    medias {
      url
    }
    location {
      addressLineOne
      addressLineTwo
      city
      country
      federalState
      postalCode
      longitude
      latitude
    }
    activities {
      id
      title
      description
      blockedDays
      price
      medias {
        url
        width
        height
      }
    }
  }
`);
