"use client";

import { Facebook, Instagram, Twitter, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8" style={{ background: '#1A1A1A' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 mb-10 sm:mb-12">
          {/* About */}
          <div>
            <h3
              className="mb-4 sm:mb-6 text-xl sm:text-2xl"
              style={{
                fontFamily: '"DM Serif Display", serif',
                color: '#FFFFFF',
              }}
            >
              🪵 About
            </h3>
            <p
              className="mb-4 leading-relaxed text-sm sm:text-base"
              style={{
                fontFamily: 'Inter, sans-serif',
                color: '#CCCCCC',
                lineHeight: '1.7',
              }}
            >
              Gnapika creates personalized wooden gifts that celebrate life's special moments. 
              Each piece is handcrafted with love and sustainable practices.
            </p>
            <p
              className="text-xs sm:text-sm"
              style={{
                fontFamily: 'Inter, sans-serif',
                color: '#8B0000',
                fontStyle: 'italic',
              }}
            >
              Committed to sustainability and eco-friendly craftsmanship.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h3
              className="mb-4 sm:mb-6 text-xl sm:text-2xl"
              style={{
                fontFamily: '"DM Serif Display", serif',
                color: '#FFFFFF',
              }}
            >
              🛠️ Shop
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {['Wooden Frames', 'Miniatures', 'Keychains', 'Wall Art', 'Gift Boxes', 'Custom Orders'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="transition-all duration-300 inline-block text-sm sm:text-base active:translate-x-1"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      color: '#CCCCCC',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#8B0000';
                      e.currentTarget.style.transform = 'translateX(4px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#CCCCCC';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3
              className="mb-4 sm:mb-6 text-xl sm:text-2xl"
              style={{
                fontFamily: '"DM Serif Display", serif',
                color: '#FFFFFF',
              }}
            >
              💌 Connect
            </h3>
            <p
              className="mb-6 leading-relaxed text-sm sm:text-base"
              style={{
                fontFamily: 'Inter, sans-serif',
                color: '#CCCCCC',
                lineHeight: '1.7',
              }}
            >
              Follow us for inspiration, behind-the-scenes content, and exclusive offers.
            </p>
            <div className="flex gap-3 sm:gap-4">
              {[
                { icon: Facebook, label: 'Facebook' },
                { icon: Instagram, label: 'Instagram' },
                { icon: Twitter, label: 'Twitter' },
                { icon: Mail, label: 'Email' },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  className="p-3 sm:p-3.5 rounded-full transition-all duration-300 active:scale-95"
                  style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    minWidth: '44px',
                    minHeight: '44px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#8B0000';
                    e.currentTarget.style.borderColor = '#8B0000';
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(139, 0, 0, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" style={{ color: '#FFFFFF' }} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t" style={{ borderColor: 'rgba(255, 255, 255, 0.2)' }}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <p
              className="text-sm sm:text-base"
              style={{
                fontFamily: 'Inter, sans-serif',
                color: '#CCCCCC',
              }}
            >
              © 2025 Gnapika. All rights reserved.
            </p>
            <p
              className="text-xs sm:text-sm italic max-w-xl"
              style={{
                fontFamily: '"DM Serif Display", serif',
                color: '#8B0000',
                lineHeight: '1.5',
              }}
            >
              Personalized Wooden Gifts That Tell Your Story — Handcrafted with Love, Delivered with Artistry.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}