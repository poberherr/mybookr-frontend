import { useState } from "react";

import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";

import { SafeHome } from "iconsax-react";

import { Accessibility } from "@/app/api-helpers";

export default function AccessibilitySection() {
  const [accessibilityOptions, setAccessibilityOptions] =
    useState<Accessibility>({
      accessible_entrance: false,
      elevator: false,
      accessible_parking: false,
      ramp: false,
    });

  const handleAmenities = (key: keyof Accessibility) => {
    setAccessibilityOptions({
      ...accessibilityOptions,
      [key]: !accessibilityOptions[key],
    });
  };

  return (
    <div className="grid grid-cols-[auto_1fr] gap-4">
      <SafeHome />

      <div className="grid gap-4">
        <Typography>Accessibility</Typography>

        <FormGroup className="!grid sm:grid-cols-2 sm:gap-x-8">
          {Object.entries(accessibilityOptions).map(([key, value]) => (
            <FormControlLabel
              control={
                <Checkbox
                  name={key}
                  checked={value}
                  onChange={() => handleAmenities(key as keyof Accessibility)}
                />
              }
              key={key}
              label={key}
              className="!mr-0"
            />
          ))}
        </FormGroup>
      </div>
    </div>
  );
}
