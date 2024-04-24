import React from "react";
import {
  Controller,
  FieldError,
  FieldValues,
  UseControllerProps,
} from "react-hook-form";

import {
  Checkbox,
  FormControlLabel,
  FormHelperText,
  SxProps,
  Theme,
} from "@mui/material";

interface StyledCheckboxProps {
  control: UseControllerProps<FieldValues>["control"];
  rules?: UseControllerProps<FieldValues>["rules"];
  errors?: FieldError;
  name: string;
  label: string;
  minimal?: boolean;
  defaultChecked?: boolean;
}

const StyledCheckbox: React.FC<StyledCheckboxProps> = ({
  control,
  rules,
  errors,
  name,
  label,
  minimal,
  defaultChecked,
}) => {
  const styles: SxProps<Theme> = minimal
    ? {
        margin: 0,
        span: { padding: "0px" },
        ".MuiSvgIcon-root": { fontSize: "1.1em" },
      }
    : {
        ".MuiTypography-root": {
          fontFamily: "Inter",
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
                checked={!!value}
                onChange={(e) => onChange(e.target.checked)}
              />
            )}
          />
        }
        sx={styles}
      />
      {errors && errors.message && (
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
};

export default StyledCheckbox;
