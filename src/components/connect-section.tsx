"use client";

import { Linkedin } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
        style={{ animationDelay: '400ms' }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground">
          Let's Connect
        </h2>
      </div>

      <div
        className={cn(
          "w-full max-w-4xl opacity-0",
          show && "animate-fade-in-up"
        )}
        style={{ animationDelay: '600ms' }}
      >
        <Card className="bg-black/50 backdrop-blur-sm border-white/10 p-6 md:p-12 rounded-lg">
          <CardHeader className="p-0 mb-6">
            <CardTitle className="text-2xl md:text-3xl font-bold text-primary-foreground">
              About Me
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0 text-base md:text-lg text-foreground/80 space-y-4">
            <p>
              Hey, I’m Suhani — a high school student by age, but a startup founder by spirit (and caffeine levels).
            </p>
            <p>
              I build digital things that do things — from games that teach real-life skills to tools that solve problems. Whether it’s an app, a game, or a half-baked prototype at 2 a.m., I love turning wild ideas into useful experiences.
            </p>
            <p>
              I do stuff with Unity and with a love for storytelling, but now I’m diving deeper into AI, product design, and making tech feel a little more… human.
            </p>
            <p>
              Basically, if it’s creative, a little chaotic, and possibly life-improving — I’m in.
            </p>
          </CardContent>
        </Card>
      </div>

      <div
        className={cn(
          "flex flex-col items-center gap-6 opacity-0",
          show && "animate-fade-in-up"
        )}
        style={{ animationDelay: '800ms' }}
      >
        <a
          href="https://www.linkedin.com/in/suhani-arya-b10990364"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
          className="text-primary-foreground transition-all duration-300 hover:text-accent"
        >
          <Linkedin
            size={40}
            className="transition-transform duration-300 hover:-translate-y-1 hover:drop-shadow-[0_0_8px_hsl(var(--accent))]"
          />
        </a>
        <p className="text-foreground/80 text-lg">
          suhaniastoeterna@gmail.com
        </p>
      </div>
    </section>
  );
};

export default ConnectSection;
