"use client";

import { useRouter } from "next/navigation";
import LandingSection from "@/components/landing-section";

export default function Home() {
  const router = useRouter();

  const handleLandingComplete = () => {
    router.push("/home");
  };

  return (
    <main className="flex flex-col items-center justify-center bg-background text-foreground overflow-x-hidden">
      <LandingSection onComplete={handleLandingComplete} />
    </main>
  );
}
