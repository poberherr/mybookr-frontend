import React from "react";

import Link from "next/link";

import { Typography } from "@mui/material";

import Logo from "@/assets/mybookr.svg";
import JoinForm from "./components/others/JoinForm";

export default async function ListingsPage() {
  return (
    <div className="my-12 grid px-4 py-0 md:px-40">
      <div className="flex flex-col gap-12 items-center text-center py-6 md:py-12">
        <h1 className="text-2xl md:text-5xl">Welcome to</h1>
        <Logo style={{ width: "50%" }} />
        <h2 className="text-lg md:text-2xl">
          Enhancing Holiday Booking for Owners and Travelers
        </h2>
      </div>
      <div className="flex flex-col gap-6 items-center text-center border-t border-solid border-gray-100 py-6 md:py-12">
        <h2 className="text-xl md:text-3xl">
          Discover Our Vision
        </h2>
        <p>Explore our innovative approach to holiday booking. Get to know us better:</p>
        <a
          className="inline-block font-Montserrat font-semibold text-capitalize rounded-full shadow-none transition-all duration-500 ease-in-out disabled:cursor-not-allowed disabled:bg-gray-500 h-12 text-base leading-4 tracking-wider px-8 bg-blue-500 hover:bg-blue-600 text-white w-[fit-content] content-center"
          href="/202405005_Pitch_Deck_mybookr.io.pdf"
          target="_blank"
        >
          View Pitch Deck
        </a>
      </div>
      <div className="flex flex-col gap-6 items-center text-center border-t border-solid border-gray-100 py-6 md:py-12">
        <h2 className="text-xl md:text-3xl">Experience It Yourself</h2>
        <p>
          We value transparency in everything we do. Check out the latest version of our prototype:
        </p>
        <Link
          className="inline-block font-Montserrat font-semibold text-capitalize rounded-full shadow-none transition-all duration-500 ease-in-out disabled:cursor-not-allowed disabled:bg-gray-500 h-12 text-base leading-4 tracking-wider px-8 bg-blue-500 hover:bg-blue-600 text-white w-[fit-content] content-center"
          href="/listings"
        >
          Access the Prototype
        </Link>
      </div>
      <div className="flex flex-col gap-6 items-center text-center border-t border-solid border-gray-100 py-6 md:py-12">
        <h2 className="text-xl md:text-3xl">Join The Movement!</h2>
        <p>
          Be part of a revolutionary way to book your holidays. Sign up to stay informed and get involved:
        </p>
        <JoinForm />
      </div>
    </div>
  );
}

export const revalidate = false;
