"use client";

import { useContext } from "react";
import Link from "next/link";
import { OperatorContext } from "./context/operatorContext";
import Image from "next/image";

export default function HeroOperator() {
  const operator = useContext(OperatorContext);

  if (!operator) {
    throw Error("Unable to load operator for hero");
  }
  return (
    <div className="relative isolate overflow-hidden bg-white">
      <svg
        className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
            width={200}
            height={200}
            x="50%"
            y={-1}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <rect
          width="100%"
          height="100%"
          strokeWidth={0}
          fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)"
        />
      </svg>
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:pb-40 lg:pt-12">
        <div className="mx-auto lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
          <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            {operator ? (
              <>
                {`${operator.name}:`}
                <br />
                Online Booking
              </>
            ) : (
              `Online Booking`
            )}
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Click below to start the booking process.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <Link
              href="/listings"
              className="rounded-md bg-purple px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-purple focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple"
            >
              Book now
            </Link>
          </div>
        </div>
        {operator.media && (
          <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
            <Image
              src={operator.media.url}
              alt="Example"
              width={operator.media.width}
              height={operator.media.height}
              className="w-[62rem] max-h-40vh lg:max-h-[80vh] overflow-hidden object-cover aspect-square"
            />
          </div>
        )}
      </div>
    </div>
  );
}
