import React from "react";

import Image from "next/image";
import Link from "next/link";

import JoinForm from "./components/others/JoinForm";

import Logo from "@/assets/mybookr.svg";

export default async function LandingPage() {
  return (
    <div>
      <div className="flex flex-col gap-12 items-center text-center p-6 md:py-24">
        <h1 className="text-2xl md:text-5xl">Welcome to</h1>
        <Logo style={{ width: "50%" }} />
        <h2 className="text-lg md:text-2xl">
          Enhancing Holiday Booking for Owners and Travelers
        </h2>
      </div>
      <div className="md:flex border-t border-solid border-gray-100">
        <div
          className="flex-initial flex justify-center md:justify-end md:pr-16"
          style={{ flexBasis: "61.8%" }}
        >
          <div className="flex flex-col gap-6 items-center text-center p-6 md:py-24 max-w-md">
            <h2 className="text-xl md:text-3xl">Discover Our Vision</h2>
            <p>
              Explore our innovative approach to holiday booking. Get to know us
              better:
            </p>
            <a
              className="inline-block font-Montserrat font-semibold text-capitalize rounded-full shadow-none transition-all duration-500 ease-in-out disabled:cursor-not-allowed disabled:bg-gray-500 h-12 text-base leading-4 tracking-wider px-8 bg-blue-500 hover:bg-blue-600 text-white w-[fit-content] content-center"
              href="/202405005_Pitch_Deck_mybookr.io.pdf"
              target="_blank"
            >
              View Pitch Deck
            </a>
          </div>
        </div>
        <div className="flex-1 relative">
          <Image
            src="/mood/beach-sundown.jpg"
            alt="mybookr.io - Check out our pitch deck!"
            fill
            className="object-cover"
          />
        </div>
      </div>
      <div className="md:flex border-t border-solid border-gray-100">
        <div className="flex-1 relative hidden md:block">
          <Image
            src="/mood/pool-with-phone.jpg"
            alt="mybookr.io - Check out our pitch deck!"
            fill
            className="object-cover object-bottom"
          />
        </div>
        <div
          className="flex-initial flex justify-center md:justify-start md:pl-16"
          style={{ flexBasis: "61.8%" }}
        >
          <div className="flex flex-col gap-6 items-center text-center p-6 md:py-24 max-w-md">
            <h2 className="text-xl md:text-3xl">Experience It Yourself</h2>
            <p>
              We value transparency in everything we do. Check out the latest
              version of our prototype:
            </p>
            <Link
              className="inline-block font-Montserrat font-semibold text-capitalize rounded-full shadow-none transition-all duration-500 ease-in-out disabled:cursor-not-allowed disabled:bg-gray-500 h-12 text-base leading-4 tracking-wider px-8 bg-blue-500 hover:bg-blue-600 text-white w-[fit-content] content-center"
              href="/listings"
            >
              Access the Prototype
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6 items-center text-center border-t border-solid border-gray-100 p-6 md:py-24">
        <h2 className="text-xl md:text-3xl">Join The Movement!</h2>
        <p>
          Be part of a revolutionary way to book your holidays.
          <br />
          Sign up to stay informed and get involved:
        </p>
        <JoinForm />
      </div>
    </div>
  );
}

export const revalidate = false;
