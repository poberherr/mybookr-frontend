import React, { useEffect } from "react";
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

  const activities = experience.activities.map((activity) => ({
    title: activity.title,
    value: activity.id,
  }));

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
      placeholder="With which yacht do you want to cruise?"
    />
  );
}
