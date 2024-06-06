import React from "react";

import SearchBar from "../components/search-bar/SearchBar";
import { ListingsComponent } from "@/app/components/Listings";

export default async function ListingsPage() {
  return (
    <div className="my-12 grid gap-12 px-4 py-0 md:px-40">
      <SearchBar />
      <ListingsComponent />
    </div>
  );
}

export const revalidate = false;
