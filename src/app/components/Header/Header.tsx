"use client";

import Link from "next/link";

import { useMediaQuery, useTheme } from "@mui/material";

import useScrollDirection from "@/app/helpers/useScrollDirection";
import Logo from "@/assets/mybookr.svg";

import { ClerkAuth } from "./ClerkAuth";

import { useContext, useMemo, useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { OperatorContext } from "@/app/context/operatorContext";
import Image from "next/image";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const operator = useContext(OperatorContext);

  const navigation = useMemo(
    () =>
      !!operator
        ? [{ name: "Book Now", href: "/listings" }]
        : [
            { name: "Our Product", href: "/#product" },
            { name: "Book Now", href: "/listings" },
            {
              name: "Customer: Ecodive",
              href: "https://ecodive.mybookr.io",
              target: "_blank",
            },
            {
              name: "Investor Relations",
              href: "https://drive.google.com/drive/folders/12xt-_95Zf6n-IC8A2cVVivuz3O7t4pKZ",
              target: "_blank",
            },
            { name: "Contact", href: "/contact" },
          ],
    [operator],
  );

  return (
    <header className="sticky inset-0 z-10 border-b border-solid border-gray-100 bg-white bg-opacity-90 backdrop-blur-lg">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link className="-m-1.5 p-1.5" href={"/#top"}>
            {operator?.logo ? (
              <Image
                className="h-4 w-auto sm:h-6"
                src={operator.logo.url}
                width={operator.logo.width}
                height={operator.logo.height}
                alt={`${operator.name} logo`}
              />
            ) : (
              <Logo className="h-4 w-auto sm:h-6" alt="MyBookr logo" />
            )}
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) =>
            item.href.indexOf("/") === 0 ? (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-gray-900"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ) : (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                className="text-sm font-semibold leading-6 text-gray-900"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ),
          )}
        </div>
        <div className="invisible hidden lg:flex lg:flex-1 lg:justify-end">
          <ClerkAuth />
        </div>
      </nav>
      <Dialog
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link
              className="-m-1.5 p-1.5"
              href={"/#top"}
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">MyBookr</span>
              <Logo className="h-4 w-auto sm:h-6" alt="MyBookr logo" />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) =>
                  item.href.indexOf("/") === 0 ? (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <a
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  ),
                )}
              </div>
              <div className="invisible py-6">
                <ClerkAuth />
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}

export function HeaderOld() {
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
        className={`sticky z-10 grid h-[60px] grid-cols-3 items-center border-b !border-gray-100 bg-white px-4 transition-all duration-500 lg:h-20 lg:px-[166px] ${headerTopClass}`}
      >
        <Link className="cursor-pointer" href={"/"}>
          <Logo className="h-4 w-auto sm:h-6" alt="mybookr logo" />
        </Link>

        <Link className="text-center font-bold" href={"/listings"}>
          Prototype
        </Link>

        <div className="flex justify-end">
          <ClerkAuth />
        </div>
      </div>
    </>
  );
}
