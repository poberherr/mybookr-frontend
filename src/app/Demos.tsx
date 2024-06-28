import Image from "next/image";
import Link from "next/link";

const posts = [
  {
    title: "Yacht Booking Demo",
    href: "/listings",
    imageUrl: "/mood/phinisi-vessel.png",
    sizes: [1280, 850]
  },
  {
    title: "Hotel Booking Demo",
    href: "https://hotels.mybookr.io/listings",
    imageUrl: "/mood/swan-paradise.webp",
    sizes: [2160, 1440]
  },
];

export default function Demos() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <a id="demos" className="scroll-m-24"/>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Demos
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            To ensure our software works for the whole industry, we currently
            have two variants of our end product.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {posts.map((post) => (
            <article
              key={post.title}
              className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
            >
              <Image
                src={post.imageUrl}
                width={post.sizes[0]}
                height={post.sizes[1]}
                alt=""
                className="absolute inset-0 -z-10 h-full w-full object-cover"
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
              <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

              <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                <Link href={post.href}>
                  <span className="absolute inset-0" />
                  {post.title}
                </Link>
              </h3>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
