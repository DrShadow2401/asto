"use client";

import Image from "next/image";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

const features = [
  {
    title: "Tether",
    description: "Bond with people",
    href: "#",
    imageSrc: "https://placehold.co/600x450.png",
    dataAiHint: "connection network",
  },
  {
    title: "Tranzoid",
    description: "Code Translator",
    href: "#",
    imageSrc: "https://placehold.co/600x450.png",
    dataAiHint: "code translation",
  },
  {
    title: "Drillzy",
    description: "Microskill Daily",
    href: "#",
    imageSrc: "https://placehold.co/600x450.png",
    dataAiHint: "learning progress",
  },
  {
    title: "Ashground",
    description: "Digital Burner",
    href: "#",
    imageSrc: "https://placehold.co/600x450.png",
    dataAiHint: "digital campfire",
  },
  {
    title: "Project Nova",
    description: "Next-gen dashboard",
    href: "#",
    imageSrc: "https://placehold.co/600x450.png",
    dataAiHint: "modern dashboard",
  },
];

const FeatureSection = ({ show }: { show: boolean }) => {
  return (
    <section
      className={cn(
        "w-full py-24 px-4 md:px-8 flex flex-col items-center justify-center transition-opacity duration-1000",
        show ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
    >
      <div
        className={cn(
          "w-full max-w-2xl opacity-0 transform-gpu",
          show && "animate-fade-in-up"
        )}
        style={{ animationDelay: '200ms' }}
      >
        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {features.map((feature, index) => (
              <CarouselItem key={index} className="pl-4">
                <a href={feature.href} className="block h-full group">
                  <Card className="h-full bg-card/60 backdrop-blur-sm border-white/10 transition-all duration-300 group-hover:border-accent group-hover:shadow-[0_0_25px_hsl(var(--accent)/0.5)] overflow-hidden rounded-lg">
                    <CardContent className="p-0 aspect-[4/3] relative">
                      <Image
                        src={feature.imageSrc}
                        alt={feature.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        data-ai-hint={feature.dataAiHint}
                      />
                    </CardContent>
                    <CardHeader className="p-4">
                      <CardTitle className="text-xl font-bold text-primary-foreground">
                        {feature.title}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground pt-1">
                        {feature.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex"/>
          <CarouselNext className="hidden md:flex"/>
        </Carousel>
      </div>
    </section>
  );
};

export default FeatureSection;
