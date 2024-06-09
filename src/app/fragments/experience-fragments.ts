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
      availabilities {
        id
        dateAvailable
        pricePerUnit
      }
      medias {
        url
        width
        height
      }
    }
  }
`);
