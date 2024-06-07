import { graphql } from "@/gql";

export const ExperienceItem = graphql(/* GraphQL */ `
  fragment ExperienceItem on Experience {
    id
    title
    descriptionHTML
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
      availabilities {
        id
        dateAvailable
        pricePerUnit
      }
      medias {
        url
      }
    }
  }
`);