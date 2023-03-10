import {
  collection,
  config,
  fields,
  singleton,
  LocalConfig,
  GitHubConfig,
} from "@keystatic/core";

const storage: LocalConfig["storage"] | GitHubConfig["storage"] =
  process.env.NODE_ENV === "development"
    ? { kind: "local" }
    : {
        kind: "github",
        repo: {
          owner: process.env.NEXT_PUBLIC_VERCEL_GIT_REPO_OWNER!,
          name: process.env.NEXT_PUBLIC_VERCEL_GIT_REPO_SLUG!,
        },
      };

export default config({
  storage,
  singletons: {
    landingPage: singleton({
      label: "Landing Page",
      path: "content/landing-page/",
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
      path: "content/testimonials/*/",
      label: "Testimonials",
      slugField: "author",
      schema: {
        author: fields.slug({ name: { label: "Author" } }),
        testimonial: fields.text({ label: "Testimonial", multiline: true }),
        featured: fields.checkbox({ label: "Featured testimonial" }),
        twitterHandle: fields.text({ label: "Twitter handle" }),
        avatar: fields.image({
          label: "Avatar",
          directory: "public/images/testimonials",
          validation: { isRequired: true },
        }),
      },
    }),
  },
});
