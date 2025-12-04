"use client";

import { useRouter } from "next/navigation";
import LandingSection from "@/components/landing-section";
import Starfield from "@/components/starfield";

export default function Home() {
  const router = useRouter();

  const handleLandingComplete = () => {
    router.push("/home");
  };

  return (
    <main className="flex flex-col items-center justify-center bg-background text-foreground overflow-x-hidden min-h-screen">
      <Starfield count={1000} />
      <div className="relative z-10">
        <LandingSection onComplete={handleLandingComplete} />
      </div>
    </main>
  );
}
