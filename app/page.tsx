import HeroSection, { HeroHighlightDemo } from "@/components/HeroSection";
import HeroSectionCta from "@/components/HeroSectionCta";
import Footer from "@/components/Footer";
import FeaturesSection from "@/components/FeaturesSection";
import TestimonialSection from "@/components/TestimonialSection ";
import { CtaSection } from "@/components/CtaSection";

export default async function Home() {
  return (
    <section className="flex-col items-center justify-center bg-background">
      <HeroSection>
        <HeroSectionCta />
      </HeroSection>

      {/* <HeroHighlightDemo /> */}

      <FeaturesSection />

      <TestimonialSection />

      <CtaSection />

      <Footer />
    </section>
  );
}
