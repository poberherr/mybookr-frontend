import React from "react";
import { Controller } from "react-hook-form";

import { FormHelperText, InputLabel, styled } from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";

import { TextInput } from "../Authentication/Styles";

export default function StyledDatePicker({
  control,
  rules,
  errors,
  id,
  label,
  name,
  defaultHelper,
}) {
  return (
    <Wrapper>
      <InputLabel
        id={`${id}-label`}
        sx={{
          marginBottom: "4px",
          fontFamily: "AvenueMono",
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
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <MobileDatePicker
              inputFormat="dd/MM/yyyy"
              value={value}
              name={name}
              disableFuture
              id={id}
              error={!!error}
              onChange={onChange}
              renderInput={(params) => (
                <TextInput
                  {...params}
                  fullWidth
                  placeholder="DD/MM/YYYY"
                  variant="outlined"
                />
              )}
            />
          </LocalizationProvider>
        )}
      />
      {(defaultHelper && !errors && (
        <FormHelperText>{defaultHelper}</FormHelperText>
      )) ||
        (errors && (
          <FormHelperText
            style={{
              color: "#d32f2f",
            }}
          >
            {errors.message}
          </FormHelperText>
        ))}
    </Wrapper>
  );
}

const Wrapper = styled('div')`
  width: 100%;
  height: min-content;
`;
