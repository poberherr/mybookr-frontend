import CheckoutPageComponent from "./CheckoutPage";

export default async function CheckoutPage({
  params,
}: {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  return <CheckoutPageComponent id={params.id} />;
}

export const revalidate = false;
