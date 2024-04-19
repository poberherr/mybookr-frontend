import React from "react";
import { Controller } from "react-hook-form";

import { Checkbox, FormControlLabel, FormHelperText } from "@mui/material";

export default function StyledCheckbox({
  control,
  rules,
  errors,
  name,
  label,
  minimal,
  defaultChecked,
}) {
  const styles = minimal
    ? {
        margin: 0,
        span: { padding: "0px" },
        ".MuiSvgIcon-root": { fontSize: "1.1em" },
      }
    : {
        ".MuiTypography-root": {
          fontFamily: "AvenueMono",
          fontSize: "14px",
          color: "#303030",
        },
      };

  return (
    <div>
      <FormControlLabel
        label={label}
        control={
          <Controller
            name={name}
            control={control}
            rules={rules}
            render={({ field: { onChange, value } }) => (
              <Checkbox
                defaultChecked={defaultChecked}
                checked={value}
                onChange={(e) => onChange(e.target.checked)}
              />
            )}
          />
        }
        sx={styles}
      />
      {errors && (
        <FormHelperText
          style={{
            color: "#d32f2f",
          }}
        >
          {errors.message}
        </FormHelperText>
      )}
    </div>
  );
}
