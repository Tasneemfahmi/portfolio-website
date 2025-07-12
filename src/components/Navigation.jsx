import React from 'react';
import { motion } from 'framer-motion';

export function Navigation() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-ivory/80 backdrop-blur-lg border-b border-slate/10">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold bg-gradient-to-r from-rose via-pale_blue to-sage bg-clip-text text-transparent animate-gradient"
          >
            tasneemfahmi.xyz
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden md:flex space-x-8"
          >
            {['About', 'Tech Stack', 'Projects', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-slate/80 hover:text-slate transition-colors duration-300 hover:scale-105 transform relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-rose via-pale_blue to-sage group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </nav>
  );
}