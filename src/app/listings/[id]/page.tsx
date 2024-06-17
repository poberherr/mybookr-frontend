import { graphql, useFragment } from "@/gql";
import ListingComponent from "./listing";
import { getSSRClient } from "@/app/helpers/urql";
import { ExperienceItem } from "@/app/fragments/experience-fragments";
import { renderMarkdown } from "@/app/helpers/renderMarkdown";

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

  const renderedDescription = await renderMarkdown(experience.description);
  const renderedActivityDescriptions: { [key: string]: string } = {};
  for (const activity of experience.activities) {
    renderedActivityDescriptions[activity.id] = await renderMarkdown(
      activity.description,
    );
  }
  return (
    <ListingComponent
      experience={experience}
      renderedDescription={renderedDescription}
      renderedActivityDescriptions={renderedActivityDescriptions}
    />
  );
}

export const revalidate = false;
