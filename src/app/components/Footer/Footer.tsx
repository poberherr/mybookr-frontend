"use client";

import { OperatorContext } from "@/app/context/operatorContext";
import Image from "next/image";
import Link from "next/link";
import { useContext, useMemo } from "react";
import { SiLinkedin } from "react-icons/si";

export default function Footer() {
  const operator = useContext(OperatorContext);

  const navigation = useMemo(
    () =>
      !!operator
        ? {
            main: [
              { name: "Home", href: "/#top" },
              { name: "Bookings", href: "/listings" },
              { name: "Privacy Policy", href: "/privacy-policy" },
              { name: "Site Notice", href: "/site-notice" },
              { name: "Terms of Service", href: "/terms-of-service" },
            ],
            social: [],
          }
        : {
            main: [
              { name: "Home", href: "/#top" },
              { name: "Contact", href: "/contact" },
              { name: "Privacy Policy", href: "/privacy-policy" },
              { name: "Site Notice", href: "/site-notice" },
              { name: "Terms of Service", href: "/terms-of-service" },
              // { name: "Demo - Yachts", href: "https://mybookr.io/listings" },
              // { name: "Demo - Hotels", href: "https://hotels.mybookr.io/listings" },
              // { name: "Demo - NFT", href: "https://nft.mybookr.io" },
            ],
            social: [
              {
                name: "LinkedIn",
                href: "https://www.linkedin.com/company/mybookr-io/",
                icon: SiLinkedin,
              },
            ],
          },
    [operator],
  );

  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <nav
          className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12"
          aria-label="Footer"
        >
          {navigation.main.map((item) => (
            <div key={item.name} className="pb-6">
              <Link
                href={item.href}
                className="text-sm leading-6 text-gray-600 hover:text-gray-900"
              >
                {item.name}
              </Link>
            </div>
          ))}
        </nav>
        <div className="mt-10 flex justify-center space-x-10">
          {navigation.social.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              target="_blank"
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </Link>
          ))}
        </div>

        {operator ? (
          <p className="mt-10 text-center text-xs leading-5 text-gray-500">
            &copy; {new Date().getFullYear()}{" "}
            <Link href={operator.website} target="_blank">
              {operator.name}
            </Link>{" "}
            via{" "}
            <Link href="https://mybookr.io" target="_blank">
              mybookr.io
            </Link>
            . All rights reserved.
          </p>
        ) : (
          <>
            <Image
              className="mx-auto my-8 w-full max-w-[420px]"
              src="/logos/expansion-lab-big-logo.png"
              alt="Expansion Lab"
              width="962"
              height="255"
            />
            <p className="mt-10 text-center text-xs leading-5 text-gray-500">
              &copy; {new Date().getFullYear()}{" "}
              <Link href="https://mybookr.io" target="_blank">
                Mybookr
              </Link>
              . All rights reserved.
            </p>
          </>
        )}
      </div>
    </footer>
  );
}
