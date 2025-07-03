"use client";

import Starfield from "@/components/starfield";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <Starfield count={10000} />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
