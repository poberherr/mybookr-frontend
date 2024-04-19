import React from "react";

import { QueryClient, dehydrate } from "@tanstack/react-query";

import { ListingsComponent } from "@/components/Listings";
import SearchBar from "@/components/search-bar/SearchBar";

import { coreListingsListQueryOptions } from "../api/hooks/useCoreListingsList";

const HomePage = () => {
  return (
    <div className="my-12 grid gap-12 px-4 py-0 md:px-40">
      <SearchBar />
      <ListingsComponent />
    </div>
  );
};

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(coreListingsListQueryOptions());

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default HomePage;

export const revalidate = false;
