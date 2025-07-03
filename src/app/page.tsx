"use client";

import { useState, useEffect, useRef } from "react";
import LandingSection from "@/components/landing-section";
import FeatureSection from "@/components/feature-section";
import ConnectSection from "@/components/connect-section";

export default function Home() {
  const [landingComplete, setLandingComplete] = useState(false);
  const featureRef = useRef<HTMLDivElement>(null);

  const handleLandingComplete = () => {
    // A short delay for a smoother transition after the name appears
    setTimeout(() => {
      setLandingComplete(true);
    }, 1000); 
  };

  useEffect(() => {
    if (landingComplete) {
      // The auto-scroll is disabled to let users explore at their own pace,
      // as per cinematic experience goal. Sections will animate on scroll.
      // If auto-scroll is desired, uncomment the following line:
      // featureRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [landingComplete]);

  return (
    <main className="flex flex-col items-center justify-center bg-background text-foreground overflow-x-hidden">
      <LandingSection onComplete={handleLandingComplete} />
      <div ref={featureRef} className="w-full">
        <FeatureSection show={landingComplete} />
      </div>
      <ConnectSection show={landingComplete} />
    </main>
  );
}
