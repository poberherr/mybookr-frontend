import React, { useEffect, useMemo } from "react";
import { useFormContext } from "react-hook-form";

import StyledSelect from "../form/StyledSelect";
import { ExperienceItemFragment } from "@/gql/graphql";
import { CheckoutStartForm } from "@/app/listings/[id]/CheckoutStart";

interface IProps {
  experience: ExperienceItemFragment;
}
export default function ActivityForm({ experience }: IProps) {
  const {
    control,
    watch,
    setValue,
    formState: { errors },
  } = useFormContext<CheckoutStartForm>();
  const activityId = watch("activityId");

  useEffect(() => {
    setValue("activityId", activityId, { shouldValidate: true });
  }, [activityId, setValue]);

  const activities = useMemo(() => {
    return experience.activities.map((activity) => ({
      title: activity.title,
      value: activity.id,
    }));
  }, [experience]);

  const formValidator = {
    activityId: {
      required: {
        value: true,
        message: "Please select your yacht so we can determine your price.",
      },
    },
  };

  return (
    <StyledSelect
      name="activityId"
      id="activityId"
      control={control}
      label="Cruise Type"
      menuItems={activities}
      rules={formValidator.activityId}
      errors={errors.activityId}
      placeholder="Please select your yacht..."
    />
  );
}
