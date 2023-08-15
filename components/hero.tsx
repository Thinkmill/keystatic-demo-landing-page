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

      <div className="relative z-10 mx-auto grid max-w-5xl py-12 px-6 sm:py-24 md:grid-cols-2 md:py-28 lg:px-8">
        <div className="absolute bottom-0 -right-24">
          <div className="h-[300px] w-[400px] bg-[radial-gradient(50%_50%_at_50%_50%,#cfbcdc_0%,rgba(207,188,220,0.66)_24.48%,rgba(239,238,243,0)_100%)] opacity-60 mix-blend-color-burn [animation-delay:2s]"></div>
        </div>

        <Image
          src={heroImage}
          alt=""
          className="absolute right-0 bottom-0 hidden max-w-[60%] md:block"
        />

        {/* Mobile image */}
        <Image
          src={heroImage}
          alt=""
          className="mx-auto w-[85%] max-w-[80%] md:hidden"
        />
        <div>
          <h1 className="mt-0 text-4xl font-bold sm:text-5xl md:mt-20 md:text-6xl lg:text-6xl whitespace-pre-line">
            {heroHeadline}
          </h1>
          <p className="mt-6 sm:mt-10 sm:text-base sm:leading-8 whitespace-pre-line">
            {heroIntroText}
          </p>
        </div>
      </div>
    </section>
  );
}
