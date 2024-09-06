import {
  BuildingOffice2Icon,
  CakeIcon,
  CurrencyDollarIcon,
  CursorArrowRaysIcon,
  HomeModernIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
} from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";

const featuresTraveler = [
  {
    name: "Hotel Group or Management Company",
    description: "Operate smarter and faster across all properties",
    icon: BuildingOffice2Icon,
  },
  {
    name: "Villa and Property Management Companies",
    description: "Centralize all Villas and all Channels in one place",
    icon: HomeModernIcon,
  },
  {
    name: "Experience Organisers",
    description:
      "Enhance efficiency and maintain consistency with secure operations and integrated solutions",
    icon: CakeIcon,
  },
];

export default function Newsletter() {
  return (
    <div className="bg-purple py-16 sm:py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">
        <div className="max-w-xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:col-span-7">
          <h2 className="inline sm:block lg:inline xl:block">
            Want product news and updates?
          </h2>{" "}
          <p className="inline sm:block lg:inline xl:block">
            Sign up for our newsletter.
          </p>
        </div>
        <form className="w-full max-w-md lg:col-span-5 lg:pt-2">
          <div className="flex gap-x-4">
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              required
              placeholder="Enter your email"
              autoComplete="email"
              className="min-w-0 flex-auto rounded-md border-0 bg-white/10 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-white/75 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
            />
            <button
              type="submit"
              className="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Subscribe
            </button>
          </div>
          <p className="mt-4 text-sm leading-6 text-gray-300">
            The first 100 registrars will receive 50% discount for the first 3
            months.
          </p>
        </form>
      </div>
    </div>
  );
}
