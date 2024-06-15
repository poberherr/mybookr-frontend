import React from "react";
import { Control, Controller, FieldError, FieldValues } from "react-hook-form";

import {
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  styled,
} from "@mui/material";

import DownArrowIcon from "@/assets/icons/downArrow.svg";

interface StyledSelectProps<TFieldValues extends FieldValues> {
  control: Control<TFieldValues>;
  rules?: any;
  errors?: Partial<FieldError>;
  fieldRef?: React.Ref<any>;
  id: string;
  label: string;
  name: string;
  placeholder: string;
  menuItems: { title?: string; value: string | number }[];
}

function StyledSelect<TFieldValues extends FieldValues>({
  control,
  rules,
  errors,
  fieldRef,
  id,
  label,
  name,
  placeholder,
  menuItems,
}: StyledSelectProps<TFieldValues>) {
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
          fontFamily: "Inter",
          fontSize: "12px",
          color: "#303030",
          textTransform: "uppercase",
          marginBottom: "8px",
        }}
      >
        {label}
      </InputLabel>

      <Controller
        name={name as any}
        control={control}
        rules={rules}
        render={({
          field: { onChange, onBlur, value },
          fieldState: { error },
        }) => (
          <Select
            error={!!error}
            value={!value ? "" : value}
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
              const item = menuItems.find((item) => item.value === selected);
              return item?.title || item?.value;
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
                fontFamily: "Inter",
              },
              ".MuiSelect-icon": {
                right: 20,
                top: "50%",
                translate: "0 -50%",
              },
            }}
          >
            {menuItems.map((item, index) => (
              <MenuItem key={index} value={item.value} sx={{ fontFamily: "Inter" }}>
                {item.title || item.value}
              </MenuItem>
            ))}
          </Select>
        )}
      />
      {errors && (
        <FormHelperText style={{ color: "#d32f2f" }}>
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

export default StyledSelect;
