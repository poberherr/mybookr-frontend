import React from "react";

import SearchBar from "../components/search-bar/SearchBar";
import { getClient } from "../api-helpers/urql";
import { graphql, useFragment } from "@/gql";
import PropertiesList from "../components/properties/PropertiesList";
import { ExperienceItem } from "../fragments/experience-fragments";

const ExperiencesQuery = graphql(`
  query ExperiencesQuery {
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
  const result = await getClient().query(ExperiencesQuery, {});
  if (!result.data) {
    throw new Error("unable to load listing page results");
  }
  const listings = result.data.experiences.edges
    .map((edge) => useFragment(ExperienceItem, edge?.node))
    .flatMap((f) => f ?? []);

  return (
    <div className="my-12 grid gap-12 px-4 py-0 md:px-40">
      <SearchBar />
      <PropertiesList listings={listings} loading={false} />
    </div>
  );
}

export const revalidate = false;
