import React from "react";

import Image from "next/image";
import Link from "next/link";

import JoinForm from "./components/others/JoinForm";

import Logo from "@/assets/mybookr.svg";

export default async function LandingPage() {
  return (
    <div>
      <div className="flex flex-col items-center gap-12 p-6 text-center md:py-24">
        <h1 className="text-2xl md:text-5xl">Welcome to</h1>
        <Logo style={{ width: "50%" }} />
        <h2 className="text-lg md:text-2xl">
          Enhancing Holiday Booking for Owners and Travelers
        </h2>
      </div>
      <div className="border-t border-solid border-gray-100 md:flex">
        <div
          className="flex flex-initial justify-center md:justify-end md:pr-16"
          style={{ flexBasis: "61.8%" }}
        >
          <div className="flex max-w-md flex-col items-center gap-6 p-6 text-center md:py-24">
            <h2 className="text-xl md:text-3xl">Discover Our Vision</h2>
            <p>
              Explore our innovative approach to holiday booking. Get to know us
              better:
            </p>
            <a
              className="font-Montserrat text-capitalize inline-block h-12 w-[fit-content] content-center rounded-full bg-gray-900 px-8 text-base font-semibold leading-4 tracking-wider text-white shadow-none transition-all duration-500 ease-in-out hover:bg-gray-700 disabled:cursor-not-allowed disabled:bg-gray-500"
              href={`https://wa.me/6282147456742?text=${encodeURI("Please send me the pitch deck for mybookr.io")}`}
              target="_blank"
            >
              Request Pitch Deck
            </a>
          </div>
        </div>
        <div className="relative flex-1">
          <Image
            src="/mood/beach-sundown.jpg"
            alt="mybookr.io - Check out our pitch deck!"
            fill
            sizes="(max-width: 900px) 0vw, 20vw"
            className="object-cover"
          />
        </div>
      </div>
      <div className="border-t border-solid border-gray-100 md:flex">
        <div className="relative hidden flex-1 md:block">
          <Image
            src="/mood/pool-with-phone.jpg"
            alt="mybookr.io - Check out our pitch deck!"
            fill
            sizes="(max-width: 900px) 0vw, 20vw"
            className="object-cover object-bottom"
          />
        </div>
        <div
          className="flex flex-initial justify-center md:justify-start md:pl-16"
          style={{ flexBasis: "61.8%" }}
        >
          <div className="flex max-w-md flex-col items-center gap-6 p-6 text-center md:py-24">
            <h2 className="text-xl md:text-3xl">Experience It Yourself</h2>
            <p>
              We value transparency in everything we do. Check out the latest
              version of our prototype:
            </p>
            <Link
              className="font-Montserrat text-capitalize inline-block h-12 w-[fit-content] content-center rounded-full bg-gray-900 px-8 text-base font-semibold leading-4 tracking-wider text-white shadow-none transition-all duration-500 ease-in-out hover:bg-gray-700 disabled:cursor-not-allowed disabled:bg-gray-500"
              href="/listings"
            >
              Access the Prototype
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-6 border-t border-solid border-gray-100 p-6 text-center md:py-24">
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
