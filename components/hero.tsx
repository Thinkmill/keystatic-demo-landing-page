import Image from "next/image";

import heroImage from "../public/images/hero-image.png";

export type HeroProps = {
  heroHeadline: string;
  heroIntroText: string;
};

type ComponentProps = {
  data: HeroProps;
};

export default function Hero({
  data: { heroHeadline, heroIntroText },
}: ComponentProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white/50 to-transparent">
      {/* Blob 2 */}

      <div className="relative z-10 mx-auto grid max-w-5xl py-12 px-6 sm:py-32 md:grid-cols-2 md:py-48 lg:px-8">
        <div className="absolute bottom-0 -right-24">
          <div className="h-[400px] w-[500px] bg-[radial-gradient(50%_50%_at_50%_50%,#cfbcdc_0%,rgba(207,188,220,0.66)_24.48%,rgba(239,238,243,0)_100%)] opacity-60 mix-blend-color-burn [animation-delay:2s]"></div>
        </div>
        <Image
          src={heroImage}
          alt=""
          className="absolute right-0 bottom-0 hidden max-w-[70%] md:block"
        />

        {/* Mobile image */}
        <Image
          src={heroImage}
          alt=""
          className="mx-auto w-[85%] max-w-[80%] md:hidden"
        />
        <div>
          <h1 className="mt-0 text-4xl font-bold sm:text-5xl md:mt-20 md:text-6xl lg:text-7xl">
            {heroHeadline}
          </h1>
          <p className="mt-6 sm:mt-10 sm:text-xl sm:leading-8">
            {heroIntroText}
          </p>

          {/* Buttons */}
          <div className="mt-12 flex flex-wrap items-center gap-6 md:mt-20 md:gap-6">
            <a
              href="#"
              className="flex items-center gap-2 rounded-3xl bg-black p-4 text-white hover:bg-gray-900"
            >
              <span>
                <svg
                  className="h-6 w-6 fill-white"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlSpace="preserve"
                  viewBox="0 0 22.773 22.773"
                >
                  <path
                    d="M15.769 0h.162c.13 1.606-.483 2.806-1.228 3.675-.731.863-1.732 1.7-3.351 1.573-.108-1.583.506-2.694 1.25-3.561C13.292.879 14.557.16 15.769 0zM20.67 16.716v.045c-.455 1.378-1.104 2.559-1.896 3.655-.723.995-1.609 2.334-3.191 2.334-1.367 0-2.275-.879-3.676-.903-1.482-.024-2.297.735-3.652.926h-.462c-.995-.144-1.798-.932-2.383-1.642-1.725-2.098-3.058-4.808-3.306-8.276v-1.019c.105-2.482 1.311-4.5 2.914-5.478.846-.52 2.009-.963 3.304-.765.555.086 1.122.276 1.619.464.471.181 1.06.502 1.618.485.378-.011.754-.208 1.135-.347 1.116-.403 2.21-.865 3.652-.648 1.733.262 2.963 1.032 3.723 2.22-1.466.933-2.625 2.339-2.427 4.74.176 2.181 1.444 3.457 3.028 4.209z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              <span>
                <span className="block text-[10px] leading-none">
                  Download on the
                </span>
                <span className="text-xl leading-none">App Store</span>
              </span>
            </a>
            <a
              href="#"
              className="rounded-full border border-black px-5 py-2.5 font-medium hover:bg-gray-200/25"
            >
              Watch promo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
