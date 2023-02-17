// Keystatic
import { createReader } from "keystatic/reader";
import keystaticConfig from "../keystatic";

// Page section components
import BackgroundBlobs from "../components/background-blobs";
import Features from "../components/features";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import Pricing from "../components/pricing";
import Testimonials from "../components/testimonials";

// ----------

export default function Index({
  testimonials,
  landingPage: { heroHeadline, heroIntroText },
}) {
  return (
    <>
      <div className="relative w-full">
        <Navbar />
        <main className="relative z-10 bg-gray-100">
          <BackgroundBlobs />
          <Hero data={{ heroHeadline, heroIntroText }} />
          <Features />
          <Testimonials testimonials={testimonials} />
          <Pricing />
        </main>
        <Footer />
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
