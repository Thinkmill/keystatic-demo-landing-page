import Link from "next/link";
import Image from "next/image";

import heroImage from "../public/images/hero-image.png";
import featuresImage from "../public/images/features-image.png";

import { createReader } from "keystatic/reader";
import keystaticConfig from "../keystatic";

export default function Index({ testimonials, landingPage }) {
  return (
    <>
      <div className="relative">
        <header className="fixed inset-x-0 top-0 z-30 h-24 bg-white/[85%] py-6 backdrop-blur">
          <div className="mx-auto flex h-full max-w-5xl items-center px-4 sm:px-6 lg:px-8">
            <Link href="/" className="group text-3xl font-semibold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-10"
                viewBox="0 0 114 40"
              >
                <path
                  className="fill-black transition group-hover:scale-[0.98] group-hover:fill-gray-800"
                  fill="currentColor"
                  fill-rule="evenodd"
                  d="M2.343 2.343C0 4.686 0 8.458 0 16v8c0 7.543 0 11.314 2.343 13.657S8.458 40 16 40h8c7.543 0 11.314 0 13.657-2.343S40 31.543 40 24v-8c0-7.542 0-11.314-2.343-13.657S31.543 0 24 0h-8C8.458 0 4.686 0 2.343 2.343Zm8.093 28.073C9.198 29.731 8.5 28.791 8.5 27.77c0-.86.556-1.418 1.413-1.418.492 0 .873.223 1.523.845 1.127 1.068 2.317 1.578 3.841 1.578 1.92 0 3.11-.83 3.11-2.184 0-1.068-.793-1.865-2.3-2.2l-2.89-.669c-3.03-.685-4.459-2.183-4.459-4.606 0-3.092 2.54-5.116 6.492-5.116 1.634 0 3.158.383 4.348 1.1 1.127.653 1.794 1.578 1.794 2.486 0 .813-.556 1.323-1.397 1.323-.492 0-.841-.16-1.571-.781-1.159-1.052-2.08-1.434-3.35-1.434-1.808 0-2.904.844-2.904 2.183 0 1.084.715 1.737 2.27 2.104l3.047.701c2.968.686 4.35 2.152 4.35 4.606 0 3.204-2.556 5.196-6.73 5.196-1.762 0-3.413-.383-4.65-1.068Zm14.89 1.084c-1.19 0-2.175-.988-2.175-2.2 0-1.195.984-2.183 2.175-2.183 1.19 0 2.174.988 2.174 2.183 0 1.212-.984 2.2-2.174 2.2Z"
                  clip-rule="evenodd"
                />
                <path
                  className="fill-black group-hover:fill-gray-800"
                  fill="currentColor"
                  d="M49.344 27.672c0 1 .687 1.922 1.906 2.594 1.219.672 2.844 1.047 4.578 1.047 4.11 0 6.625-1.954 6.625-5.094 0-2.407-1.36-3.844-4.281-4.516l-3-.687c-1.531-.36-2.234-1-2.234-2.063 0-1.312 1.078-2.14 2.859-2.14 1.25 0 2.156.375 3.297 1.406.718.61 1.062.765 1.547.765.828 0 1.375-.5 1.375-1.297 0-.89-.657-1.796-1.766-2.437-1.172-.703-2.672-1.078-4.281-1.078-3.89 0-6.39 1.984-6.39 5.015 0 2.375 1.405 3.844 4.39 4.516l2.843.656c1.485.328 2.266 1.11 2.266 2.157 0 1.328-1.172 2.14-3.062 2.14-1.5 0-2.672-.5-3.782-1.547-.64-.609-1.015-.828-1.5-.828-.843 0-1.39.547-1.39 1.39Zm16.611 3.484c1.047 0 1.75-.64 1.75-1.922V10.36c0-1.28-.703-1.921-1.75-1.921-1.031 0-1.719.64-1.719 1.921v18.875c0 1.282.688 1.922 1.719 1.922ZM79.41 28.86h.172v.735c.078.984.687 1.562 1.64 1.562 1.079 0 1.688-.687 1.688-1.875v-9.453c0-3.594-2.328-5.594-6.5-5.594-1.719 0-3.031.297-4.031.844-1.39.75-2.047 1.688-2.047 2.64 0 .75.5 1.266 1.266 1.266.593 0 1-.156 1.421-.562.953-.969 1.86-1.438 3.172-1.438 2.11 0 3.25.97 3.25 2.828v1.47h-4.125c-3.687.015-5.906 1.874-5.906 4.921 0 3 2.172 5.031 5.39 5.031 2.047 0 3.704-.843 4.61-2.375Zm-6.516-2.828c0-1.515 1.063-2.375 2.907-2.375h3.64v1.782c0 1.78-1.547 3.156-3.562 3.156-1.782 0-2.985-1.032-2.985-2.563Zm13.362.578c0 3.391 1.296 4.688 4.421 4.688 1.016 0 1.766-.156 2.282-.453.515-.297.765-.75.765-1.282 0-.687-.468-1.125-1.125-1.125-.343 0-.64.047-1.078.047-1.375 0-1.781-.5-1.781-2.125v-9h1.875c.953 0 1.516-.53 1.516-1.39 0-.875-.547-1.39-1.516-1.39h-1.906v-2.423c0-1.187-.625-1.875-1.703-1.875-1.079 0-1.688.688-1.688 1.875v2.422h-1.062c-.97 0-1.532.516-1.532 1.39 0 .86.578 1.391 1.532 1.391h1v9.25Zm7.595-2.672c0 4.594 2.875 7.375 7.531 7.375 2.172 0 4.11-.609 5.172-1.625.641-.515 1.016-1.171 1.016-1.78 0-.798-.516-1.345-1.266-1.345-.547 0-.797.172-1.609.86-.797.719-1.781 1.094-3.109 1.094-2.61 0-4.204-1.625-4.204-4.172v-.782h8.813c1.375 0 1.812-.562 1.812-2.39 0-4.063-2.89-7-6.968-7-4.266 0-7.188 3.015-7.188 7.422v2.343Zm3.531-2.796v-.047c0-2.469 1.47-4.14 3.704-4.14 2.171 0 3.562 1.624 3.562 4.14v.047h-7.266Zm12.049 8.03c0 1.188.969 2.157 2.141 2.157a2.158 2.158 0 0 0 2.141-2.156c0-1.172-.969-2.14-2.141-2.14a2.154 2.154 0 0 0-2.141 2.14Z"
                />
              </svg>
            </Link>
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

        <main className="relative z-20 mb-[800px] bg-gray-100 bg-[radial-gradient(50%_50%_at_50%_50%,_#F4DDCD_0%,_rgba(244,_221,_205,_0.66)_24.48%,_rgba(239,_238,_243,_0)_100%)] bg-fixed bg-no-repeat">
          {/* Static background */}
          {/* <div className="sticky top-80">
            <div className="z-20 grid h-full w-full place-items-center bg-red-100">
              <div className="relative mx-auto w-full max-w-3xl">
                <div className="absolute top-0 right-0 h-[300px] w-[800px] rotate-45 animate-pulse rounded-full bg-yellow-300/30 blur-3xl [animation-delay:3s]"></div>
                <div className="absolute top-32 left-48 h-[300px] w-[800px] rotate-12 animate-pulse rounded-full bg-purple-300/30 blur-3xl [animation-delay:1.5s]"></div>
                <div className="absolute -bottom-32 -left-24 h-[300px] w-[800px] rotate-12 animate-pulse rounded-full bg-pink-300/30 blur-3xl"></div>
              </div>
            </div>
          </div> */}
          {/* Hero */}
          <section className="relative bg-gradient-to-br from-white to-transparent">
            <div className="relative mx-auto grid max-w-5xl grid-cols-2 py-48 px-4 sm:px-6 lg:px-8">
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
          <section id="features" className="py-32">
            <div className="px4 mx-auto grid max-w-5xl grid-cols-2 items-center sm:px-6 lg:px-8">
              <Image
                src={featuresImage}
                width={900}
                height={1600}
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
          <section id="reviews" className="bg-rose-100 py-32">
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

          <section id="pricing" className="py-32">
            <div className="sm-px-6 mx-auto max-w-5xl px-4 lg:px-8">
              <p className="text-4xl font-bold">Pricing section.</p>
            </div>
          </section>
        </main>

        <footer className="fixed inset-x-0 bottom-0 z-10 h-[800px] bg-gray-50">
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
