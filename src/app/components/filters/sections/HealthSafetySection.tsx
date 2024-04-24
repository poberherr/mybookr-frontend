import { useState } from "react";

import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";

import { HeartTick } from "iconsax-react";
import { HealthSafety } from "@/app/api-helpers";

export default function HealthSafetySection() {
  const [healthSafety, setHealthSafety] = useState<HealthSafety>({
    smoke_detectors_installed: false,
    first_aid_kit_available: false,
    fire_extinguisher_provided: false,
    emergency_contact_provided: false,
    regular_cleaning_protocols: false,
  });

  const handleAmenities = (key: keyof HealthSafety) => {
    setHealthSafety({
      ...healthSafety,
      [key]: !healthSafety[key],
    });
  };

  return (
    <div className="grid grid-cols-[auto_1fr] gap-4">
      <HeartTick />

      <div className="grid gap-4">
        <Typography>Health and Safety</Typography>

        <FormGroup className="!grid sm:grid-cols-2 sm:gap-x-8">
          {Object.entries(healthSafety).map(([key, value]) => (
            <FormControlLabel
              control={
                <Checkbox
                  name={key}
                  checked={value}
                  onChange={() => handleAmenities(key as keyof HealthSafety)}
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
