import ConfirmationPageComponent from "./ConfirmationPage";
import { graphql, useFragment } from "@/gql";
import { getSSRClient } from "@/app/api-helpers/urql";
import { ExperienceItem } from "@/app/fragments/experience-fragments";

const CheckoutQuery = graphql(`
  query CheckoutQuery($experienceId: ID!) {
    experience(id: $experienceId) {
      ...ExperienceItem
    }
  }
`);

export default async function CheckoutPage({
  params,
}: {
  params: { id: string };
}) {
  const result = await getSSRClient().query(CheckoutQuery, {
    experienceId: params.id,
  });
  const experience = useFragment(
    ExperienceItem,
    result.data?.experience,
  );
  if (!experience) {
    throw new Error("unable to load confirmation page results");
  }
  return <ConfirmationPageComponent listing={experience} />;
}

export const revalidate = false;
