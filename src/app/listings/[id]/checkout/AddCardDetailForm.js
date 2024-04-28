import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { Divider } from "@mui/material";

// import StyledAutocomplete from "@/app/components/Form/StyledAutocomplete";
import StyledTextField from "@/app/components/form/TextField";

import CardIcon from "@/assets/icons/card.svg";

// import { countriesCode } from "../../utils/countryDb";

export default function AddCardDetailForm({ setIsFormValid }) {
  const [formData, setFormData] = useState({
    cardNumber: "",
    expiration: "",
    cvv: "",
    postcode: "",
    country: "",
  });
  // React Hook Form
  const {
    control,
    watch,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      cardNumber: "",
      expiration: "",
      cvv: "",
      postcode: "",
      country: null,
    },
  });

  useEffect(() => {
    setIsFormValid(isValid);
  }, [isValid, setIsFormValid]);

  useEffect(() => {
    const subscription = watch((data) => setFormData(data));
    return () => subscription.unsubscribe;
  }, [setFormData, watch]);

  console.log(formData);

  const formValidator = {
    cardNumber: {
      required: {
        value: true,
        message: "! This field is required.",
      },
      validate: {
        minLength: (v) =>
          v.length < 16 ? "! Must have at least 16 digits." : null,
      },
    },

    expiration: {
      required: {
        value: true,
        message: "! This field is required.",
      },
      validate: {
        pattern: (v) =>
          /^\d{2}[/]\d{2}$/.test(v) || "! Invalid format (MM/YY).",
      },
    },

    cvv: {
      required: {
        value: true,
        message: "! This field is required.",
      },
      validate: {
        minLength: (v) =>
          v.length < 3 ? "! Must have at least 3 digits." : null,
      },
    },

    postcode: {
      required: {
        value: true,
        message: "! This field is required.",
      },
      validate: {
        minLength: (v) =>
          v.length < 5 ? "! Must have at least 5 digits." : null,
      },
    },

    country: {
      required: {
        value: true,
        message: "! This field is required.",
      },
    },
  };

  let countriesName = [];
  countriesCode.map((item) => countriesName.push(item.country));

  return (
    <div className="grid gap-8">
      {/* Card number */}
      <StyledTextField
        control={control}
        rules={formValidator.cardNumber}
        errors={errors.cardNumber}
        id="cardNumber"
        label="Card number"
        name="cardNumber"
        placeholder="0000 0000 0000 0000"
        icon={<CardIcon />}
        mask="9999 9999 9999 9999"
      />

      {/* Expiration and CVV */}
      <div className="grid grid-cols-2 gap-4">
        {/* Expiration */}
        <StyledTextField
          control={control}
          rules={formValidator.expiration}
          errors={errors.expiration}
          id="expiration"
          name="expiration"
          label="Expiration"
          placeholder="MM/YY"
          mask="99/99"
        />

        {/* CVV */}
        <StyledTextField
          control={control}
          rules={formValidator.cvv}
          errors={errors.cvv}
          id="cvv"
          name="cvv"
          label="CVV"
          placeholder="123"
          mask="999"
        />
      </div>

      <Divider />

      {/* Postcode */}
      <StyledTextField
        control={control}
        rules={formValidator.postcode}
        errors={errors.postcode}
        id="postcode"
        name="postcode"
        label="Postcode"
        placeholder="12345"
        mask="99999"
      />

      {/* Country */}
      {/* <StyledAutocomplete
        control={control}
        rules={formValidator.country}
        errors={errors.country}
        id="country"
        label="Country"
        name="country"
        options={countriesName}
      /> */}
    </div>
  );
}
