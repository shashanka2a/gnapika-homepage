"use client";

import { motion } from "framer-motion";
import { Star, ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const products = [
  {
    id: 1,
    name: "Custom Photo Frame",
    price: "₹1,299",
    rating: 5,
    reviews: 128,
    image: "https://images.unsplash.com/photo-1461111522902-dd281dcb6ff4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kJTIwZnJhbWUlMjBwaG90b3xlbnwxfHx8fDE3NjEzOTI3MDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 2,
    name: "Engraved Gift Box",
    price: "₹899",
    rating: 5,
    reviews: 94,
    image: "https://images.unsplash.com/photo-1732532973406-0a82b447739c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjBnaWZ0JTIwYm94fGVufDF8fHx8MTc2MTM5MjIyOXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 3,
    name: "Personalized Keychain",
    price: "₹299",
    rating: 4,
    reviews: 215,
    image: "https://images.unsplash.com/photo-1744329630135-06bb9d5e02a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjBrZXljaGFpbnxlbnwxfHx8fDE3NjEzMzk4NzV8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

export function TopSelling() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8" style={{ background: '#FFFFFF' }}>
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-3 sm:mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center"
          style={{
            fontFamily: '"DM Serif Display", serif',
            color: '#8B0000',
          }}
        >
          Top Selling Products
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8 sm:mb-12 text-center text-base sm:text-lg px-4"
          style={{
            fontFamily: 'Inter, sans-serif',
            color: '#666666',
          }}
        >
          Engrave your loved ones with gift of your choice
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-xl sm:rounded-2xl overflow-hidden"
              style={{
                boxShadow: '0 2px 12px rgba(0, 0, 0, 0.08)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(139, 0, 0, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 12px rgba(0, 0, 0, 0.08)';
              }}
            >
              <div className="relative overflow-hidden aspect-square">
                <ImageWithFallback
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Quick View Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span
                    className="text-xs"
                    style={{
                      fontFamily: 'Manrope, sans-serif',
                      fontWeight: 600,
                      color: '#8B0000',
                    }}
                  >
                    Quick View
                  </span>
                </div>
              </div>

              <div className="p-5 sm:p-6 space-y-3 sm:space-y-4">
                <h3
                  className="text-lg sm:text-xl"
                  style={{
                    fontFamily: 'Manrope, sans-serif',
                    fontWeight: 600,
                    color: '#1A1A1A',
                  }}
                >
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-2">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4"
                        fill={i < product.rating ? '#FFB800' : 'none'}
                        stroke={i < product.rating ? '#FFB800' : '#D1D5DB'}
                        strokeWidth={1.5}
                      />
                    ))}
                  </div>
                  <span
                    className="text-sm"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      color: '#6B7280',
                    }}
                  >
                    ({product.reviews})
                  </span>
                </div>

                {/* Price and CTA */}
                <div className="flex items-center justify-between pt-2">
                  <span
                    className="text-xl sm:text-2xl"
                    style={{
                      fontFamily: 'Manrope, sans-serif',
                      fontWeight: 700,
                      color: '#1A1A1A',
                    }}
                  >
                    {product.price}
                  </span>
                  <Button
                    className="gap-2 transition-all duration-300 active:scale-95 min-h-[44px] px-4 sm:px-5"
                    style={{
                      background: '#8B0000',
                      color: '#FFFFFF',
                      border: 'none',
                      fontFamily: 'Manrope, sans-serif',
                      fontWeight: 600,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#A00000';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = '#8B0000';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    <ShoppingCart className="w-4 h-4" />
                    <span className="hidden sm:inline">Add to Cart</span>
                    <span className="sm:hidden">Add</span>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}