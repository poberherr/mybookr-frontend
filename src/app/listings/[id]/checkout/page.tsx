import CheckoutPageComponent from "./CheckoutMain";
import { graphql, useFragment } from "@/gql";
import { getSSRClient } from "@/app/helpers/urql";
import { ExperienceItem } from "@/app/fragments/experience-fragments";
import CheckoutWrapper from "./CheckoutWrapper";
import { encodeGlobalId } from "@/app/helpers/global-ids";

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
  const id = params.id.split("-")[0];
  const result = await getSSRClient().query(CheckoutQuery, {
    experienceId: encodeGlobalId("Experience", id),
  });
  const experience = useFragment(ExperienceItem, result.data?.experience);
  if (!experience) {
    throw new Error("unable to load checkout page results");
  }
  
  return <CheckoutWrapper experience={experience}/>;
}

export const revalidate = 60 * 60 * 1;
