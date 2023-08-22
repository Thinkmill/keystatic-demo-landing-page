import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import NextHead from "next/head";

const meta = {
  title: "Keystatic | Marketing Landing Page Template",
  description:
    "Slate is a fictive product marketing landing page demo for Keystatic. Built by Thinkmill with Tailwind CSS and Next.js.",
  imagePath: "/images/seo-image.png",
};

export default function Head() {
  // Get correct domain to pass it to SEO image
  const router = useRouter();
  const [rootUrl, setRootUrl] = useState("");
  useEffect(() => {
    setRootUrl(window.location.origin);
  }, [router.pathname]);

  return (
    <NextHead>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <meta name="robots" content="index,follow" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@site" />
      <meta name="twitter:creator" content="@thekeystatic" />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta
        property="og:image:alt"
        content="cover image for the Keystatic Marketing Landing Page Template"
      />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1152" />
      <meta property="og:image:height" content="780" />
      <meta property="og:site_name" content={meta.title} />
      <meta property="og:url" content={rootUrl} />
      <meta property="og:image" content={rootUrl + meta.imagePath} />
      <link rel="icon" href="/favicon.ico" />
    </NextHead>
  );
}
