import Image from "next/image";

import featuresImage from "../public/images/features-image.png";

export default function Features() {
  return (
    <section id="features" className="isolate py-32">
      <div className="px4 mx-auto grid max-w-5xl grid-cols-2 items-center sm:px-6 lg:px-8">
        <Image
          src={featuresImage}
          width={900}
          height={1600}
          alt=""
          className="rounded-2xl"
        />
        <div className="space-y-8">
          <div className="rounded-2xl bg-white p-10 backdrop-blur-sm">
            <h2 className="text-2xl font-bold leading-7">
              Created by slate. <br />
              Powered by iPhone.
            </h2>
            <p className="mt-4">
              Featuring advanced encryption technology, Slate takes full
              advantage of the latest device privacy and performance
              capabilities available.
            </p>
          </div>
          <div className="rounded-2xl bg-white/30 p-10 backdrop-blur-sm">
            <h2 className="text-2xl font-bold leading-7">
              No surcharges. <br />
              Not even international ones.
            </h2>
          </div>
          <div className="rounded-2xl bg-white/30 p-10 backdrop-blur-sm">
            <h2 className="text-2xl font-bold leading-7">
              Peace of mind payments for your everyday transactions.
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
