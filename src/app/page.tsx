import React from "react";

import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";

import SearchBar from "./components/search-bar/SearchBar";
import { ListingsComponent } from "@/app/components/Listings";

import { coreListingsListQueryOptions } from "./api-helpers/hooks/useCoreListingsList";

export default async function ListingsPage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(coreListingsListQueryOptions());

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="my-12 grid gap-12 px-4 py-0 md:px-40">
        <SearchBar />
        <ListingsComponent />
      </div>
    </HydrationBoundary>
  );
}

export const revalidate = false;
