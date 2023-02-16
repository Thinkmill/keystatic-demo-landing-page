import Link from "next/link";
import Image from "next/image";

import { createReader } from "keystatic/reader";
import keystaticConfig from "../keystatic";

export default function Index({ testimonials, landingPage }) {
  return (
    <>
      <header className="mx-auto flex max-w-6xl items-center gap-16 py-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-3xl font-semibold">
          Slate
        </Link>
        <nav className="flex w-full items-center justify-between">
          <div className="flex gap-8">
            <a href="#features">Features</a>
            <a href="#reviews">Reviews</a>
            <a href="#pricing">Pricing</a>
          </div>
          <Link href="#" className="rounded-full bg-black px-3 py-2 text-white">
            Sign up
          </Link>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section className="bg-gray-100 py-32">
          <div className="px4 mx-auto grid max-w-6xl grid-cols-2 sm:px-6 lg:px-8">
            <div>
              <h1 className="mt-20 text-7xl font-bold">
                {landingPage.mainHeadline}
              </h1>
              <p className="mt-8 text-lg text-gray-700">
                Slate brings the future of credit card payments to all platforms
                via it's simple app. Providing secure, surcharge free
                transactions anywhere in the world, with any currency.
              </p>
              <div className="mt-20 flex items-center gap-6">
                <a
                  href="#"
                  className="flex items-center gap-2 rounded-2xl bg-black px-4 py-3 text-white"
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
                    <span className="block text-xs">Download on the</span>
                    <span className="text-lg leading-none">App Store</span>
                  </span>
                </a>
                <a
                  href="#"
                  className="rounded-full border border-black px-3 py-2"
                >
                  Watch promo
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="bg-gray-200 py-32">
          <div className="px4 mx-auto grid max-w-5xl grid-cols-2 gap-32 sm:px-6 lg:px-8">
            <img
              src="https://placehold.it/900x1600"
              alt=""
              className="rounded-2xl"
            />
            <div className="space-y-8">
              <div className="rounded-2xl bg-white p-8">
                <h2 className="text-xl font-semibold">
                  Created by slate. <br />
                  Powered by iPhone.
                </h2>
                <p className="mt-4 text-gray-700">
                  Featuring advanced encryption technology, Slate takes full
                  advantage of the latest device privacy and performance
                  capabilities available.
                </p>
              </div>
              <div className="rounded-2xl bg-white/50 p-8">
                <p className="text-xl font-semibold">
                  No surcharges. <br />
                  Not even international ones.
                </p>
              </div>
              <div className="rounded-2xl bg-white/50 p-8">
                <p className="text-xl font-semibold">
                  Peace of mind payments for your everyday transactions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-rose-100 py-32">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl bg-black py-12">
              <figure className="mx-auto flex max-w-xl flex-col items-center gap-8">
                <blockquote className="text-center text-2xl text-white">
                  {testimonials[0].testimonial}
                </blockquote>
                <figcaption className="flex flex-col items-center">
                  <img
                    src={`/content/testimonials/${testimonials[0].slug}/${testimonials[0].avatar}`}
                    alt=""
                    className="h-12 w-12 rounded-full"
                  />
                  <p className="mt-2 text-white">{testimonials[0].author}</p>
                  <Link className="mt-1 text-white/80" href="#">
                    {testimonials[0].twitterHandle}
                  </Link>
                </figcaption>
              </figure>
            </div>

            <h2 className="mt-24 max-w-xl text-5xl font-semibold">
              Our users have many reasons to choose Slate.
            </h2>
            <p className="mt-6 text-gray-700">Here's the latest.</p>

            <div className="mt-12">
              <ul className="columns-2xs space-y-4">
                {testimonials.slice(1).map((testimonial: any) => (
                  <li
                    key={testimonial.slug}
                    className="break-inside-avoid-column"
                  >
                    <div className="rounded-2xl bg-white/75 p-10">
                      <figure className="flex flex-col gap-8">
                        <blockquote className="text-base text-gray-700">
                          {testimonial.testimonial}
                        </blockquote>
                        <figcaption className="flex items-center gap-3">
                          <Image
                            width={40}
                            height={40}
                            src={`/content/testimonials/${testimonial.slug}/${testimonial.avatar}`}
                            alt=""
                            className="h-10 w-10 rounded-full"
                          />
                          <div>
                            <p className="text-sm font-medium leading-none">
                              {testimonial.author}
                            </p>
                            <Link
                              className="mt-1 text-sm leading-none text-gray-600"
                              href="#"
                            >
                              @{testimonial.twitterHandle}
                            </Link>
                          </div>
                        </figcaption>
                      </figure>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const reader = createReader("", keystaticConfig);

  // Testimonials
  const testimonialSlugs = await reader.collections.testimonials.list();
  const testimonials = await Promise.all(
    testimonialSlugs.map(async (slug) => {
      const testimonial = await reader.collections.testimonials.read(slug);
      return testimonial;
    })
  );

  // Landing page content
  const landingPage = await reader.singletons.landingPage.read();

  return {
    props: {
      testimonials,
      landingPage,
    },
  };
}
