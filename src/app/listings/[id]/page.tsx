import { graphql, useFragment } from "@/gql";
import ListingComponent from "./listing";
import { getSSRClient } from "@/app/helpers/urql";
import { ExperienceItem } from "@/app/fragments/experience-fragments";
import { renderMarkdown } from "@/app/helpers/renderMarkdown";
import { encodeGlobalId } from "@/app/helpers/global-ids";
import Head from "next/head";
import { useExperienceURL } from "@/app/helpers/urls";

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
  const id = params.id.split("-")[0];
  const result = await getSSRClient().query(ExperienceQuery, {
    experienceId: encodeGlobalId("Experience", id),
  });
  const experience = useFragment(ExperienceItem, result.data?.experience);
  if (!experience) {
    throw new Error(
      `Unable to locate experience and to generate detail page: param:${params.id} extract:${id} global:${encodeGlobalId("Experience", id)}`,
    );
  }
  const experienceUrl = useExperienceURL(experience);

  const renderedDescription = await renderMarkdown(experience.description);
  const renderedActivityDescriptions: { [key: string]: string } = {};
  for (const activity of experience.activities) {
    renderedActivityDescriptions[activity.id] = await renderMarkdown(
      activity.description,
    );
  }
  return (
    <>
      <Head>
        <link rel="canonical" href={`https://mybookr.io${experienceUrl}`} />
        <title>Book {experience.title} via mybookr.io</title>
      </Head>
      <ListingComponent
        experience={experience}
        renderedDescription={renderedDescription}
        renderedActivityDescriptions={renderedActivityDescriptions}
      />
    </>
  );
}

export const revalidate = false;
