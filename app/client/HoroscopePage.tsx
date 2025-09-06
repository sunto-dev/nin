"use client";

import React from "react";
import {
  HeroSection,
  FeaturesSection,
  AppShowcaseSection,
  PricingSection,
  StatsSection,
} from "./components";
import ShadcnNavbar from "@/components/ShadcnNavbar";

const HoroscopePage = () => {
  return (
    <>
      <ShadcnNavbar />
      <main className="min-h-screen">
        <HeroSection />
        <FeaturesSection />
        <AppShowcaseSection />
        <PricingSection />
        <StatsSection />
      </main>
    </>
  );
};

export default HoroscopePage;
