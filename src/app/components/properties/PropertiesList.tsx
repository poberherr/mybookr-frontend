import { ExperienceItem } from "@/app/fragments/experience-fragments";
import PropertyItem from "./PropertyItem";
import PropertyItemSkeleton from "./PropertyItemSkeleton";
import { useQuery, gql } from "@urql/next";
import { graphql, useFragment } from "@/gql";
import { useIsClient } from "@/app/helpers/useIsClient";
import { useContext } from "react";
import { BookingContext } from "@/app/contexts/booking";
import { format } from "date-fns";

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
  const { selectedDate, selectedDate1 } = useContext(BookingContext);
  const [result] = useQuery({
    query: ExperiencesQuery,
    variables: {
      dateStart: selectedDate ? format(selectedDate, "yyyy-MM-dd") : null,
      dateEnd: selectedDate1 ? format(selectedDate1, "yyyy-MM-dd") : null,
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
