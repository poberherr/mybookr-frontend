import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";

import {
  coreListingsListQueryOptions,
  coreListingsReadQueryOptions,
  coreReviewsListQueryOptions,
} from "@/app/api-helpers";

import ListingComponent from "./listing";

export default async function ListingPage({
  params,
}: {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const queryClient = new QueryClient();

  const id = parseInt(params.id, 10);
  await queryClient.prefetchQuery(coreListingsReadQueryOptions(id));
  await queryClient.prefetchQuery(coreReviewsListQueryOptions());

  await queryClient.prefetchQuery(coreListingsListQueryOptions());

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ListingComponent id={params.id} />
    </HydrationBoundary>
  );
}

export const revalidate = false;