import { useMemo } from "react";
import { decodeGlobalId } from "./global-ids";
import { ExperienceItemFragment } from "@/gql/graphql";

export const useExperienceURL = (experience: ExperienceItemFragment) => {
  return `/listings/${decodeGlobalId(experience.id).id}-${experience.slug}`;
}