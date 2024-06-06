import ConfirmationPageComponent from "./ConfirmationPage";

export default async function CheckoutPage({
  params,
}: {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  return <ConfirmationPageComponent id={params.id} />;
}

export const revalidate = false;
