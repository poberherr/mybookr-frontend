import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";

import {
  listingsReadQueryOptions,
} from "@/app/api-helpers";

import ConfirmationPageComponent from "./ConfirmationPage";

export default async function CheckoutPage({
  params,
}: {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const queryClient = new QueryClient();

  const id = parseInt(params.id, 10);
  await queryClient.prefetchQuery(listingsReadQueryOptions(id));

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ConfirmationPageComponent id={params.id} />
    </HydrationBoundary>
  );
}

export const revalidate = false;