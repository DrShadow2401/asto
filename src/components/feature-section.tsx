"use client";

import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const features = [
  {
    title: "Tether",
    description: "Bond with people",
    href: "#",
    glowClass: "hover:shadow-[0_0_25px_hsl(var(--primary)/0.7)]",
    borderClass: "hover:border-primary",
  },
  {
    title: "Tranzoid",
    description: "Code Translator",
    href: "#",
    glowClass: "hover:shadow-[0_0_25px_hsl(var(--accent)/0.7)]",
    borderClass: "hover:border-accent",
  },
  {
    title: "Drillzy",
    description: "Microskill Daily",
    href: "#",
    glowClass: "hover:shadow-[0_0_25px_hsl(var(--primary)/0.7)]",
    borderClass: "hover:border-primary",
  },
  {
    title: "Ashground",
    description: "Digital Burner",
    href: "#",
    glowClass: "hover:shadow-[0_0_25px_hsl(var(--accent)/0.7)]",
    borderClass: "hover:border-accent",
  },
];

const FeatureSection = ({ show }: { show: boolean }) => {
  return (
    <section
      className={cn(
        "w-full min-h-[60vh] py-24 px-4 md:px-8 flex flex-col items-center justify-center transition-opacity duration-1000",
        show ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-7xl">
        {features.map((feature, index) => (
          <a
            key={feature.title}
            href={feature.href}
            className={cn(
              "block opacity-0 transform-gpu",
              show && "animate-fade-in-up"
            )}
            style={{ animationDelay: `${index * 200}ms` }}
          >
            <Card className={cn(
                "h-full bg-card/50 backdrop-blur-sm border-border transition-all duration-300",
                feature.glowClass,
                feature.borderClass
            )}>
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-primary-foreground">
                  {feature.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground pt-2">
                  {feature.description}
                </CardDescription>
              </CardHeader>
            </Card>
          </a>
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;
