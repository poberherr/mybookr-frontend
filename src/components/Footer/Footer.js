import { useRouter } from "next/router";

import { Typography } from "@mui/material";

import Logo from "../../assets/mybookr.svg";

export default function Footer() {
  const router = useRouter();

  return (
    <div className="mt-auto flex h-[60px] items-center justify-between border-t border-solid !border-gray-100 bg-white px-4 md:h-20 lg:px-[166px]">
      {/* Logo */}
      <div
        className="cursor-pointer"
        onClick={() => {
          router.push("/");
          window.scrollTo(0, 0);
        }}
      >
        <Logo className="h-12" alt="mybookr logo"/>
      </div>
      {/* Copyright */}
      <Typography className="!text-xs" variant="h6">
        © 2024, MyBookR
      </Typography>
    </div>
  );
}
