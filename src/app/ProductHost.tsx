import {
  CurrencyDollarIcon,
  LinkIcon,
  CursorArrowRaysIcon,
  ChartBarSquareIcon,
} from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";

const featuresHost = [
  {
    name: "Enhanced Revenue Opportunities",
    description:
      "Maximize profits with ease. Our platform boosts revenue and enhances guest experiences by streamlining all your booking services, including overnight stays, to optimize earning potential.",
    icon: CurrencyDollarIcon,
  },
  {
    name: "Seamless Integration",
    description:
      "Effortlessly integrates with your website and management software, supporting various channel management tools.",
    icon: LinkIcon,
  },
  {
    name: "Advanced Data Analytics",
    description:
      "Gain insights into guest preferences and booking trends for informed decision-making.",
    icon: ChartBarSquareIcon,
  },
  {
    name: "Unlock the Potential of Integrated Payments",
    description:
      "Eliminate the hassle of payment processing with an integrated gateway. MyBookr.io Payments allows you to handle transactions swiftly, securely, and with a single click. It’s that simple.",
    icon: CursorArrowRaysIcon,
  },
];

export default function ProductHost() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
          <div className="px-6 lg:px-0 lg:pr-4 lg:pt-4">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-purple">
                Streamline Your Operations
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                A Booking System Tailored For Boutique Travel
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Experience a seamless, efficient, and enjoyable booking system
                designed specifically for boutique travel operators.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {featuresHost.map((feature) => (
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
              <div className="mt-10 flex items-center gap-x-6">
                <a
                  target="_blank"
                  href="https://ecodive.mybookr.io"
                  className="rounded-md bg-purple px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-purple focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple"
                >
                  Live Version
                </a>
                <a
                  target="_blank"
                  href="https://meetings-eu1.hubspot.com/smelz?uuid=77dfe9b3-7d43-4f9d-a1eb-3bcf4f690499"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Book Demo <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
          <div className="sm:px-6 lg:px-0">
            <div className="relative isolate overflow-hidden bg-purple px-6 pt-8 sm:mx-auto sm:max-w-2xl sm:rounded-3xl sm:pl-16 sm:pr-0 sm:pt-16 lg:mx-0 lg:max-w-none">
              <div
                className="absolute -inset-y-px -left-3 -z-10 w-full origin-bottom-left skew-x-[-30deg] bg-indigo-100 opacity-20 ring-1 ring-inset ring-white"
                aria-hidden="true"
              />
              <div className="mx-auto max-w-2xl sm:mx-0 sm:max-w-none">
                <Image
                  src="/screenshots/hotels-detail-2.png"
                  alt="App screenshot"
                  width={1515}
                  height={1208}
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
