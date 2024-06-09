import { graphql, useFragment } from "@/gql";
import ListingComponent from "./listing";
import { getSSRClient } from "@/app/helpers/urql";
import { ExperienceItem } from "@/app/fragments/experience-fragments";

const ExperienceQuery = graphql(`
  query ExperienceQuery($experienceId: ID!) {
    experience(id: $experienceId) {
      ...ExperienceItem
    }
  }
`);

export default async function ListingPage({
  params,
}: {
  params: { id: string };
}) {
  const result = await getSSRClient().query(ExperienceQuery, {
    experienceId: params.id,
  });
  const experience = useFragment(ExperienceItem, result.data?.experience);
  if (!experience) {
    throw new Error("unable to experience detail page results");
  }
  return <ListingComponent listing={experience} />;
}

export const revalidate = false;
