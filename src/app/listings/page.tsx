import React from "react";

import SearchBar from "../components/search-bar/SearchBar";
import { getClient } from "../api-helpers/urql";
import { graphql, useFragment } from "@/gql";
import PropertiesList from "../components/properties/PropertiesList";

export const ExperienceItemFragment = graphql(/* GraphQL */ `
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

const ListingsQuery = graphql(`
  query ListingsQuery {
    experiences {
      edges {
        node {
          ...ExperienceItem
        }
      }
    }
  }
`);

export default async function ListingsPage() {
  const result = await getClient().query(ListingsQuery, {});
  if (!result.data) {
    throw new Error("unable to load listing page results");
  }
  const listings = result.data.experiences.edges
    .map((edge) => useFragment(ExperienceItemFragment, edge?.node))
    .flatMap((f) => f ?? []);

  return (
    <div className="my-12 grid gap-12 px-4 py-0 md:px-40">
      <SearchBar />
      <PropertiesList listings={listings} loading={false} />
    </div>
  );
}

export const revalidate = false;
