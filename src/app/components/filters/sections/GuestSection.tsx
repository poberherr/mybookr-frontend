import { useState } from "react";

import { Typography } from "@mui/material";

import { Profile2User } from "iconsax-react";

import Counter from "../common/Counter";

export default function GuestSection() {
  const [guests, setGuests] = useState(0);

  const handleGuests = (value: number) => {
    if (value < 0) return;
    setGuests(value);
  };

  return (
    <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4">
      <Profile2User />

      <div className="grid">
        <Typography>Number of Guests</Typography>
        <Typography className="!text-gray-500">{guests} Guests</Typography>
      </div>

      <Counter count={guests} handleCount={handleGuests} />
    </div>
  );
}
