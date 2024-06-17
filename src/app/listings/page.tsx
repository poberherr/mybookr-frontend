import React, { Suspense } from "react";

import SearchBar from "../components/search-bar/SearchBar";
import PropertiesList from "../components/properties/PropertiesList";
import { PropertiesListSkeleton } from "../components/properties/PropertiesListSkeleton";

export default function ListingsPage() {
  return (
    <div className="my-12 grid gap-12 px-4 py-0 md:px-40">
      <SearchBar />
      <Suspense fallback={<PropertiesListSkeleton />}>
        <PropertiesList />
      </Suspense>
    </div>
  );
}
