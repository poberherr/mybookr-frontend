import React, { Suspense } from "react";

import SearchBar from "../components/search-bar/SearchBar";
import ExperiencesList from "../components/experiences/ExperiencesList";
import { ExperiencesListSkeleton } from "../components/experiences/ExperiencesListSkeleton";

export default function ListingsPage() {
  return (
    <div className="my-12 grid gap-12 px-4 py-0 md:px-16 lg:px-32 xl-px-40">
      <SearchBar />
      <Suspense fallback={<ExperiencesListSkeleton />}>
        <ExperiencesList />
      </Suspense>
    </div>
  );
}
