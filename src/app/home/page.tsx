"use client";

import FeatureSection from "@/components/feature-section";
import ConnectSection from "@/components/connect-section";
import AboutSection from "@/components/about-section";

export default function HomePage() {
  return (
    <main className="w-full flex flex-col items-center justify-center overflow-x-hidden pb-20">
      <section className="flex flex-col items-center justify-center text-center py-24 md:py-32 px-4 animate-fade-in">
        <h1 className="text-6xl md:text-8xl font-bold text-foreground font-headline drop-shadow-[0_0_5px_hsl(var(--foreground)/0.2)]">
          Asto Eterna
        </h1>
        <p className="mt-4 text-xl text-foreground/80 animate-fade-in-up" style={{ animationDelay: '500ms' }}>
          Hi I'm Suhani , I build Ideas Into reality !
        </p>
      </section>
      
      <FeatureSection show={true} />
      <ConnectSection show={true} />
      <AboutSection show={true} />
    </main>
  );
}
