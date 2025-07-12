import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

export function SocialLinks({ handleContactClick }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
      className="flex space-x-6"
    >
      {[
        { icon: Github, href: '#' },
        { icon: Linkedin, href: '#' },
        { icon: Mail, href: '#' }
      ].map((social, index) => (
        <motion.a
          key={index}
          href={social.href}
          onClick={(e) => {
            e.preventDefault();
            handleContactClick();
          }}
          whileHover={{ scale: 1.2, rotate: 5 }}
          className="w-12 h-12 bg-slate/5 backdrop-blur-sm rounded-full flex items-center justify-center text-slate hover:bg-slate/10 transition-all duration-300 border border-slate/10 shadow-sm"
        >
          <social.icon className="w-6 h-6" />
        </motion.a>
      ))}
    </motion.div>
  );
}