import Link from "next/link";

export default function HeroOperator() {
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
            Read to book?
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
      </div>
    </div>
  );
}
