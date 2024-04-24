import { useState } from "react";

import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";

import { Flashy } from "iconsax-react";
import { Amenity } from "@/app/api-helpers";

export default function AmenitySection() {
  const [amenities, setAmenities] = useState<Amenity>({
    wifi: false,
    parking: false,
    pool: false,
    fitness_center: false,
    pet_friendly: false,
    tv: false,
    kitchen: false,
    smoking_allowed: false,
    party_allowed: false,
    security_cameras: false,
  });

  const handleAmenities = (key: keyof Amenity) => {
    setAmenities({
      ...amenities,
      [key]: !amenities[key],
    });
  };

  return (
    <div className="grid grid-cols-[auto_1fr] gap-4">
      <Flashy />

      <div className="grid gap-4">
        <Typography>Amenities</Typography>

        <FormGroup className="!grid sm:grid-cols-2 sm:gap-x-8">
          {Object.entries(amenities).map(([key, value]) => (
            <FormControlLabel
              control={
                <Checkbox
                  name={key}
                  checked={value}
                  onChange={() => handleAmenities(key as keyof Amenity)}
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
