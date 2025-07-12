import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Download, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero({ handleContactClick, handleResumeDownload }) {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-5xl lg:text-7xl font-bold"
              >
                <span className="bg-gradient-to-r from-rose via-pale_blue to-sage bg-clip-text text-transparent animate-gradient">
                  Tasneem
                </span>
                <br />
                <span className="text-slate-dark">Fahmi</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-2xl lg:text-3xl font-light text-slate"
              >
Building with Logic, Designing with Heart              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-lg text-slate-light max-w-xl"
              >
Frontend, Backend & Mobile Developer • Creative Technologist • Crafting Elegant, Impactful Experiences
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                onClick={handleContactClick}
                className="bg-slate-dark hover:bg-slate-dark/90 text-ivory px-8 py-3 rounded-full font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg shadow-slate/20"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch
              </Button>
              <Button
                onClick={handleResumeDownload}
                variant="outline"
                className="border-2 border-slate text-slate hover:bg-slate hover:text-ivory px-8 py-3 rounded-full font-semibold transform hover:scale-105 transition-all duration-300"
              >
                <Download className="w-5 h-5 mr-2" />
                Resume
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex space-x-4 pt-4"
            >
              {[
                { icon: Github, href: '#' },
                { icon: Linkedin, href: '#' },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleContactClick();
                  }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 bg-slate/5 rounded-full flex items-center justify-center text-slate hover:bg-slate/10 transition-all duration-300 border border-slate/10"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute -inset-4 bg-gradient-to-r from-terracotta/30 to-sage/30 rounded-full blur-2xl opacity-50 animate-float"></div>
              <img 
                alt="Professional headshot of Tasneem Fahmi"
                className="relative z-10 w-full rounded-2xl shadow-xl border-4 border-white"
                src="https://images.unsplash.com/photo-1618927376995-a721da8c11db" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}