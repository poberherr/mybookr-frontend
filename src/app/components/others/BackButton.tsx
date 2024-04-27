import React from "react";

import { useRouter } from "next/navigation";

import { Typography } from "@mui/material";

import LeftArrowIcon from "@/assets/icons/leftArrow.svg";

import useScrollDirection from "@/app/helpers/useScrollDirection";

export default function BackButton({ pageName }: { pageName: string }) {
  const router = useRouter();

  const scrollDirection = useScrollDirection();
  const backButtonTopClass = scrollDirection === "down" ? "top-4" : "top-20";

  return (
    <div
      className={`fixed left-4 z-[2] grid h-6 w-6 cursor-pointer place-items-center rounded-full bg-white shadow-csm transition-all duration-500 ${backButtonTopClass} md:static md:grid md:h-auto md:w-max md:grid-cols-[auto_max-content] md:items-center md:gap-8 md:bg-transparent md:p-[64px_166px_0px_166px] md:shadow-none`}
      onClick={() => router.back()}
    >
      <LeftArrowIcon
        className="relative right-[1px] w-2.5 sm:right-0"
        alt={"left arrow icon"}
      />

      <Typography className="hidden md:block md:uppercase" variant="body1">
        Back to {pageName} page
      </Typography>
    </div>
  );
}
