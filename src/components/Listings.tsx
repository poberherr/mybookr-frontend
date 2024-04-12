import React from "react";

import {
  useCoreListingsList,
  useCoreListingsListSuspense,
} from "../api/hooks/useCoreListingsList";

// Adjust the import path
import { Listing } from "../api/types/Listing";
// Ensure this path is correct
import PropertiesList from "./properties/PropertiesList";

export function ListingsComponent() {
  const { data, isLoading } = useCoreListingsList<Listing[]>();

  // @todo why is error always never? kubb/swagger-tanstack does this weirdly. we have to check what now happens when API returns an error
  // if (isLoading) return <div>Loading...</div>;
  // if (error) return <div>An error occurred: {error.message}</div>;

  return (
    <div className="flex w-full flex-col gap-6 rounded bg-gray-50 p-12">
      <h2>API Data Fetching:</h2>
      <PropertiesList listings={data} loading={isLoading} />
    </div>
  );
}
