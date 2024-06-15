import { useContext } from "react";
import { format } from "date-fns";
import { useQuery, gql } from "@urql/next";

import { graphql, useFragment } from "@/gql";
import { ExperienceItem } from "@/app/fragments/experience-fragments";
import { useIsClient } from "@/app/helpers/useIsClient";
import PropertyItem from "./PropertyItem";
import PropertyItemSkeleton from "./PropertyItemSkeleton";
import { SearchStateMachineContext } from "@/app/state-machines/searchMachine";

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
  const [result] = useQuery({
    query: ExperiencesQuery,
    variables: {
      dateStart: searchMachineState.context.dateFrom.toISOString().split('T')[0],
      dateEnd: searchMachineState.context.dateTo.toISOString().split('T')[0],
    },
  });

  const loading = !isClient || result.fetching;
  const listings = result.data?.experiences.edges
    .map((edge) => useFragment(ExperienceItem, edge?.node))
    .flatMap((f) => f ?? []);

  if (result.error) {
    console.error(result.error);
  }

  return (
    <div className="grid grid-flow-row grid-cols-1 grid-rows-[repeat(auto-fill,1fr)] gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {loading ? (
        <>
          {Array(8)
            .fill(1)
            .map((value, index) => (
              <PropertyItemSkeleton key={index} />
            ))}
        </>
      ) : (
        <>
          {listings?.map((listing) => (
            <PropertyItem key={listing.id} property={listing} />
          ))}
        </>
      )}
    </div>
  );
}
