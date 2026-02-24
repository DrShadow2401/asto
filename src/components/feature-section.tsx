"use client";

import React from "react";
import { CircularTestimonials } from "@/components/ui/circular-testimonials";
import { cn } from "@/lib/utils";
import placeholders from "@/app/lib/placeholder-images.json";

const projects = [
  {
    name: "Atomican",
    quote: "A virtual chemistry lab designed for high-end digital experimentation. Run complex simulations and experiments without physical limits, powered by accurate chemical models.",
    designation: "Education • Simulation",
    href: "https://atomican.com",
    src: placeholders.projects.atomican,
  },
  {
    name: "Fionum",
    quote: "A judgment-free digital space built for heavy emotional expression. Connect with others in a serene environment designed specifically for mental well-being and release.",
    designation: "Mental Health • Community",
    href: "https://fionum.com",
    src: placeholders.projects.fionum,
  },
  {
    name: "Tether",
    quote: "A relationship connection tracker that uses AI to provide gentle nudges and insights, helping you maintain and strengthen your most important human connections.",
    designation: "AI • Social",
    href: "https://tether4646464.vercel.app/",
    src: placeholders.projects.tether,
    aiHint: "Abstract logo",
  },
  {
    name: "Drillzy",
    quote: "Focus on building one new skill at a time through daily micro-challenges. Designed for consistent growth without the overwhelm of traditional learning platforms.",
    designation: "EdTech • Productivity",
    href: "https://drillzy-etpo.vercel.app/",
    src: placeholders.projects.drillzy,
  },
  {
    name: "Tranzoid",
    quote: "An enterprise-grade AI tool that translates entire codebases between programming languages while preserving logic, architecture, and documentation standards.",
    designation: "AI • Developer Tools",
    href: "https://tranzoid.com",
    src: placeholders.projects.tranzoid,
  },
  {
    name: "Ashground",
    quote: "Your private digital space to write and release. The 'burn after reading' philosophy translated into a calming, interactive journaling experience.",
    designation: "Mindfulness • Privacy",
    href: "https://ashground.com",
    src: placeholders.projects.ashground,
  },
  {
    name: "Norskmind",
    quote: "Explore the deep corridors of Norwegian intellectual history. A curated journey through philosophy, art, and the thinkers who shaped the Nordic mind.",
    designation: "History • Philosophy",
    href: "https://norskmind.com",
    src: placeholders.projects.norskmind,
  },
  {
    name: "Italymind",
    quote: "Dive into the rich tapestry of Italian philosophical thought. From classical origins to modern theories, explore the intellectual legacy of Italy.",
    designation: "History • Philosophy",
    href: "https://italymind.com",
    src: placeholders.projects.italymind,
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