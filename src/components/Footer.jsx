import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer({ handleContactClick }) {
  return (
    <footer className="py-12 px-6 bg-soft-bg border-t border-slate/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-2xl font-bold bg-gradient-to-r from-rose via-pale_blue to-sage bg-clip-text text-transparent">
              tasneemfahmi.xyz
            </p>
            <p className="text-slate-light mt-2">
              Full-Stack Developer • Crafting Thoughtful Interfaces & Seamless
              Experiences
            </p>{" "}
          </div>

          <div className="flex space-x-6">
            {[
              {
                icon: Github,
                href: "https://github.com/Tasneemfahmi",
                external: true,
              },
              {
                icon: Linkedin,
                href: "https://www.linkedin.com/in/tasneem-fahmi-madkour/",
                external: true,
              },
              {
                icon: Mail,
                href: "mailto:tasneemfahmimadkour@gmail.com",
                external: true,
              },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target={social.external ? "_blank" : undefined}
                rel={social.external ? "noopener noreferrer" : undefined}
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 bg-slate/5 rounded-full flex items-center justify-center text-slate hover:bg-slate/10 transition-all duration-300 border border-slate/10"
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate/10 text-center">
          <p className="text-slate-light/70">
            © 2025 Tasneem Fahmi. Built with heart, styled with intention.
          </p>
        </div>
      </div>
    </footer>
  );
}
