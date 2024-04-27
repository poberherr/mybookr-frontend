"use client"

import Link from "next/link";

import { useMediaQuery, useTheme } from "@mui/material";

import Logo from "@/assets/mybookr.svg";
import useScrollDirection from "@/app/helpers/useScrollDirection";

import { ClerkAuth } from "./ClerkAuth";

export default function Header() {
  const isMobile = useMediaQuery(useTheme().breakpoints.down("md"));

  const scrollDirection = useScrollDirection();
  const headerTopClass =
    scrollDirection === "down"
      ? isMobile
        ? "top-[-60px]"
        : "top-[-80px]"
      : "top-0";

  return (
    // Header, Authentication and Metamask components
    <>
      {/* Header */}
      <div
        className={`sticky z-10 grid h-[60px] grid-cols-[max-content_1fr] items-center border-b !border-gray-100 bg-white px-4 transition-all duration-500 lg:h-20 lg:px-[166px] ${headerTopClass}`}
      >
        {/* mybookr logo: Left side */}
        <Link className="cursor-pointer" href={"/"}>
          <Logo className="h-12" alt="mybookr logo" />
        </Link>

        {/* Navigation: Right side */}
        <div className="flex justify-end">
          <ClerkAuth />
        </div>
      </div>
    </>
  );
}