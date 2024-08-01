"use client";

import { useContext } from "react";
import { useQuery } from "@urql/next";

import { graphql, useFragment } from "@/gql";
import { ExperienceItem } from "@/app/fragments/experience-fragments";
import { useIsClient } from "@/app/helpers/useIsClient";
import ExperienceTeaser from "./ExperienceTeaser";
import { SearchStateMachineContext } from "@/app/state-machines/searchMachine";
import { ExperiencesListSkeleton } from "./ExperiencesListSkeleton";
import { useGroupedExperiences } from "@/app/helpers/useGroupedExperiences";
import { Typography } from "@mui/material";
import { CategoryContext } from "@/app/helpers/categoryContext";

const ExperiencesQuery = graphql(`
  query ExperiencesQuery($dateStart: Date, $dateEnd: Date) {
    filterExperiences(dateStart: $dateStart, dateEnd: $dateEnd) {
      edges {
        node {
          ...ExperienceItem
        }
      }
    }
  }
`);

export default function ExperiencesList() {
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
  const listings = result.data?.filterExperiences.edges
    .map((edge) => useFragment(ExperienceItem, edge?.node))
    .flatMap((f) => f ?? []);

  const groupedExperiences = useGroupedExperiences(listings);

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
    return <ExperiencesListSkeleton />;
  }

  if (!listings || listings.length === 0 || !groupedExperiences) {
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
    <div className="grid gap-8">
      {Object.entries(groupedExperiences).map(
        ([categoryName, { category, experiences }]) => (
          <div key={categoryName}>
            <CategoryContext.Provider
              value={
                category?.path ||
                process.env.NEXT_PUBLIC_BASE_CATEGORY ||
                "Root"
              }
            >
              <Typography variant={`h4`}>{categoryName}:</Typography>
              <div className="mt-2 grid grid-flow-row grid-cols-1 grid-rows-[repeat(auto-fill,1fr)] gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {experiences.map((experience) => (
                  <ExperienceTeaser
                    key={experience.id}
                    experience={experience}
                  />
                ))}
              </div>
            </CategoryContext.Provider>
          </div>
        ),
      )}
    </div>
  );
}
