import {
  HeroSection,
  VideoSection,
  MissionSection,
  ServiceSection,
  WorkSection,
  CTASection,
  ProcessSection,
  PricingSection,
  FAQSection,
  TestimonialSection,
} from "@/app/_components";

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <HeroSection />

      {/* VIDEO SECTION */}
      <VideoSection />

      {/* MISSION SECTION */}
      <MissionSection />

      {/* WORK SECTION */}
      <WorkSection />

      {/* SERVICE SECTION */}
      <ServiceSection />

      {/* PRICING SECTION */}
      <PricingSection />

      {/* TESTIMONIAL SECTION */}
      <TestimonialSection />

      {/* PROCESS SECTION */}
      <ProcessSection />

      {/* FAQ SECTION */}
      <FAQSection />

      {/* CTA SECTION */}
      <CTASection />
    </>
  );
}
