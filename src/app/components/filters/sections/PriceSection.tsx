import { useState } from "react";

import { Slider, Typography } from "@mui/material";

import { Wallet1 } from "iconsax-react";

const minDistance = 10;
const maxPrice = 259;

export default function PriceSection() {
  const [priceRange, setPriceRange] = useState([0, maxPrice]);

  const handleChange = (
    event: Event,
    newValue: number | number[],
    activeThumb: number,
  ) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setPriceRange([
        Math.min(newValue[0], priceRange[1] - minDistance),
        priceRange[1],
      ]);
    } else {
      setPriceRange([
        priceRange[0],
        Math.max(newValue[1], priceRange[0] + minDistance),
      ]);
    }
  };

  return (
    <div className="grid grid-cols-[auto_1fr] gap-4">
      <Wallet1 />

      <div className="grid gap-4">
        <Typography>Price per Night</Typography>

        <div className="grid justify-items-center gap-2">
          <div className="flex gap-4">
            <Typography>{priceRange[0]}$</Typography>
            <Typography className="!text-gray-500">to</Typography>
            <Typography>{priceRange[1]}$</Typography>
          </div>

          <Slider
            getAriaLabel={() => "Price Range"}
            value={priceRange}
            onChange={handleChange}
            valueLabelDisplay="auto"
            getAriaValueText={(value) => `${value}$`}
            min={0}
            max={maxPrice}
            disableSwap
            className="max-w-[calc(100%_-_16px)]"
          />
        </div>
      </div>
    </div>
  );
}
