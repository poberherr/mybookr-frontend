"use client";

import React, { useCallback, useState } from "react";
import { Controller, useForm } from "react-hook-form";

import {
  Button,
  Checkbox,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
} from "@mui/material";

import { SButton } from "../ui/SButton";

const styles = {
  input:
    "cursor-pointer rounded-lg bg-white px-5 py-3 shadow-csm appearance-none outline-none focus:outline-black",
  label: "text-left md:text-right mt-4 md:mt-0 inline-block",
};

interface JoinUsFormData {
  project_name: string;
  name: string;
  category: string;
  number_of_rooms: number;
  number_of_villas: number;
  bookings_per_year: number;
  email: string;
  is_serious: boolean;
  bot_field: string;
}

const categories: {
  [key: string]: { label: string; id: keyof JoinUsFormData };
} = {
  "Hotel Management Group": {
    label: "Total number of rooms",
    id: "number_of_rooms",
  },
  Hotel: {
    label: "Total number of rooms",
    id: "number_of_rooms",
  },
  "Villa or B&B": {
    label: "Number of villas",
    id: "number_of_villas",
  },
  Retreats: {
    label: "Number of bookings per year",
    id: "bookings_per_year",
  },
  Tours: {
    label: "Number of bookings per year",
    id: "bookings_per_year",
  },
  Other: {
    label: "Number of bookings per year",
    id: "bookings_per_year",
  },
};

const JoinForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogContent, setDialogContent] = useState("");

  const { control, register, handleSubmit, watch, reset } =
    useForm<JoinUsFormData>({
      defaultValues: {
        category: Object.keys(categories)[0],
        is_serious: false,
      },
    });

  const category = watch("category");

  const onSubmit = useCallback(
    async (data: JoinUsFormData) => {
      setIsSubmitting(true);

      try {
        if (data.bot_field) {
          throw new Error("Thank you. Bye.");
        }
        const formData = new FormData();

        formData.append("project_name", data.project_name);
        formData.append("name", data.name);
        formData.append("category", data.category);
        data.number_of_rooms &&
          formData.append("number_of_rooms", String(data.number_of_rooms));
        data.number_of_villas &&
          formData.append("number_of_villas", String(data.number_of_villas));
        data.bookings_per_year &&
          formData.append("bookings_per_year", String(data.bookings_per_year));
        formData.append("email", data.email);
        formData.append("is_serious", data.is_serious ? "true" : "false");

        const response = await fetch("/api/join-us", {
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          setDialogContent("Thank you. We will contact you soon!");
          reset();
        } else {
          setDialogContent("Submission failed. Please try again.");
        }
        setDialogOpen(true);
      } catch (error) {
        console.error("Failed to submit form", error);
        setDialogContent("An error occurred. Please try again later.");
        setDialogOpen(true);
      } finally {
        setIsSubmitting(false);
      }
    },
    [reset, setDialogOpen, setDialogContent, setIsSubmitting],
  );

  const closeDialog = useCallback(() => {
    setDialogOpen(false);
  }, []);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-8 grid w-full max-w-screen-sm grid-cols-1 items-center gap-2 md:grid-cols-[200px_1fr] md:gap-6"
    >
      <div className="hidden">
        <label>
          Don't fill this out if you're human:{" "}
          <input {...register("bot_field")} />
        </label>
      </div>

      <label className={styles.label} htmlFor="project_name">
        Project or Company Name*
      </label>
      <input
        {...register("project_name", { required: true })}
        className={styles.input}
        id="project_name"
      />

      <label className={styles.label} htmlFor="email">
        Email*
      </label>
      <input
        {...register("email", { required: true, pattern: /^\S+@\S+\.\S+$/ })}
        type="email"
        className={styles.input}
        id="email"
      />

      <label className={styles.label} htmlFor="category">
        Business Category*
      </label>
      <select
        {...register("category", { required: true })}
        className={styles.input}
        id="category"
      >
        {Object.keys(categories).map((key) => (
          <option key={key} value={key}>
            {key}
          </option>
        ))}
      </select>

      {Object.entries(categories).map(([key, { label, id }]) => (
        <React.Fragment key={key}>
          <label
            className={styles.label}
            style={{ display: category === key ? "block" : "none" }}
            htmlFor={id}
          >
            {label}
          </label>
          <input
            type="number"
            {...register(id)}
            className={styles.input}
            style={{ display: category === key ? "block" : "none" }}
            id={id}
          />
        </React.Fragment>
      ))}

      <label className={styles.label} htmlFor="name">
        Your Name, if you like to be addressed correctly
      </label>
      <input {...register("name")} className={styles.input} id="name" />

      <div className="mt-4 flex items-center md:col-span-2 md:mt-0">
        <Controller
          name="is_serious"
          control={control}
          render={({ field }) => (
            <Checkbox
              {...field}
              id="is_serious"
              checked={field.value}
              className="!mr-2 !inline-block"
            />
          )}
        />
        <label className={`${styles.label} !text-center`} htmlFor="is_serious">
          Yes, I'm committed and request a Memorandum of Understanding (MOU).
        </label>
      </div>
      <div className="flex justify-center md:col-span-2">
        <SButton
          type="submit"
          disabled={isSubmitting}
          startIcon={
            isSubmitting ? <CircularProgress size={24} color="warning" /> : null
          }
        >
          Apply
        </SButton>
      </div>

      <Dialog open={dialogOpen} onClose={closeDialog}>
        <DialogContent>
          <DialogContentText>{dialogContent}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeDialog}>Close</Button>
        </DialogActions>
      </Dialog>
    </form>
  );
};

export default JoinForm;
