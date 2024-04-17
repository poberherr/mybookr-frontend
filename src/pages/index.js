import React from "react";

import { QueryClient, dehydrate } from "@tanstack/react-query";

import { Clerk } from "../components/Clerk.tsx";
import { Layout } from "../components/Layout/index.js";
import { ListingsComponent } from "../components/Listings.tsx";
import { Stripe } from "../components/Stripe.tsx";

import { coreListingsListQueryOptions } from "../api/hooks/useCoreListingsList.ts";

const Home = () => {
  return (
    <Layout>
      <div className="gap-12 flex flex-col">
        <h1>mybookr initial feature test</h1>
        <ListingsComponent />
        <Stripe />
        <Clerk />
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

export default Home;

export const revalidate = false;
