"use client";

import { motion } from "framer-motion";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const products = [
  {
    id: 1,
    name: "Photo Frames",
    image: "https://images.unsplash.com/photo-1461111522902-dd281dcb6ff4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kJTIwZnJhbWUlMjBwaG90b3xlbnwxfHx8fDE3NjEzOTI3MDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    gridClass: "col-span-3 sm:col-span-2 row-span-2",
  },
  {
    id: 2,
    name: "Gift Boxes",
    image: "https://images.unsplash.com/photo-1732532973406-0a82b447739c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjBnaWZ0JTIwYm94fGVufDF8fHx8MTc2MTM5MjIyOXww&ixlib=rb-4.1.0&q=80&w=1080",
    gridClass: "col-span-3 sm:col-span-1 row-span-1",
  },
  {
    id: 3,
    name: "Miniatures",
    image: "https://images.unsplash.com/photo-1681913616739-4236c46ff18b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjBtaW5pYXR1cmV8ZW58MXx8fHwxNzYxMzkyNzAxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    gridClass: "col-span-3 sm:col-span-1 row-span-1",
  },
  {
    id: 4,
    name: "Custom Engravings",
    image: "https://images.unsplash.com/photo-1667964395256-0a0fd2d833bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb25hbGl6ZWQlMjB3b29kZW4lMjBjcmFmdHxlbnwxfHx8fDE3NjEzOTI3MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    gridClass: "col-span-3 sm:col-span-1 row-span-1",
  },
  {
    id: 5,
    name: "Keychains",
    image: "https://images.unsplash.com/photo-1744329630135-06bb9d5e02a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjBrZXljaGFpbnxlbnwxfHx8fDE3NjEzMzk4NzV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    gridClass: "col-span-3 sm:col-span-2 row-span-1",
  },
];

export function ProductShowcase() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8" style={{ background: '#FFFFFF' }}>
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 sm:mb-12 text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center"
          style={{
            fontFamily: '"DM Serif Display", serif',
            color: '#8B0000',
          }}
        >
          Popular Products
        </motion.h2>

        {/* Bento Grid - Responsive */}
        <div className="grid grid-cols-3 auto-rows-[200px] sm:auto-rows-[280px] gap-3 sm:gap-4">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${product.gridClass} relative overflow-hidden rounded-xl sm:rounded-2xl group cursor-pointer`}
              style={{
                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.08)',
                transition: 'box-shadow 0.3s ease, transform 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(139, 0, 0, 0.15)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.08)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <ImageWithFallback
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Gradient Overlay - Better contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/85 via-[#000000]/20 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Product Name */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <h3
                  className="text-lg sm:text-2xl mb-1 sm:mb-2"
                  style={{
                    fontFamily: 'Manrope, sans-serif',
                    fontWeight: 600,
                    color: '#FFFFFF',
                    textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
                  }}
                >
                  {product.name}
                </h3>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '50px' }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="h-0.5"
                  style={{ background: '#8B0000' }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}