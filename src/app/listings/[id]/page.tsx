import ListingComponent from "./listing";

export default async function ListingPage({
  params,
}: {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  return <ListingComponent id={params.id} />;
}

export const revalidate = false;
