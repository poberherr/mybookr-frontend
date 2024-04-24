import React from "react";

import { default as lightningIcon } from "@/assets/icons/lightning.svg";

export default function BoostedBadge() {
  return (
    <div className="absolute left-0 top-4 grid h-9 w-16 place-items-center rounded-r-3xl rounded-l-none bg-white bg-opacity-30 backdrop-blur-md">
      <img className="h-7" src={lightningIcon} alt="lightning icon" />
    </div>
  );
}
