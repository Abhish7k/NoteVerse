import HeroSection from "@/components/HeroSection";
import HeroSectionCta from "@/components/HeroSectionCta";
import { CtaSection } from "@/components/CtaSection";
import Footer from "@/components/Footer";

export default async function Home() {
  return (
    <section className="flex-col items-center justify-center bg-background">
      <HeroSection>
        <HeroSectionCta />
      </HeroSection>

      <CtaSection />

      <Footer />
    </section>
  );
}
