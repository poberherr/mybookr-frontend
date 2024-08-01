import { ExperienceItemFragment } from "@/gql/graphql";
import { useMemo } from "react";

export const useGroupedExperiences = (
  experiences?: ExperienceItemFragment[],
) => {
  return useMemo(() => {
    if (!experiences) {
      return undefined;
    }
    const grouped: {
      [key: string]: {
        experiences: ExperienceItemFragment[];
        category: ExperienceItemFragment["category"];
      };
    } = {};

    experiences.forEach((experience) => {
      if (!experience.category) {
        return;
      }
      const categoryName = experience.category.name;
      if (!grouped[categoryName]) {
        grouped[categoryName] = {
          experiences: [],
          category: experience.category,
        };
      }
      grouped[categoryName].experiences.push(experience);
    });

    return grouped;
  }, [experiences]);
};
