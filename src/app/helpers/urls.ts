import { useMemo } from "react";
import { decodeGlobalId } from "./global-ids";
import { ExperienceItemFragment } from "@/gql/graphql";

export const useExperienceURL = (experience: ExperienceItemFragment) => {
  const url = useMemo(() => {
    return `/listings/${decodeGlobalId(experience.id).id}-${experience.slug}`;
  }, []);
  return url
}