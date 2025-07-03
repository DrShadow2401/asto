"use client";

import FeatureSection from "@/components/feature-section";
import ConnectSection from "@/components/connect-section";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center bg-background text-foreground overflow-x-hidden">
      <div className="w-full">
        <FeatureSection show={true} />
      </div>
      <ConnectSection show={true} />
    </main>
  );
}
