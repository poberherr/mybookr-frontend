import { useState } from "react";

import { Typography } from "@mui/material";

import { MaximizeCircle } from "iconsax-react";

import Counter from "../common/Counter";
import { Space } from "@/api";

type ExcludedSpace = Omit<Space, "guests_capacity" | "bedrooms">;

export default function SpaceSection() {
  const [spaces, setSpaces] = useState({
    single_beds: 0,
    double_beds: 0,
    bathrooms: 0,
  });

  const handlePropertySpace = (type: keyof ExcludedSpace, value: number) => {
    if (value >= 0) {
      setSpaces({
        ...spaces,
        [type]: value,
      });
    }
  };

  return (
    <div className="grid grid-cols-[auto_1fr] gap-4">
      <MaximizeCircle />

      <div className="grid gap-4">
        <Typography>Property Space</Typography>

        <div>
          {Object.entries(spaces).map(([key, count]) => (
            <div
              key={key}
              className="grid grid-cols-[1fr_auto] items-center gap-2"
            >
              <Typography>
                {key}
              </Typography>
              <Counter
                count={count}
                handleCount={(value) =>
                  handlePropertySpace(key as keyof ExcludedSpace, value)
                }
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
