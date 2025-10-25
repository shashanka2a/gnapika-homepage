"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1635826081711-cbb4520904fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kJTIwZW5ncmF2aW5nJTIwcGVyc29uYWxpemVkfGVufDF8fHx8MTc2MTM5MjY5OXww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Personalized wood engraving"
          className="h-full w-full object-cover"
          fill
          priority
        />
        {/* Gradient Overlay - Improved contrast */}
        <div 
          className="absolute inset-0" 
          style={{
            background: 'linear-gradient(135deg, rgba(139, 0, 0, 0.85) 0%, rgba(30, 10, 10, 0.90) 100%)'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-4 sm:mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tight px-4"
            style={{ 
              fontFamily: '"DM Serif Display", serif',
              color: '#FFFFFF',
              lineHeight: '1.1',
              textShadow: '0 2px 20px rgba(0, 0, 0, 0.3)'
            }}
          >
            Create Lasting Memories with Personalized Wooden Gifts
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-8 sm:mb-10 text-lg sm:text-xl md:text-2xl px-4"
            style={{ 
              fontFamily: 'Inter, sans-serif',
              color: 'rgba(255, 255, 255, 0.95)',
              fontWeight: 300,
              textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)'
            }}
          >
            Personalized Wooden Gifts that Hold Your Unique Story
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4"
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
              Shop Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto px-8 py-6 sm:py-7 text-base sm:text-lg border-2 transition-all duration-300 active:scale-95 min-h-[56px]"
              style={{
                borderColor: '#FFFFFF',
                color: '#FFFFFF',
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                fontFamily: 'Manrope, sans-serif',
                fontWeight: 600,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Custom Order
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Animated Particles - Reduced on mobile and for reduced motion preference */}
      {!shouldReduceMotion && (
        <div className="absolute inset-0 pointer-events-none hidden sm:block">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full"
              style={{
                background: 'rgba(255, 255, 255, 0.3)',
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 5 + Math.random() * 5,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>
      )}

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-white/50 flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-white"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}