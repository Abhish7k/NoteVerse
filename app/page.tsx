import HeroSection from "@/components/HeroSection";
import HeroSectionCta from "@/components/HeroSectionCta";
import Footer from "@/components/Footer";
import FeaturesSection from "@/components/FeaturesSection";
import TestimonialSection from "@/components/TestimonialSection ";

export default async function Home() {
  return (
    <section className="flex-col items-center justify-center bg-background">
      <HeroSection>
        <HeroSectionCta />
      </HeroSection>

      <FeaturesSection />

      <TestimonialSection />

      <Footer />
    </section>
  );
}
