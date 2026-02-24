
"use client";

import React from "react";
import { CircularTestimonials } from "@/components/ui/circular-testimonials";
import { cn } from "@/lib/utils";
import projectsData from "@/app/lib/projects.json";

const FeatureSection = ({ show }: { show: boolean }) => {
  return (
    <section
      className={cn(
        "w-full min-h-screen bg-[#000000] flex flex-col items-center justify-center relative overflow-hidden transition-opacity duration-1000 py-32",
        show ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
    >
      <div className="w-full max-w-7xl px-6 md:px-12">
        <CircularTestimonials testimonials={projectsData} autoplay={true} />
      </div>
    </section>
  );
};

export default FeatureSection;
