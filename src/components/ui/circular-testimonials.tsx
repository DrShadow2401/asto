
"use client";
import React, {
  useEffect,
  useRef,
  useState,
  useMemo,
  useCallback,
} from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

interface Testimonial {
  quote: string;
  name: string;
  designation: string;
  src: string;
  href?: string;
  aiHint?: string;
}
interface Colors {
  name?: string;
  designation?: string;
  testimony?: string;
  arrowBackground?: string;
  arrowForeground?: string;
  arrowHoverBackground?: string;
}
interface FontSizes {
  name?: string;
  designation?: string;
  quote?: string;
}
interface CircularTestimonialsProps {
  testimonials: Testimonial[];
  autoplay?: boolean;
  colors?: Colors;
  fontSizes?: FontSizes;
}

function calculateGap(width: number) {
  const minWidth = 1024;
  const maxWidth = 1456;
  const minGap = 120;
  const maxGap = 180;
  if (width <= minWidth) return minGap;
  if (width >= maxWidth)
    return Math.max(minGap, maxGap + 0.06018 * (width - maxWidth));
  return minGap + (maxGap - minGap) * ((width - minWidth) / (maxWidth - minWidth));
}

export const CircularTestimonials = ({
  testimonials,
  autoplay = true,
  colors = {},
  fontSizes = {},
}: CircularTestimonialsProps) => {
  const colorName = colors.name ?? "#fff";
  const colorDesignation = colors.designation ?? "rgba(255,255,255,0.5)";
  const colorTestimony = colors.testimony ?? "rgba(255,255,255,0.8)";
  const colorArrowBg = colors.arrowBackground ?? "#1a1a1a";
  const colorArrowFg = colors.arrowForeground ?? "#fff";
  const colorArrowHoverBg = colors.arrowHoverBackground ?? "hsl(var(--primary))";
  const fontSizeName = fontSizes.name ?? "2rem";
  const fontSizeDesignation = fontSizes.designation ?? "0.9rem";
  const fontSizeQuote = fontSizes.quote ?? "1.1rem";

  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverPrev, setHoverPrev] = useState(false);
  const [hoverNext, setHoverNext] = useState(false);
  const [containerWidth, setContainerWidth] = useState(1200);

  const imageContainerRef = useRef<HTMLDivElement>(null);
  const autoplayIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const testimonialsLength = useMemo(() => testimonials.length, [testimonials]);
  const activeTestimonial = useMemo(
    () => testimonials[activeIndex],
    [activeIndex, testimonials]
  );

  useEffect(() => {
    function handleResize() {
      if (imageContainerRef.current) {
        setContainerWidth(imageContainerRef.current.offsetWidth);
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (autoplay) {
      autoplayIntervalRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % testimonialsLength);
      }, 6000);
    }
    return () => {
      if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
    };
  }, [autoplay, testimonialsLength]);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % testimonialsLength);
    if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
  }, [testimonialsLength]);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + testimonialsLength) % testimonialsLength);
    if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
  }, [testimonialsLength]);

  function getImageStyle(index: number): React.CSSProperties {
    const gap = calculateGap(containerWidth);
    const isActive = index === activeIndex;
    const isLeft = (activeIndex - 1 + testimonialsLength) % testimonialsLength === index;
    const isRight = (activeIndex + 1) % testimonialsLength === index;
    
    if (isActive) {
      return {
        zIndex: 10,
        opacity: 1,
        transform: `translateX(0px) translateZ(0px) scale(1) rotateY(0deg)`,
        filter: 'blur(0px)',
      };
    }
    if (isLeft) {
      return {
        zIndex: 5,
        opacity: 0.4,
        transform: `translateX(-${gap}px) translateZ(-200px) scale(0.8) rotateY(25deg)`,
        filter: 'blur(4px)',
      };
    }
    if (isRight) {
      return {
        zIndex: 5,
        opacity: 0.4,
        transform: `translateX(${gap}px) translateZ(-200px) scale(0.8) rotateY(-25deg)`,
        filter: 'blur(4px)',
      };
    }
    return {
      zIndex: 1,
      opacity: 0,
      transform: `translateX(0px) translateZ(-500px) scale(0.5)`,
      pointerEvents: 'none',
    };
  }

  return (
    <div className="w-full flex flex-col items-center gap-12">
      <div className="relative w-full h-[350px] md:h-[450px] flex items-center justify-center perspective-[2000px]" ref={imageContainerRef}>
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="absolute w-[80%] max-w-[600px] aspect-video rounded-2xl overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] shadow-2xl border border-white/10 bg-zinc-900"
            style={getImageStyle(index)}
          >
            <img
              src={testimonial.src}
              alt={testimonial.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                // Fallback for missing local images
                (e.target as HTMLImageElement).src = `https://placehold.co/600x400/1a1a1a/ffffff?text=${testimonial.name}`;
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
        ))}
      </div>

      <div className="w-full max-w-2xl text-center px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <h3 className="font-bold tracking-tight mb-1" style={{ color: colorName, fontSize: fontSizeName }}>
              {activeTestimonial.name}
            </h3>
            <p className="uppercase tracking-[0.2em] font-medium mb-6 opacity-60" style={{ color: colorDesignation, fontSize: fontSizeDesignation }}>
              {activeTestimonial.designation}
            </p>
            <p className="leading-relaxed font-light italic" style={{ color: colorTestimony, fontSize: fontSizeQuote }}>
              "{activeTestimonial.quote}"
            </p>
            {activeTestimonial.href && (
              <a 
                href={activeTestimonial.href} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block mt-6 text-primary hover:text-primary/80 transition-colors font-semibold border-b border-primary/30 pb-1"
              >
                View Project →
              </a>
            )}
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-center gap-6 mt-10">
          <button
            onClick={handlePrev}
            onMouseEnter={() => setHoverPrev(true)}
            onMouseLeave={() => setHoverPrev(false)}
            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center transition-all hover:scale-110 active:scale-95"
            style={{ backgroundColor: hoverPrev ? colorArrowHoverBg : colorArrowBg }}
          >
            <FaArrowLeft size={18} color={colorArrowFg} />
          </button>
          <button
            onClick={handleNext}
            onMouseEnter={() => setHoverNext(true)}
            onMouseLeave={() => setHoverNext(false)}
            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center transition-all hover:scale-110 active:scale-95"
            style={{ backgroundColor: hoverNext ? colorArrowHoverBg : colorArrowBg }}
          >
            <FaArrowRight size={18} color={colorArrowFg} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CircularTestimonials;
