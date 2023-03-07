import { collection, config, fields, singleton } from "@keystatic/core";

export default config({
  storage: {
    kind: "github",
    repo: {
      owner: process.env.NEXT_PUBLIC_VERCEL_GIT_REPO_OWNER!,
      name: process.env.NEXT_PUBLIC_VERCEL_GIT_REPO_SLUG!,
    },
  },
  singletons: {
    landingPage: singleton({
      label: "Landing Page",
      path: "public/content/landing-page/",
      schema: {
        heroHeadline: fields.text({ label: "Hero headline" }),
        heroIntroText: fields.text({
          label: "Hero intro text",
          multiline: true,
        }),
        footerHeadline: fields.text({ label: "Footer headline" }),
        footerText: fields.text({ label: "Footer text", multiline: true }),
      },
    }),
  },
  collections: {
    testimonials: collection({
      path: "public/content/testimonials/*/",
      label: "Testimonials",
      slugField: "slug",
      schema: {
        author: fields.text({ label: "Author" }),
        slug: fields.text({ label: "Slug" }),
        testimonial: fields.text({ label: "Testimonial", multiline: true }),
        featured: fields.checkbox({ label: "Featured testimonial" }),
        twitterHandle: fields.text({ label: "Twitter handle" }),
        avatar: fields.image({ label: "Avatar" }),
      },
    }),
  },
});
