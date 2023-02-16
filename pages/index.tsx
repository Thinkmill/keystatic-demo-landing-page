import Link from "next/link";
import Image from "next/image";

import { createReader } from "keystatic/reader";
import keystaticConfig from "../keystatic";

import BackgroundBlobs from "../components/background-blobs";
import LogoLink from "../components/logo-link";

import heroImage from "../public/images/hero-image.png";
import featuresImage from "../public/images/features-image.png";

// ----------

export default function Index({ testimonials, landingPage }) {
  return (
    <>
      <div className="relative w-full">
        <header className="fixed inset-x-0 top-0 z-20 h-24 bg-white/[85%] py-6 backdrop-blur">
          <div className="mx-auto flex h-full max-w-5xl items-center px-4 sm:px-6 lg:px-8">
            <LogoLink />
            <nav className="ml-16 flex w-full items-center justify-between">
              <div className="flex gap-10">
                <a className="font-medium" href="#features">
                  Features
                </a>
                <a className="font-medium" href="#reviews">
                  Reviews
                </a>
                <a className="font-medium" href="#pricing">
                  Pricing
                </a>
              </div>
              <Link
                href="#"
                className="rounded-full bg-black px-5 py-2.5 font-medium text-white hover:bg-gray-900"
              >
                Sign up
              </Link>
            </nav>
          </div>
        </header>

        <main className="relative z-10 bg-gray-100">
          <BackgroundBlobs />
          {/* Hero */}
          <section className="relative overflow-hidden bg-gradient-to-br from-white/50 to-transparent">
            {/* Blob 2 */}

            <div className="relative z-10 mx-auto grid max-w-5xl grid-cols-2 py-48 px-4 sm:px-6 lg:px-8">
              <div className="absolute bottom-0 -right-24">
                <div className="h-[400px] w-[500px] bg-[radial-gradient(50%_50%_at_50%_50%,#cfbcdc_0%,rgba(207,188,220,0.66)_24.48%,rgba(239,238,243,0)_100%)] opacity-60 mix-blend-color-burn [animation-delay:2s]"></div>
              </div>
              <img
                src="/images/hero-image.png"
                alt=""
                className="absolute right-0 bottom-0"
              />
              <div>
                <h1 className="mt-20 text-7xl font-bold">
                  {landingPage.mainHeadline}
                </h1>
                <p className="mt-10 text-xl leading-8">
                  Slate brings the future of credit card payments to all
                  platforms via it's simple app. Providing secure, surcharge
                  free transactions anywhere in the world, with any currency.
                </p>
                <div className="mt-20 flex items-center gap-6">
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
                    className="rounded-full border border-black px-4 py-2.5 font-medium hover:bg-gray-200"
                  >
                    Watch promo
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Features */}
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

          {/* Testimonials */}
          <section id="reviews" className="isolate py-32">
            <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
              <div className="rounded-3xl bg-black py-16">
                <figure className="mx-auto grid max-w-2xl items-center gap-8">
                  <blockquote className="text-center text-3xl leading-10 text-white">
                    {testimonials[0].testimonial}
                  </blockquote>
                  <figcaption className="flex flex-col items-center">
                    <img
                      src={`/content/testimonials/${testimonials[0].slug}/${testimonials[0].avatar}`}
                      alt=""
                      className="h-12 w-12 rounded-full"
                    />
                    <p className="mt-3 text-sm font-medium leading-none text-white">
                      {testimonials[0].author}
                    </p>
                    <Link
                      className="mt-1 text-sm leading-none text-white/80"
                      href="#"
                    >
                      @{testimonials[0].twitterHandle}
                    </Link>
                  </figcaption>
                </figure>
              </div>

              <h2 className="mt-40 max-w-2xl text-6xl font-bold">
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
                      <div className="rounded-2xl bg-white/40 p-10 backdrop-blur">
                        <figure className="grid gap-8">
                          <blockquote className="text-xl">
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

          <section id="pricing" className="isolate py-32">
            <div className="sm-px-6 mx-auto max-w-5xl px-4 lg:px-8">
              <p className="text-center text-4xl font-bold">Pricing section.</p>
            </div>
          </section>
        </main>

        <footer className="sticky bottom-0 bg-gray-50 py-64">
          <div className="grid h-full place-items-center">
            <p className="text-4xl">This is the footer!</p>
          </div>
        </footer>
      </div>
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
