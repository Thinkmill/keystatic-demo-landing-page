import { collection, config, fields, singleton } from "keystatic";

export default config({
  storage: {
    kind: "github",
    repo: {
      owner: "Thinkmill",
      name: "keystatic-starter-landing-page",
    },
  },
  singletons: {
    landingPage: singleton({
      label: "Landing Page",
      directory: "public/content/landing-page",
      schema: {
        mainHeadline: fields.text({ label: "Main headline" }),
      },
    }),
  },
  collections: {
    testimonials: collection({
      directory: "public/content/testimonials",
      label: "Testimonials",
      getItemSlug: (data) => data.slug,
      schema: {
        author: fields.text({ label: "Author" }),
        slug: fields.text({ label: "Slug" }),
        testimonial: fields.text({ label: "Testimonial" }),
        twitterHandle: fields.text({ label: "Twitter handle" }),
        avatar: fields.image({ label: "Avatar" }),
      },
    }),
  },
});
