"use client";

import { motion } from "framer-motion";
import { Star, ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const products = [
  {
    id: 1,
    name: "Engraved Frames",
    price: "From ₹1,299",
    rating: 5,
    reviews: 152,
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHx3b29kZW4lMjBwaG90byUyMGZyYW1lfGVufDB8fHx8fDEw&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 2,
    name: "Wooden Plaques",
    price: "From ₹999",
    rating: 5,
    reviews: 98,
    image: "https://images.unsplash.com/photo-1606326608606-3bc2e3eb7ed2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjBlbmdyYXZlZCUyMHBsYXF1ZXxlbnwwfHx8fHwxMA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 3,
    name: "Wooden Nameplates",
    price: "From ₹799",
    rating: 5,
    reviews: 120,
    image: "https://images.unsplash.com/photo-1616486701772-6db9a6b1a5c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjBuYW1lcGxhdGV8ZW58MHx8fHx8MTA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 4,
    name: "Wooden Keychains",
    price: "From ₹199",
    rating: 4,
    reviews: 240,
    image: "https://images.unsplash.com/photo-1495578942200-c50d3c9f5fe5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjBrZXljaGFpbnxlbnwwfHx8fHwxMA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 5,
    name: "Wooden Calendars",
    price: "From ₹699",
    rating: 5,
    reviews: 86,
    image: "https://images.unsplash.com/photo-1581368484726-851b5f2a4a38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjBjYWxlbmRhcnxlbnwwfHx8fHwxMA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 6,
    name: "Wooden Photo Stands",
    price: "From ₹599",
    rating: 5,
    reviews: 73,
    image: "https://images.unsplash.com/photo-1549187774-b4e9b0445b41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHx3b29kZW4lMjBwaG90byUyMHN0YW5kfGVufDB8fHx8fDEw&ixlib=rb-4.1.0&q=80&w=1080",
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