"use client";

import React, { Suspense } from "react";

import SearchBar from "../components/search-bar/SearchBar";
import PropertiesList from "../components/properties/PropertiesList";

export default function ListingsPage() {
  return (
    <div className="my-12 grid gap-12 px-4 py-0 md:px-40">
      <SearchBar />
      <Suspense>
        <PropertiesList />
      </Suspense>
    </div>
  );
}
