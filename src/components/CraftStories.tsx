"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const stories = [
  {
    id: 1,
    quote: "The personalized frame brought tears to my eyes. Every detail tells our love story.",
    author: "Sarah & Michael",
    image: "https://images.unsplash.com/photo-1685022515804-af2e8b3b75e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwd29vZHdvcmtpbmd8ZW58MXx8fHwxNzYxMzkyNzAxfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 2,
    quote: "A perfect gift for my parents' anniversary. The craftsmanship is exceptional.",
    author: "David Thompson",
    image: "https://images.unsplash.com/photo-1726225129849-233d8f893c5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kJTIwY2FydmluZyUyMGRldGFpbHxlbnwxfHx8fDE3NjEzOTI3MDF8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 3,
    quote: "The attention to detail is incredible. This is more than a gift, it's a keepsake.",
    author: "Emily Chen",
    image: "https://images.unsplash.com/photo-1635826081711-cbb4520904fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kJTIwZW5ncmF2aW5nJTIwcGVyc29uYWxpemVkfGVufDF8fHx8MTc2MTM5MjY5OXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

export function CraftStories() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-12 sm:py-16 lg:py-20 overflow-hidden" style={{ background: '#F8F8F8' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center px-4"
          style={{
            fontFamily: '"DM Serif Display", serif',
            color: '#8B0000',
          }}
        >
          Crafting Memories, One Piece at a Time
        </motion.h2>
      </div>

      {/* Horizontal Scroll Container with Snap */}
      <div 
        ref={scrollRef}
        className="flex gap-4 sm:gap-6 overflow-x-auto px-4 sm:px-6 lg:px-8 pb-4 snap-x snap-mandatory scrollbar-hide"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {stories.map((story, index) => (
          <motion.div
            key={story.id}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex-none w-[85vw] sm:w-[400px] h-[450px] sm:h-[500px] relative rounded-2xl overflow-hidden group cursor-pointer snap-center"
            style={{
              border: '2px solid transparent',
              backgroundImage: 'linear-gradient(#F8F8F8, #F8F8F8), linear-gradient(135deg, #8B0000, #D32F2F)',
              backgroundOrigin: 'border-box',
              backgroundClip: 'padding-box, border-box',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.02)';
              e.currentTarget.style.boxShadow = '0 8px 30px rgba(139, 0, 0, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
            }}
          >
            <ImageWithFallback
              src={story.image}
              alt={story.author}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            
            {/* Quote Overlay - Better contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/95 via-[#000000]/60 to-transparent flex flex-col justify-end p-6 sm:p-8">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-4 text-xl sm:text-2xl italic leading-relaxed"
                style={{
                  fontFamily: '"DM Serif Display", serif',
                  color: '#FFFFFF',
                  lineHeight: '1.4',
                  textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
                }}
              >
                "{story.quote}"
              </motion.p>
              <p
                className="text-sm sm:text-base"
                style={{
                  fontFamily: 'Manrope, sans-serif',
                  fontWeight: 600,
                  color: '#FF6B6B',
                  letterSpacing: '0.05em',
                }}
              >
                — {story.author}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Scroll Hint for Mobile */}
      <div className="text-center mt-6 sm:hidden">
        <p
          className="text-sm"
          style={{
            fontFamily: 'Inter, sans-serif',
            color: '#999999',
          }}
        >
          Swipe to see more →
        </p>
      </div>
    </section>
  );
}