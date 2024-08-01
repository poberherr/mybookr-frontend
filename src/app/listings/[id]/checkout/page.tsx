import CheckoutPageComponent from "./CheckoutMain";
import { graphql, useFragment } from "@/gql";
import { getSSRClient } from "@/app/helpers/urql";
import { ExperienceItem } from "@/app/fragments/experience-fragments";
import CheckoutWrapper from "./CheckoutWrapper";

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
  const experience = useFragment(ExperienceItem, result.data?.experience);
  if (!experience) {
    throw new Error("unable to load checkout page results");
  }
  
  return <CheckoutWrapper experience={experience}/>;
}

export const revalidate = false;
