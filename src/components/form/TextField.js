import React from "react";
import { Controller } from "react-hook-form";
import InputMask from "react-input-mask";

import {
  FormHelperText,
  InputAdornment,
  InputLabel,
  TextField,
  styled,
} from "@mui/material";

export default function StyledTextField({
  control,
  rules,
  errors,
  id,
  label,
  name,
  type,
  disabled,
  readOnly,
  placeholder,
  defaultHelper,
  inputProps,
  onKeyPress,
  customAdornment,
  icon,
  mask,
  maskChar,
}) {
  const simpleAdornment = !customAdornment &&
    icon && {
      endAdornment: (
        <InputAdornment position="start">
          <img src={icon} height="20px" width="auto" alt="" />
        </InputAdornment>
      ),
    };
  return (
    <Wrapper>
      <InputLabel
        id={`${id}-label`}
        sx={{
          marginBottom: "8px",
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
        render={({ field: { onChange, value }, fieldState: { error } }) =>
          // InputMask only takes effect if a 'mask' prop exists
          mask ? (
            <InputMask
              mask={mask ? mask : ""}
              maskChar={maskChar ? maskChar : null}
              value={value}
              onChange={onChange}
            >
              {(maskProps) => (
                <TextField
                  {...maskProps}
                  error={!!error}
                  onChange={onChange}
                  value={value}
                  id={id}
                  fullWidth
                  name={name}
                  disabled={disabled}
                  readOnly={readOnly}
                  type={type ? type : "text"}
                  variant="outlined"
                  placeholder={placeholder}
                  inputProps={inputProps}
                  onKeyPress={onKeyPress}
                  InputProps={
                    customAdornment ? customAdornment : simpleAdornment
                  }
                  sx={{
                    borderRadius: "8px",
                    "& fieldset": {
                      borderRadius: "8px",
                    },
                    "& input": {
                      padding: "12px 20px",
                      fontFamily: "AvenueMono",
                    },
                    boxShadow: "0px 3px 10px 3px rgba(0, 0, 0, 0.05)",
                    ".MuiOutlinedInput-notchedOutline": { border: 0 },
                  }}
                />
              )}
            </InputMask>
          ) : (
            <TextField
              error={!!error}
              onChange={onChange}
              value={value}
              id={id}
              fullWidth
              name={name}
              disabled={disabled}
              readOnly={readOnly}
              type={type ? type : "text"}
              variant="outlined"
              placeholder={placeholder}
              inputProps={inputProps}
              onKeyPress={onKeyPress}
              InputProps={customAdornment ? customAdornment : simpleAdornment}
              sx={{
                borderRadius: "8px",
                "& fieldset": {
                  borderRadius: "8px",
                },
                "& input": {
                  padding: "12px 20px",
                  fontFamily: "AvenueMono",
                },
                boxShadow: "0px 3px 10px 3px rgba(0, 0, 0, 0.05)",
                ".MuiOutlinedInput-notchedOutline": { border: 0 },
              }}
            />
          )
        }
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

const Wrapper = styled("div")`
  width: 100%;
  height: min-content;
`;
