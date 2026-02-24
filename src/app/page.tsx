"use client";

import { useRouter } from "next/navigation";
import { useCallback } from "react";
import LandingSection from "@/components/landing-section";
import { SpiralAnimation } from "@/components/ui/spiral-animation";

export default function Home() {
  const router = useRouter();

  const handleLandingComplete = useCallback(() => {
    router.push("/home");
  }, [router]);

  return (
    <main className="flex flex-col items-center justify-center bg-background text-foreground overflow-x-hidden min-h-screen">
      <SpiralAnimation />
      <div className="relative z-10">
        <LandingSection onComplete={handleLandingComplete} />
      </div>
    </main>
  );
}
