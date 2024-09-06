import Image from "next/image";

export default function Logos() {
  return (
    <div className="">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="mx-auto mt-10 grid grid-cols-2 items-center gap-x-8 gap-y-10 sm:grid-cols-4 sm:gap-x-10 lg:mx-0">
            <Image
              className="max-h-16 w-full object-contain object-center"
              src="/logos/pramana-experience.png"
              alt="Pramana Experience"
              width="376"
              height="240"
            />
            <Image
              className="max-h-16 w-full object-contain object-center"
              src="/logos/eco-dive-bali.png"
              alt="Eco Dive Bali"
              width="458"
              height="44"
            />
            <Image
              className="max-h-16 w-full object-contain object-center"
              src="/logos/dragoon-yachts.png"
              alt="Dragoon Yachts"
              width="352"
              height="32"
            />
            <Image
              className="max-h-16 w-full object-contain object-center"
              src="/logos/ihza-ihza.png"
              alt="Ihza &amp; Ihza"
              width="657"
              height="214"
            />
          </div>
          <div className="mx-auto mt-10 grid grid-cols-2 items-center gap-x-8 gap-y-10 sm:grid-cols-4 sm:gap-x-10 lg:mx-0">
            <img
              className="max-h-16 w-full object-contain object-center"
              src="/logos/030.svg"
              alt="030 labs"
            />
            <img
              className="max-h-16 w-full object-contain object-center"
              src="/logos/expansion-lab.svg"
              alt="Expansion Lab"
            />
            <Image
              className="max-h-16 w-full object-contain object-center"
              src="/logos/asia-berlin.png"
              alt="Asia Berlin"
              width="667"
              height="132"
            />
            <Image
              className="max-h-16 w-full object-contain object-center"
              src="/logos/betahaus.png"
              alt="betahaus"
              width="3508"
              height="1172"
            />
          </div>
          <div className="mx-auto mt-16 grid grid-cols-3 items-center gap-x-8 gap-y-10 sm:gap-x-10 lg:mx-0">
            <Image
              className="max-h-16 w-full object-contain object-center"
              src="/logos/aws.png"
              alt="Amazon Web Services"
              width="1254"
              height="751"
            />
            <img
              className="max-h-16 w-full object-contain object-center"
              src="/logos/google-cloud.svg"
              alt="Google Cloud"
            />
            <img
              className="max-h-16 w-full object-contain object-center"
              src="/logos/notion.svg"
              alt="Notion"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
