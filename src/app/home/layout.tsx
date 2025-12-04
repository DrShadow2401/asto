"use client";

import { StarsBackground } from "@/components/ui/stars";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StarsBackground>
      <div className="relative z-10">{children}</div>
    </StarsBackground>
  );
}