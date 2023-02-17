import Image from "next/image";
import * as Accordion from "@radix-ui/react-accordion";

import featuresImage from "../public/images/features-image.png";

const features = [
  {
    id: 1,
    title: `Created by slate. <br />
  Powered by iPhone.`,
    text: `Featuring advanced encryption technology, Slate takes full
  advantage of the latest device privacy and performance
  capabilities available.`,
  },
  {
    id: 2,
    title: `No surcharges. <br />
    Not even international ones.`,
    text: `Featuring advanced encryption technology, Slate takes full
  advantage of the latest device privacy and performance
  capabilities available.`,
  },
  {
    id: 3,
    title: `Peace of mind payments for your everyday transactions.`,
    text: `Featuring advanced encryption technology, Slate takes full
  advantage of the latest device privacy and performance
  capabilities available.`,
  },
];

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
        <Accordion.Root type="single" className="space-y-8">
          {features.map((feature) => (
            <Accordion.Item
              key={feature.id}
              value={feature.id.toString()}
              className="relative rounded-2xl p-10 backdrop-blur-sm data-[state=open]:bg-white data-[state=closed]:bg-white/30"
            >
              <Accordion.Header className="text-2xl font-bold leading-7">
                <span dangerouslySetInnerHTML={{ __html: feature.title }} />
              </Accordion.Header>
              <Accordion.Trigger className="absolute inset-0 rounded-2xl focus-visible:outline-none focus-visible:ring focus-visible:ring-inset focus-visible:ring-blob-2"></Accordion.Trigger>
              <Accordion.Content className="data-[state=open]:animate-fadeIn">
                <p className="mt-4">{feature.text}</p>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
}
