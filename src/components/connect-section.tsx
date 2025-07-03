"use client";

import { Linkedin, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

const ConnectSection = ({ show }: { show: boolean }) => {
  return (
    <section
      className={cn(
        "w-full py-20 px-4 flex flex-col items-center justify-center gap-8 transition-opacity duration-1000",
        show ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
    >
      <div
        className={cn(
          "text-center opacity-0",
          show && "animate-fade-in-up"
        )}
        style={{ animationDelay: '800ms' }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground">
          Let's Connect
        </h2>
      </div>

      <div
        className={cn(
          "flex gap-8 opacity-0",
          show && "animate-fade-in-up"
        )}
        style={{ animationDelay: '1200ms' }}
      >
        <a
          href="#"
          aria-label="LinkedIn Profile"
          className="text-primary-foreground transition-all duration-300 hover:text-accent"
        >
          <Linkedin
            size={40}
            className="transition-transform duration-300 hover:-translate-y-1 hover:drop-shadow-[0_0_8px_hsl(var(--accent))]"
          />
        </a>
        <a
          href="mailto:suhani@example.com"
          aria-label="Email"
          className="text-primary-foreground transition-all duration-300 hover:text-accent"
        >
          <Mail
            size={40}
            className="transition-transform duration-300 hover:-translate-y-1 hover:drop-shadow-[0_0_8px_hsl(var(--accent))]"
          />
        </a>
      </div>
    </section>
  );
};

export default ConnectSection;
