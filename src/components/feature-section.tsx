
"use client";

import React from "react";
import { CircularTestimonials } from "@/components/ui/circular-testimonials";
import { cn } from "@/lib/utils";
import placeholders from "@/app/lib/placeholder-images.json";
import projectsData from "@/app/lib/projects.json";

const FeatureSection = ({ show }: { show: boolean }) => {
  // Map the project data to include the actual image URLs from the registry
  const projects = projectsData.map((project: any) => ({
    ...project,
    src: placeholders.projects[project.imageKey as keyof typeof placeholders.projects] || placeholders.projects.atomican
  }));

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
