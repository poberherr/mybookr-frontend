import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";

import {
  listingsListQueryOptions,
  listingsReadQueryOptions,
} from "@/app/api-helpers";

import CheckoutPageComponent from "./CheckoutPage";

export default async function CheckoutPage({
  params,
}: {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const queryClient = new QueryClient();

  const id = parseInt(params.id, 10);
  await queryClient.prefetchQuery(listingsReadQueryOptions(id));

  await queryClient.prefetchQuery(listingsListQueryOptions());

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <CheckoutPageComponent id={params.id} />
    </HydrationBoundary>
  );
}

export const revalidate = false;