import Link from "next/link";
import Image from "next/image";

export default function Testimonials({ testimonials }) {
  return (
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
        <p className="mt-8 text-xl">Here's the latest.</p>

        <div className="mt-12">
          <ul className="columns-2xs space-y-4">
            {testimonials.slice(1).map((testimonial: any) => (
              <li key={testimonial.slug} className="break-inside-avoid-column">
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
  );
}
