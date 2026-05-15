import { SiteHeader } from "@/components/landing/SiteHeader";
import { HeroSection } from "@/components/landing/HeroSection";
import { TrustStrip } from "@/components/landing/TrustStrip";
import { SampleVideosSection } from "@/components/landing/SampleVideosSection";
import { HowItWorksSection } from "@/components/landing/HowItWorksSection";
import { WhyChooseSection } from "@/components/landing/WhyChooseSection";
import { SammySection } from "@/components/landing/SammySection";
import { FinalCtaSection } from "@/components/landing/FinalCtaSection";
import { SiteFooter } from "@/components/landing/SiteFooter";
import { StickyMobileCta } from "@/components/landing/StickyMobileCta";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="pb-28 md:pb-0">
        <HeroSection />
        <TrustStrip />
        <SampleVideosSection />
        <HowItWorksSection />
        <WhyChooseSection />
        <SammySection />
        <FinalCtaSection />
        <SiteFooter />
      </main>
      <StickyMobileCta />
    </>
  );
}
