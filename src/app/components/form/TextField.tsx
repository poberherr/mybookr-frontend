import React from "react";
import { Control, Controller, FieldError } from "react-hook-form";

import {
  FormHelperText,
  InputAdornment,
  InputLabel,
  TextField,
  styled,
} from "@mui/material";

interface StyledTextFieldProps {
  control: Control<any>;
  rules?: any; // Specify your type or leave as any if unknown
  errors?: FieldError;
  id: string;
  label: string;
  name: string;
  type?: string;
  disabled?: boolean;
  placeholder?: string;
  defaultHelper?: string;
  inputProps?: any; // Specify your type or leave as any if unknown
}

const Wrapper = styled("div")`
  width: 100%;
  height: min-content;
`;

export default function StyledTextField({
  control,
  rules,
  errors,
  id,
  label,
  name,
  type = "text",
  disabled,
  placeholder,
  defaultHelper,
  inputProps,
}: StyledTextFieldProps) {
  return (
    <Wrapper>
      <InputLabel
        id={`${id}-label`}
        sx={{
          marginBottom: "8px",
          fontFamily: "Inter",
          fontSize: "12px",
          color: "#303030",
          textTransform: "uppercase",
        }}
      >
        {label}
      </InputLabel>

      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextField
            error={!!error}
            onChange={onChange}
            value={value}
            id={id}
            fullWidth
            name={name}
            disabled={disabled}
            type={type}
            variant="outlined"
            placeholder={placeholder}
            inputProps={inputProps}
            sx={{
              borderRadius: "8px",
              "& fieldset": { borderRadius: "8px" },
              "& input": { padding: "12px 20px", fontFamily: "Inter" },
              boxShadow: "0px 3px 10px 3px rgba(0, 0, 0, 0.05)",
              ".MuiOutlinedInput-notchedOutline": { border: 0 },
            }}
          />
        )}
      />
      {(defaultHelper && !errors && (
        <FormHelperText>{defaultHelper}</FormHelperText>
      )) ||
        (errors && (
          <FormHelperText style={{ color: "#d32f2f" }}>
            {errors?.message}
          </FormHelperText>
        ))}
    </Wrapper>
  );
}
