// Keystatic
import { createReader } from "@keystatic/core/reader";
import keystaticConfig from "../keystatic.config";

// Page section components
import Head from "../components/head";
import BackgroundBlobs from "../components/background-blobs";
import Features from "../components/features";
import Footer, { FooterProps } from "../components/footer";
import Hero, { HeroProps } from "../components/hero";
import Navbar from "../components/navbar";
import Testimonials, { TestimonialProps } from "../components/testimonials";
import ProjectsPage from "../components/projects/ProjectsPage";

type HomepageProps = {
  testimonials: TestimonialProps[];
  landingPage: HeroProps & FooterProps;
};

// ----------

export default function Index({ testimonials, landingPage }: HomepageProps) {
  return (
    <>
      <Head />
      <div className="relative w-full">
        <Navbar />
        <main className="relative z-10 bg-gray-100">
          {/* <BackgroundBlobs /> */}
          <Hero
            data={{
              heroHeadline: landingPage.heroHeadline,
              heroIntroText: landingPage.heroIntroText,
            }}
          />
          <Features />
          <Testimonials testimonials={testimonials} />
		  <ProjectsPage />
        </main>
        <Footer
          data={{
            footerHeadline: landingPage.footerHeadline,
            footerText: landingPage.footerText,
          }}
        />
      </div>
    </>
  );
}

// Data from Keystatic
export async function getStaticProps() {
  const reader = createReader("", keystaticConfig);

  // Testimonials
  const testimonialSlugs = await reader.collections.testimonials.list();
  const testimonials = await Promise.all(
    testimonialSlugs.map(async (slug) => {
      const testimonial = await reader.collections.testimonials.read(slug);
      return { ...testimonial, slug };
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
