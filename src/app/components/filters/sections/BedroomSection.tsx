import { useState } from "react";

import { Typography } from "@mui/material";

import { HomeHashtag } from "iconsax-react";

import Counter from "../common/Counter";

export default function BedroomSection() {
  const [bedrooms, setBedrooms] = useState(0);

  const handleBedrooms = (value: number) => {
    if (value < 0) return;
    setBedrooms(value);
  };

  return (
    <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4">
      <HomeHashtag />

      <div className="grid">
        <Typography>Number of Bedrooms</Typography>
        <Typography className="!text-gray-500">{bedrooms} Bedrooms</Typography>
      </div>

      <Counter count={bedrooms} handleCount={handleBedrooms} />
    </div>
  );
}
