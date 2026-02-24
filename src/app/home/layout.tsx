"use client";

import { TextWallBackground } from "@/components/ui/text-wall";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <TextWallBackground>
      <div className="relative z-10 min-h-screen">{children}</div>
    </TextWallBackground>
  );
}