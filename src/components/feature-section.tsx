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

const features = [
  {
    title: "Tether",
    description: "Bond with people",
    href: "https://tether.app",
  },
  {
    title: "Tranzoid",
    description: "Code Translator",
    href: "#",
  },
  {
    title: "Drillzy",
    description: "Microskill Daily",
    href: "#",
  },
  {
    title: "Ashground",
    description: "Digital Burner",
    href: "#",
  },
];

const carouselOptions = {
  align: "center" as const,
  loop: true,
};

const FeatureSection = ({ show }: { show: boolean }) => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [styles, setStyles] = React.useState<React.CSSProperties[]>([]);

  const onScroll = React.useCallback(() => {
    if (!api) return;

    const scrollProgress = api.scrollProgress();
    const newStyles = api.scrollSnapList().map((scrollSnap) => {
      let diff = scrollSnap - scrollProgress;

      if (carouselOptions.loop) {
        if (diff > 0.5) diff -= 1;
        if (diff < -0.5) diff += 1;
      }

      const scale = 1 - Math.abs(diff) * 0.3;
      const opacity = 1 - Math.abs(diff) * 0.5;
      const translateX = diff * -70; // Adjust to pull cards closer
      
      return {
        transform: `translateX(${translateX}%) scale(${scale})`,
        opacity,
        zIndex: Math.floor(1 / (Math.abs(diff) + 0.001)),
      };
    });
    setStyles(newStyles);
  }, [api]);

  React.useEffect(() => {
    if (!api) return;
    onScroll();
    api.on("scroll", onScroll);
    api.on("reInit", onScroll);
    return () => {
      api?.off("scroll", onScroll);
      api?.off("reInit", onScroll);
    };
  }, [api, onScroll]);

  return (
    <section
      className={cn(
        "w-full py-24 px-4 md:px-8 flex flex-col items-center justify-center transition-opacity duration-1000",
        show ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
    >
      <div
        className={cn(
          "w-full max-w-4xl opacity-0 transform-gpu",
          show && "animate-fade-in-up"
        )}
        style={{ animationDelay: '200ms' }}
      >
        <Carousel
          setApi={setApi}
          opts={carouselOptions}
          className="w-full"
        >
          <CarouselContent className="-ml-4 py-4">
            {features.map((feature, index) => (
              <CarouselItem 
                key={index} 
                className="pl-4 basis-full md:basis-1/2 lg:basis-1/2 transition-transform duration-200 ease-out"
                style={styles[index]}
              >
                <a href={feature.href} target="_blank" rel="noopener noreferrer" className="block h-full group">
                  <Card className="h-full bg-card/60 backdrop-blur-sm border-white/10 transition-all duration-300 group-hover:border-accent group-hover:shadow-[0_0_25px_hsl(var(--accent)/0.5)] overflow-hidden rounded-lg flex flex-col">
                    <CardContent className="flex-grow flex flex-col items-center justify-center p-6 aspect-[4/3]">
                       <h3 className="text-4xl font-bold text-primary-foreground text-center">
                        {feature.title}
                      </h3>
                      <CardDescription className="text-muted-foreground mt-2 text-center">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default FeatureSection;
