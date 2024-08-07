import { graphql } from "@/gql";

export const ExperienceItem = graphql(/* GraphQL */ `
  fragment ExperienceItem on Experience {
    id
    title
    slug
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
      durationMinutes
      price
      medias {
        url
        width
        height
      }
    }
    # @todo lets call this activeCategory in backend to avoid confusion
    category {
      name
      depth
      path
    }
    categories {
      name
      depth
      path
    }
  }
`);
