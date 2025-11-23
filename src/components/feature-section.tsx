"use client";

import React from "react";
import { Card, CardDescription, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { Link, Repeat, Target, Flame, BrainCircuit, Library, FlaskConical, LifeBuoy } from "lucide-react";

const features = [
  {
    title: "Atomican",
    description: "A virtual chemistry lab to run experiments, explore reactions, and learn without limits.",
    href: "https://atomican.com",
    icon: FlaskConical,
  },
  {
    title: "SafeSpace",
    description: "A judgment-free app to express heavy feelings, find grounding, and regain clarity with gentle support.",
    href: "https://teen-suicide-prevention.vercel.app",
    icon: LifeBuoy,
  },
  {
    title: "Tether",
    description: "A connection tracker that logs your bonds and gives AI-powered nudges to keep relationships thriving.",
    href: "https://tether4646464.vercel.app/",
    icon: Link,
  },
  {
    title: "Drillzy",
    description: "Build one new skill at a time with daily, personalized micro-skill challenges.",
    href: "https://drillzy-etpo.vercel.app/",
    icon: Target,
  },
  {
    title: "Tranzoid",
    description: "Translate entire codebases between languages with AI—fast, accurate, and developer-ready.",
    href: "https://tranzoid.com",
    icon: Repeat,
  },
  {
    title: "Ashground",
    description: "Write it, burn it—your private digital space to vent, reflect, and release.",
    href: "https://ashground.com",
    icon: Flame,
  },
  {
    title: "Norskmind",
    description: "Journey through Norwegian intellectual history, from medieval scholasticism to modern philosophy.",
    href: "https://norskmind.com",
    icon: BrainCircuit,
  },
  {
    title: "Italymind",
    description: "Discover the rich history of Italian philosophy, from ancient Rome and the Renaissance to contemporary thought.",
    href: "https://italymind.com",
    icon: Library,
  },
];

const FeatureSection = ({ show }: { show: boolean }) => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };
    
    onSelect();
    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <section
      className={cn(
        "w-full py-24 px-4 md:px-8 flex flex-col items-center justify-center transition-opacity duration-1000",
        show ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
    >
      <div
        className={cn(
          "w-full max-w-6xl opacity-0 transform-gpu",
          show && "animate-fade-in-up"
        )}
        style={{ animationDelay: '200ms' }}
      >
        <Carousel
          setApi={setApi}
          opts={{
            align: "center",
            loop: false,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-8 py-4">
            {features.map((feature, index) => (
              <CarouselItem 
                key={index} 
                className={cn(
                  "pl-8 basis-4/5 md:basis-1/2 lg:basis-1/3 transition-all duration-300 ease-in-out",
                  index === current 
                    ? "scale-100 opacity-100" 
                    : "scale-90 opacity-60"
                )}
              >
                <Card className="h-full bg-card/60 backdrop-blur-sm border-white/10 transition-all duration-300 hover:border-accent hover:shadow-[0_0_25px_hsl(var(--accent)/0.5)] overflow-hidden rounded-lg flex flex-col">
                  <CardContent className="flex-grow flex flex-col items-center justify-center p-6 md:p-8 aspect-[4/3]">
                    <div className="flex items-center justify-center gap-4 mb-6">
                      {feature.icon && <feature.icon className="w-10 h-10 md:w-12 md:h-12 text-primary shrink-0" />}
                      <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground text-center">
                        {feature.title}
                      </h3>
                    </div>
                    <CardDescription className="text-foreground/90 text-center mb-6 text-base md:text-lg">
                      {feature.description}
                    </CardDescription>
                    <a
                      href={feature.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto text-accent underline underline-offset-4 font-semibold transition-colors hover:text-primary text-base"
                    >
                      View Project
                    </a>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default FeatureSection;
