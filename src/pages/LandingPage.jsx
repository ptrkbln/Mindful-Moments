import React from "react";
import HeroSection from "../components/HeroSection/HeroSection";
import FeatureHighlight from "../components/FeatureHighlight/FeatureHighlight";
import Testimonials from "../components/Testimonials/Testimonials";
import BenefitsSection from "../components/BenefitsSection/BenefitsSection";

export default function LandingPage() {
  return (
    <div>
      <HeroSection />
      <FeatureHighlight />
      <Testimonials />
      <BenefitsSection />
    </div>
  );
}
