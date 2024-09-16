import {
  HeroSection,
  IntroSection,
  MissionSection,
  ServiceSection,
  StatSection,
  WorkSection,
  CTASection,
  ProcessSection,
  PricingSection,
  WhySection,
  FAQSection,
  TestimonialSection,
} from "@/app/_components";

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <HeroSection />

      {/* INTRO SECTION */}
      <IntroSection />

      {/* MISSION SECTION */}
      <MissionSection />

      {/* STATS SECTION */}
      <StatSection />

      {/* WORK SECTION */}
      <WorkSection />

      {/* PRICING SECTION */}
      <PricingSection />

      {/* SERVICE SECTION */}
      <ServiceSection />

      {/* TESTIMONIAL SECTION */}
      <TestimonialSection />

      {/* WHY SECTION */}
      <WhySection />

      {/* PROCESS SECTION */}
      <ProcessSection />

      {/* FAQ SECTION */}
      <FAQSection />

      {/* CTA SECTION */}
      <CTASection />
    </>
  );
}
