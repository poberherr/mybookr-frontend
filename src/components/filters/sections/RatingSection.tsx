import { useState } from "react";

import { Typography } from "@mui/material";
import Rating from "@mui/material/Rating";

import { Star1 } from "iconsax-react";

const labels = {
  1: "Awful",
  2: "Poor",
  3: "Ok",
  4: "Good",
  5: "Excellent",
};

function getLabelText(value: number) {
  return `${value} Star${value !== 1 ? "s" : ""}, ${
    labels[value as keyof typeof labels]
  }`;
}

export default function HoverRating() {
  const [value, setValue] = useState(0);
  const [hover, setHover] = useState(-1);

  return (
    <div className="grid grid-cols-[auto_1fr] gap-4">
      <Star1 />

      <div className="grid gap-4">
        <Typography>Rating</Typography>

        <div className="flex  gap-4">
          <Rating
            name="rating"
            value={value}
            getLabelText={getLabelText}
            onChange={(_, newValue) => {
              setValue(newValue as number);
            }}
            onChangeActive={(_, newHover) => {
              setHover(newHover);
            }}
            icon={<Star1 variant="Bold" className="!text-inherit" />}
            emptyIcon={<Star1 className="!-inherit" />}
          />
          {value !== null && (
            <Typography>
              {hover !== -1
                ? labels[hover as keyof typeof labels]
                : labels[value as keyof typeof labels]}
            </Typography>
          )}
        </div>
      </div>
    </div>
  );
}
