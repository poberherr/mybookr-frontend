import { useState } from "react";

import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";

import { TickSquare } from "iconsax-react";

type Options = {
  free_cancellation: boolean;
  self_check_in: boolean;
};

export default function PreferenceSection() {
  const [options, setOptions] = useState<Options>({
    free_cancellation: false,
    self_check_in: false,
  });

  const handlePropertyTypeChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setOptions({
      ...options,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <div className="grid grid-cols-[auto_1fr] gap-4">
      <TickSquare />

      <div className="grid gap-4">
        <Typography>Booking Preferences</Typography>
        <FormGroup className="!grid grid-cols-2">
          {Object.entries(options).map(([key, value]) => (
            <FormControlLabel
              control={
                <Checkbox
                  name={key}
                  checked={value}
                  onChange={handlePropertyTypeChange}
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
