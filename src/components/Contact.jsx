import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Contact({ handleContactClick }) {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-dark mb-6">
            Let's <span className="bg-gradient-to-r from-rose via-pale_blue to-sage bg-clip-text text-transparent animate-gradient">Connect</span>
          </h2>
          <p className="text-xl text-slate-light max-w-2xl mx-auto">
            Ready to bring your ideas to life? Whether it's a web application, mobile app, or full-stack solution, 
            I'm here to help you build something amazing.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={handleContactClick}
              className="bg-slate-dark hover:bg-slate-dark/90 text-ivory px-8 py-4 rounded-full font-semibold text-lg transform hover:scale-105 transition-all duration-300 shadow-lg shadow-slate/20"
            >
              <Mail className="w-5 h-5 mr-2" />
              Start a Conversation
            </Button>
            <p className="text-slate-light/70">or</p>
            <a
              href="mailto:hello@tasneemfahmi.xyz"
              className="text-rose-light hover:text-rose-dark font-semibold text-lg transition-colors duration-300"
            >
              hello@tasneemfahmi.xyz
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}