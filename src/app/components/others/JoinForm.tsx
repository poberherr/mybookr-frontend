"use client";

import React, { useState } from "react";

import { Checkbox } from "@mui/material";

import { SButton } from "../ui/SButton";

const styles = {
  input:
    "cursor-pointer rounded-lg bg-white px-5 py-3 shadow-csm appearance-none",
  label: "MuiTypography-caption text-right",
};

const categories = {
  "Hotel Management Group": "Total number of rooms",
  Hotel: "Total number of rooms",
  "Villa/ B&B": "Number of villas",
  Retreats: "Number of Retreats/ Tours per year",
  Tours: "Number of Retreats/ Tours per year",
  Other: "Number of bookings per year",
};

const JoinForm = () => {
  const [category, setCategory] = useState<string>(Object.keys(categories)[0]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    alert("Thank you. We will contact you soon!");
  };

  const handleCategoryChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setCategory(value);
  };

  return (
    <form
      name="join-request"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="grid grid-cols-[200px_1fr] gap-6 w-full max-w-screen-sm mt-8 items-center"
    >
      <input type="hidden" name="form-name" value="join-request" />
      <div className="hidden">
        <label>
          Don’t fill this out if you’re human: <input name="bot-field" />
        </label>
      </div>

      <label className={styles.label}>Project or Company Name*</label>
      <input name="projectName" required className={styles.input} />

      <label className={styles.label}>Business Category*</label>
      <select
        name="category"
        required
        className={`${styles.input}`}
        onChange={handleCategoryChange}
      >
        {Object.keys(categories).map((key) => (
          <option key={key} value={key}>
            {key}
          </option>
        ))}
      </select>

      {Object.entries(categories).map(([key, label]) => (
        <>
          <label
            className={styles.label}
            style={{ display: category === key ? "block" : "none" }}
          >
            {label}
          </label>
          <input
            type="number"
            name={label}
            className={styles.input}
            style={{ display: category === key ? "block" : "none" }}
          />
        </>
      ))}

      <label className={styles.label}>
        Your Name, if you like to be addressed correctly
      </label>
      <input name="name" className={styles.input} />

      <label className={styles.label}>Email*</label>
      <input type="email" name="email" required className={styles.input} />

      <div className="col-span-2">
        <Checkbox name="seriousToggle" className={`!inline-block !mr-2`} />
        <label className={styles.label}>
          Yes, I am serious about it and want a MOU.
        </label>
      </div>
      <div className="col-span-2 flex justify-center">
        <SButton type="submit" value="Submit">
          Apply
        </SButton>
      </div>
    </form>
  );
};

export default JoinForm;
