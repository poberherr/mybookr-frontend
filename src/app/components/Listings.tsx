"use client";

// @todo we should get rid of the whole wrapper component? yes no? maybe? cleaner? no?
import React from "react";

// import { useListingsList } from "../api-helpers/hooks/";

import data from '../data.json' assert { type: 'json' }

// Adjust the import path
import { Listing } from "../api-helpers/types/Listing";
// Ensure this path is correct
import PropertiesList from "./properties/PropertiesList";

export function ListingsComponent() {
  // const { data, isLoading } = useListingsList<Listing[]>();

  // @todo why is error always never? kubb/swagger-tanstack does this weirdly. we have to check what now happens when API returns an error
  // if (isLoading) return <div>Loading...</div>;
  // if (error) return <div>An error occurred: {error.message}</div>;+

  const isLoading = false;

  return <PropertiesList listings={data as Listing[]} loading={isLoading} />;
}
