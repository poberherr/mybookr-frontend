import {
  CurrencyDollarIcon,
  CursorArrowRaysIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
} from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";

const featuresTraveler = [
  {
    name: "More Revenue",
    description:
      "Reduce expenses on major Online Travel Agencies (OTAs) and increase direct bookings with lower commission rates compared to other OTAs.",
    icon: CurrencyDollarIcon,
  },
  {
    name: "More Bookings",
    description:
      "Boost direct bookings through our innovative marketing strategies.",
    icon: RocketLaunchIcon,
  },
  {
    name: "User-Friendly Interface",
    description:
      "Enjoy an innovative booking process designed to minimize clicks and enhance user experience.",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Fair Booking Process",
    description:
      "Reservations are only paid upon host confirmation, reducing the risk of double bookings. Future options may include reselling bookings if needed.",
    icon: ShieldCheckIcon,
  },
];

export default function ProductTraveler() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <a id="product" />
      <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
          <div className="px-6 lg:order-2 lg:px-0 lg:pr-4 lg:pt-4">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-purple">
                Enjoy The Process
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                A Booking Journey That Is Fun
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Enjoy a seamless and delightful booking experience tailored to
                meet the unique needs of our guests.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {featuresTraveler.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon
                        className="absolute left-1 top-1 h-5 w-5 text-purple"
                        aria-hidden="true"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
              <Link
                href="/listings"
                className="ml-9 mt-8 inline-block rounded-md bg-purple px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-purple focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple"
              >
                Try it out
              </Link>
              <a
                href="/contact"
                className="m-4 inline-block text-sm font-semibold leading-6 text-gray-900"
              >
                Talk to us <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <div className="sm:px-6 lg:order-1 lg:px-0">
            <div className="relative isolate overflow-hidden bg-purple px-6 pt-8 sm:mx-auto sm:max-w-2xl sm:rounded-3xl sm:pl-16 sm:pr-0 sm:pt-16 lg:mx-0 lg:max-w-none">
              <div
                className="absolute -inset-y-px -left-3 -z-10 w-full origin-bottom-left skew-x-[-30deg] bg-indigo-100 opacity-20 ring-1 ring-inset ring-white"
                aria-hidden="true"
              />
              <div className="mx-auto max-w-2xl sm:mx-0 sm:max-w-none">
                <Image
                  src="/screenshots/ecodive.png"
                  alt="App screenshot"
                  width={1733}
                  height={1246}
                  className="-mb-12 w-[57rem] max-w-none "
                />
              </div>
              <div
                className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 sm:rounded-3xl"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
