import HeroSection from "@/components/HeroSection";
import HeroSectionCta from "@/components/HeroSectionCta";
import { HeroScroll } from "@/components/HeroImageSection";
import { CtaSection } from "@/components/CtaSection";
import Footer from "@/components/Footer";

export default async function Home() {
  return (
    <section className="flex-col items-center justify-center bg-background h-[80vh]">
      <HeroSection>
        <HeroSectionCta />
      </HeroSection>

      <HeroScroll />

      <CtaSection />

      <Footer />
    </section>
  );
}
