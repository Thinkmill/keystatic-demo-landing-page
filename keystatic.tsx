import { collection, component, config, fields } from "keystatic";

export default config({
  storage: {
    kind: "github",
    repo: {
      owner: "Thinkmill",
      name: "keystatic-starter-landing-page",
    },
  },
  collections: {
    testimonials: collection({
      directory: "public/content/testimonials",
      label: "Testimonials",
      getItemSlug: (data) => data.slug,
      schema: {
        author: fields.text({ label: "Author" }),
        slug: fields.text({ label: "Slug" }),
      },
    }),
  },
});
