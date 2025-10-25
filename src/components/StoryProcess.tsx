"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const processSteps = [
  "Each piece begins with carefully selected, sustainable wood. We work with artisans who understand that every grain tells a story.",
  "Our craftsmen employ time-honored techniques passed down through generations, combined with modern precision to create unique, personalized gifts.",
  "From the first sketch to the final polish, every step is infused with care and attention to detail. Your story becomes our craft.",
  "We believe in creating heirlooms, not just products. Each item is built to last, carrying memories through generations.",
];

export function StoryProcess() {
  const textRef = useRef(null);
  const isInView = useInView(textRef, { once: true, margin: "-100px" });

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8" style={{ background: '#F8F8F8' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-2xl overflow-hidden h-[400px] sm:h-[500px] lg:h-[600px] order-2 lg:order-1"
            style={{
              boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
            }}
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1685022515804-af2e8b3b75e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwd29vZHdvcmtpbmd8ZW58MXx8fHwxNzYxMzkyNzAxfDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Artisan woodworking process"
              className="h-full w-full object-cover"
            />
            <div 
              className="absolute inset-0" 
              style={{
                background: 'linear-gradient(135deg, rgba(139, 0, 0, 0.15) 0%, rgba(0, 0, 0, 0.25) 100%)'
              }}
            />
          </motion.div>

          {/* Text Content */}
          <div ref={textRef} className="space-y-6 sm:space-y-8 order-1 lg:order-2">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
              style={{
                fontFamily: '"DM Serif Display", serif',
                color: '#8B0000',
              }}
            >
              From Timber to Treasure
            </motion.h2>

            <div className="space-y-5 sm:space-y-6">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="flex gap-4"
                >
                  <div
                    className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center"
                    style={{
                      background: 'linear-gradient(135deg, #8B0000, #C41E3A)',
                      boxShadow: '0 4px 10px rgba(139, 0, 0, 0.2)',
                    }}
                  >
                    <span
                      className="text-sm sm:text-base"
                      style={{
                        fontFamily: 'Manrope, sans-serif',
                        fontWeight: 700,
                        color: '#FFFFFF',
                      }}
                    >
                      {index + 1}
                    </span>
                  </div>
                  <p
                    className="text-base sm:text-lg leading-relaxed flex-1 pt-1"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      color: '#3D3D3D',
                      lineHeight: '1.7',
                    }}
                  >
                    {step}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="pt-4"
            >
              <Button
                size="lg"
                className="w-full sm:w-auto px-8 py-6 sm:py-7 text-base sm:text-lg transition-all duration-300 active:scale-95 min-h-[56px]"
                style={{
                  background: '#8B0000',
                  color: '#FFFFFF',
                  fontFamily: 'Manrope, sans-serif',
                  fontWeight: 600,
                  boxShadow: '0 4px 20px rgba(139, 0, 0, 0.3)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#A00000';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 6px 25px rgba(139, 0, 0, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#8B0000';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(139, 0, 0, 0.3)';
                }}
              >
                See How It's Made
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}