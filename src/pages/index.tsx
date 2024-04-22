import React from "react";

import dynamic from "next/dynamic";

import { QueryClient, dehydrate } from "@tanstack/react-query";

import { Layout } from "@/components/Layout";
import { ListingsComponent } from "@/components/Listings";

import { coreListingsListQueryOptions } from "../api/hooks/useCoreListingsList";

const DynamicSearchBar = dynamic(
  () => import("@/components/search-bar/SearchBar"),
  {
    loading: () => <p>Loading...</p>,
  },
);

const HomePage = () => {
  return (
    <Layout>
      <div className="my-12 grid gap-12 px-4 py-0 md:px-40">
        <DynamicSearchBar />
        <ListingsComponent />
      </div>
    </Layout>
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
