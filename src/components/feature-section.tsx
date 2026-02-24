"use client";

import React from "react";
import { CircularTestimonials } from "@/components/ui/circular-testimonials";
import { cn } from "@/lib/utils";

const projects = [
  {
    name: "Atomican",
    quote: "A virtual chemistry lab designed for high-end digital experimentation. Run complex simulations and experiments without physical limits, powered by accurate chemical models.",
    designation: "Education • Simulation",
    href: "https://atomican.com",
    src: "https://picsum.photos/seed/atom/800/600",
  },
  {
    name: "Fionum",
    quote: "A judgment-free digital space built for heavy emotional expression. Connect with others in a serene environment designed specifically for mental well-being and release.",
    designation: "Mental Health • Community",
    href: "https://fionum.com",
    src: "https://picsum.photos/seed/fio/800/600",
  },
  {
    name: "Tether",
    quote: "A relationship connection tracker that uses AI to provide gentle nudges and insights, helping you maintain and strengthen your most important human connections.",
    designation: "AI • Social",
    href: "https://tether4646464.vercel.app/",
    src: "https://picsum.photos/seed/teth/800/600",
  },
  {
    name: "Drillzy",
    quote: "Focus on building one new skill at a time through daily micro-challenges. Designed for consistent growth without the overwhelm of traditional learning platforms.",
    designation: "EdTech • Productivity",
    href: "https://drillzy-etpo.vercel.app/",
    src: "https://picsum.photos/seed/drill/800/600",
  },
  {
    name: "Tranzoid",
    quote: "An enterprise-grade AI tool that translates entire codebases between programming languages while preserving logic, architecture, and documentation standards.",
    designation: "AI • Developer Tools",
    href: "https://tranzoid.com",
    src: "https://picsum.photos/seed/tranz/800/600",
  },
  {
    name: "Ashground",
    quote: "Your private digital space to write and release. The 'burn after reading' philosophy translated into a calming, interactive journaling experience.",
    designation: "Mindfulness • Privacy",
    href: "https://ashground.com",
    src: "https://picsum.photos/seed/ash/800/600",
  },
  {
    name: "Norskmind",
    quote: "Explore the deep corridors of Norwegian intellectual history. A curated journey through philosophy, art, and the thinkers who shaped the Nordic mind.",
    designation: "History • Philosophy",
    href: "https://norskmind.com",
    src: "https://picsum.photos/seed/norsk/800/600",
  },
  {
    name: "Italymind",
    quote: "Dive into the rich tapestry of Italian philosophical thought. From classical origins to modern theories, explore the intellectual legacy of Italy.",
    designation: "History • Philosophy",
    href: "https://italymind.com",
    src: "https://picsum.photos/seed/italy/800/600",
  },
];

const FeatureSection = ({ show }: { show: boolean }) => {
  return (
    <section
      className={cn(
        "w-full min-h-screen bg-[#000000] flex flex-col items-center justify-center relative overflow-hidden transition-opacity duration-1000 py-32",
        show ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
    >
      <div className="w-full max-w-7xl px-6 md:px-12">
        <CircularTestimonials testimonials={projects} autoplay={true} />
      </div>
    </section>
  );
};

export default FeatureSection;
