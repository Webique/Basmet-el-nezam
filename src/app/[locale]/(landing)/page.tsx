import type { PageProps } from "@/types";
import type { Locale } from "next-intl";

import { setRequestLocale } from "next-intl/server";
import { use } from "react";

import AboutSection from "@/components/sections/about-section";
import CTASection from "@/components/sections/cta-section";
import HeroSection from "@/components/sections/hero-section";
import PortfolioSection from "@/components/sections/portfolio-section";
import ServicesSection from "@/components/sections/services-section";
import TeamSection from "@/components/sections/team-section";
import TestimonialsSection from "@/components/sections/testimonials-section";
import ValuesSection from "@/components/sections/values-section";
import WhyUsSection from "@/components/sections/why-us-section";
import WhatsAppFloat from "@/components/whatsapp-float";

export default function IndexPage({ params }: PageProps) {
  const { locale } = use(params);

  // Enable static rendering
  setRequestLocale(locale as Locale);

  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ValuesSection />
      <PortfolioSection />
      <WhyUsSection />
      <TeamSection />
      <TestimonialsSection />
      <CTASection />
      <WhatsAppFloat />
    </main>
  );
}
