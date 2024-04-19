import { IconButton, Typography } from "@mui/material";

import { AddSquare, MinusSquare } from "iconsax-react";

interface IProps {
  count: number;
  handleCount: (value: number) => void;
}

export default function Counter({ count, handleCount }: IProps) {
  return (
    <div className="flex items-center gap-1">
      <IconButton onClick={() => handleCount(count - 1)} disabled={count === 0}>
        <MinusSquare />
      </IconButton>

      <Typography>{count}</Typography>

      <IconButton edge="end" onClick={() => handleCount(count + 1)}>
        <AddSquare />
      </IconButton>
    </div>
  );
}
