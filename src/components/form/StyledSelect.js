import React from "react";
import { Controller } from "react-hook-form";

import {
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  styled,
} from "@mui/material";

import { ReactComponent as DownArrowIcon } from "../../assets/icons/downArrow.svg";

export default function StyledSelect({
  control,
  rules,
  errors,
  fieldRef,
  id,
  label,
  name,
  placeholder,
  menuItems,
}) {
  const classes = {
    paper: {
      maxHeight: "200px",
      borderRadius: "8px",
      marginTop: "8px",
      boxShadow: "0px 3px 10px 3px rgba(0, 0, 0, 0.05)",
    },
  };

  return (
    <Wrapper>
      <InputLabel
        id={`${id}-label`}
        sx={{
          fontFamily: "AvenueMono",
          fontSize: "12px",
          color: "#303030",
          textTransform: "uppercase",
          marginBottom: "8px",
        }}
      >
        {label}
      </InputLabel>

      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({
          field: { onChange, onBlur, value },
          fieldState: { error },
        }) => (
          <Select
            error={!!error}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            ref={fieldRef}
            fullWidth
            displayEmpty
            id={id}
            labelId={`${id}-label`}
            renderValue={(selected) => {
              if (!selected) {
                return <div style={{ color: "#a1a1a1" }}>{placeholder}</div>;
              }
              return selected;
            }}
            IconComponent={DownArrowIcon}
            MenuProps={{
              PaperProps: { sx: classes.paper },
            }}
            sx={{
              borderRadius: "8px",
              boxShadow: "0px 3px 10px 3px rgba(0, 0, 0, 0.05)",
              ".MuiOutlinedInput-notchedOutline": { border: 0 },
              ".MuiSelect-select": {
                padding: "12px 20px",
                fontFamily: "AvenueMono",
              },
              ".MuiSelect-icon": {
                right: 20,
                top: "50%",
                translate: "0 -50%",
              },
            }}
          >
            {menuItems.map((item, index) => {
              return (
                <MenuItem
                  key={index}
                  value={item}
                  sx={{
                    fontFamily: "AvenueMono",
                  }}
                >
                  {item}
                </MenuItem>
              );
            })}
          </Select>
        )}
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
    </Wrapper>
  );
}

const Wrapper = styled("div")`
  width: 100%;
  height: min-content;
`;
