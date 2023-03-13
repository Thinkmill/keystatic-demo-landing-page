import Link from "next/link";
import Image from "next/image";

export type TestimonialProps = {
  author: string;
  slug: string;
  testimonial: string;
  featured: boolean;
  twitterHandle: string;
  avatar: string;
};

type ComponentProps = {
  testimonials: TestimonialProps[];
};

export default function Testimonials({ testimonials }: ComponentProps) {
  /* 
    The Featured Testimonial will be display in the 
    more prominent callout above the 
    other testimonials.
  */
  const featuredTestimonial =
    testimonials.find(
      (testimonial: TestimonialProps) => testimonial.featured
    ) || testimonials[0];

  const otherTestimonials = [
    ...testimonials.filter(
      (testimonial: TestimonialProps) => !testimonial.featured
    ),
  ];

  return (
    <section id="reviews" className="isolate pt-16 sm:pt-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="rounded-3xl bg-black/90 px-6 py-8 sm:py-16 sm:px-8">
          <figure className="mx-auto grid max-w-2xl items-center gap-8">
            <blockquote className="text-center text-2xl text-white sm:text-3xl sm:leading-10">
              {featuredTestimonial.testimonial}
            </blockquote>
            <figcaption className="flex flex-col items-center">
              <img
                src={`/images/testimonials/${featuredTestimonial.slug}/${featuredTestimonial.avatar}`}
                alt=""
                className="h-12 w-12 rounded-full object-cover"
              />
              <p className="mt-3 text-sm font-medium leading-none text-white">
                {featuredTestimonial.author}
              </p>
              <Link
                className="mt-1 text-sm leading-none text-white/80"
                href="#"
              >
                @{featuredTestimonial.twitterHandle}
              </Link>
            </figcaption>
          </figure>
        </div>

        <h2 className="mt-16 max-w-2xl text-4xl font-bold sm:mt-24 sm:text-6xl md:mt-40">
          Our users have many reasons to choose Slate.
        </h2>
        <p className="mt-6 text-xl sm:mt-8">Here's the latest.</p>

        <div className="mt-12">
          <ul className="columns-xs space-y-4">
            {otherTestimonials.map((testimonial: any) => (
              <li key={testimonial.slug} className="break-inside-avoid">
                <div className="rounded-2xl bg-white/40 p-6 backdrop-blur sm:p-10">
                  <figure className="grid gap-8">
                    <blockquote className="text-xl">
                      {testimonial.testimonial}
                    </blockquote>
                    <figcaption className="flex items-center gap-3">
                      <Image
                        width={40}
                        height={40}
                        src={`/images/testimonials/${testimonial.slug}/${testimonial.avatar}`}
                        alt=""
                        className="h-10 w-10 rounded-full object-cover"
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
