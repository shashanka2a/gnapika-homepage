"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function ParallaxDivider() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <div ref={ref} className="relative h-[250px] sm:h-[350px] lg:h-[400px] overflow-hidden">
      {/* Desktop parallax */}
      <motion.div 
        style={{ y }} 
        className="absolute inset-0 -top-[20%] -bottom-[20%] hidden sm:block"
      >
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1726225129849-233d8f893c5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kJTIwY2FydmluZyUyMGRldGFpbHxlbnwxfHx8fDE3NjEzOTI3MDF8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Wood carving detail"
          className="h-full w-full object-cover"
        />
        <div 
          className="absolute inset-0" 
          style={{
            background: 'linear-gradient(135deg, rgba(139, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.6) 100%)'
          }}
        />
      </motion.div>

      {/* Mobile static image - better performance */}
      <div className="absolute inset-0 sm:hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1726225129849-233d8f893c5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kJTIwY2FydmluZyUyMGRldGFpbHxlbnwxfHx8fDE3NjEzOTI3MDF8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Wood carving detail"
          className="h-full w-full object-cover"
        />
        <div 
          className="absolute inset-0" 
          style={{
            background: 'linear-gradient(135deg, rgba(139, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.6) 100%)'
          }}
        />
      </div>
    </div>
  );
}