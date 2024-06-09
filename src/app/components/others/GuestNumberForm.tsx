import React, { useEffect } from "react";
import { useFormContext } from "react-hook-form";

import StyledSelect from "../form/StyledSelect";

export default function GuestNumberForm() {
  const {
    control,
    watch,
    setValue,
    formState: { errors },
  } = useFormContext();
  const guestNumber = watch("guest");

  useEffect(() => {
    // Here we directly update the context's guest value.
    setValue("guest", guestNumber, { shouldValidate: true });
  }, [guestNumber, setValue]);

  const formValidator = {
    guest: {
      required: {
        value: true,
        message: "Guest number is required.", // Simplified message.
      },
    },
  };

  return (
    <StyledSelect
      name="guest"
      id="guest"
      control={control}
      label="Guests"
      menuItems={[{ value: 1 }, { value: 2 }, { value: 3 }, { value: 4 }]} // Updated to include 3 guests as an option.
      rules={formValidator.guest}
      errors={errors.guest}
      placeholder="Select number of guests"
    />
  );
}
