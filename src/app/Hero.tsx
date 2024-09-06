import { ChevronRightIcon } from "@heroicons/react/20/solid";
import Logo from "@/assets/mybookr-logo.svg";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
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
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
          <Logo className="h-11 w-11" alt="MyBookr" />
          {/* <div className="mt-24 sm:mt-32 lg:mt-16">
            <a href="#" className="inline-flex space-x-6">
              <span className="rounded-full bg-purple/10 px-3 py-1 text-sm font-semibold leading-6 text-purple ring-1 ring-inset ring-purple/10">
                What's new
              </span>
              <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-600">
                <span>Just shipped v1.0</span>
                <ChevronRightIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </a>
          </div> */}
          <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            The toolkit for the next era of tourism and hospitality
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Take your business to the next level. Streamline your operations,
            increase your profits, and create outstanding guest experiences with
            MyBookr.io: the cloud-based hospitality solution tailored to your
            needs.
          </p>
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
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
          <Image
            src="/screenshots/hotels-detail.png"
            alt="App screenshot"
            width={1733}
            height={1246}
            className="w-[62rem]"
          />
        </div>
      </div>
    </div>
  );
}
