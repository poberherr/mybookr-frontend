"use client";

import { useContext } from "react";
import { useQuery } from "@urql/next";

import { graphql, useFragment } from "@/gql";
import { ExperienceItem } from "@/app/fragments/experience-fragments";
import { useIsClient } from "@/app/helpers/useIsClient";
import PropertyItem from "./PropertyItem";
import { SearchStateMachineContext } from "@/app/state-machines/searchMachine";
import { PropertiesListSkeleton } from "./PropertiesListSkeleton";

const ExperiencesQuery = graphql(`
  query ExperiencesQuery($dateStart: Date, $dateEnd: Date) {
    experiences(dateStart: $dateStart, dateEnd: $dateEnd) {
      edges {
        node {
          ...ExperienceItem
        }
      }
    }
  }
`);

export default function PropertiesList() {
  const isClient = useIsClient();
  const { searchMachineState } = useContext(SearchStateMachineContext);
  const [result, executeSearch] = useQuery({
    query: ExperiencesQuery,
    variables: {
      dateStart: searchMachineState.context.dateFrom
        .toISOString()
        .split("T")[0],
      dateEnd: searchMachineState.context.dateTo.toISOString().split("T")[0],
    },
  });

  const loading = !isClient || result.fetching;
  const listings = result.data?.experiences.edges
    .map((edge) => useFragment(ExperienceItem, edge?.node))
    .flatMap((f) => f ?? []);

  if (result.error) {
    console.error(result.error);
    return (
      <div className="prose max-w-full">
        <h1>Oops, something went wrong!</h1>
        <p>We're sorry, but an unexpected error occurred.</p>
        <p>
          <button
            className="pr-1 font-bold"
            onClick={() => {
              executeSearch();
            }}
          >
            Click here
          </button>
          to try again.
        </p>
      </div>
    );
  }

  if (loading) {
    return <PropertiesListSkeleton />;
  }

  if (!listings || listings.length === 0) {
    return (
      <div className="prose max-w-full">
        <h1>No availability for your selected dates</h1>
        <p>
          Unfortunately, there are no available options for the dates you
          selected. Please try choosing different dates to find available
          options.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-flow-row grid-cols-1 grid-rows-[repeat(auto-fill,1fr)] gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {listings.map((listing) => (
        <PropertyItem key={listing.id} property={listing} />
      ))}
    </div>
  );
}
