import React from "react";

import { QueryClient, dehydrate } from "@tanstack/react-query";

import { Clerk } from "../components/Clerk.tsx";
import { Layout } from "../components/Layout/index.js";
import { ListingsComponent } from "../components/Listings.tsx";

import { coreListingsListQueryOptions } from "../api/hooks/useCoreListingsList.ts";

const Home = () => {
  return (
    <Layout>
      <h1>mybookr initial feature test</h1>
      <h2>Listing data from API:</h2>
      <ListingsComponent />
      <Clerk />
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

export default Home;
