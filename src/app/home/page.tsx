"use client";

import FeatureSection from "@/components/feature-section";
import ConnectSection from "@/components/connect-section";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="relative flex flex-col items-center justify-center bg-background text-foreground overflow-x-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://placehold.co/1920x1080.png"
          alt="A black hole in the center of a galaxy."
          data-ai-hint="black hole space"
          fill
          style={{ objectFit: 'cover' }}
          className="opacity-40"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className="relative z-10 w-full">
        <section className="flex flex-col items-center justify-center text-center py-24 md:py-32 px-4 animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold text-foreground font-headline drop-shadow-[0_0_15px_hsl(var(--foreground)/0.3)]">
            Asto Eterna
          </h1>
          <p className="mt-4 text-xl text-muted-foreground animate-fade-in-up" style={{ animationDelay: '500ms' }}>
            A space for creativity and code.
          </p>
        </section>
        
        <FeatureSection show={true} />
        <ConnectSection show={true} />
      </div>
    </main>
  );
}
