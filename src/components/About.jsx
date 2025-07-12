import React from 'react';
import { motion } from 'framer-motion';

export function About() {
  return (
    <section id="about" className="py-20 px-6 bg-soft-bg">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-dark mb-6">
            About <span className="bg-gradient-to-r from-rose via-pale_blue to-sage bg-clip-text text-transparent animate-gradient">Me</span>
          </h2>
          <div className="max-w-4xl mx-auto space-y-6 text-lg text-slate-light leading-relaxed">
            <p>
  I'm Tasneem Fahmi — a creative and capable freelance developer who brings elegant solutions to life across the entire technology stack. From crafting intuitive frontend interfaces to building solid backend systems, and exploring the potential of mobile and AI — I code in every dimension.
</p>
<p>
  I’m passionate about blending clean design with thoughtful engineering. To me, great software isn’t just about function — it’s about experience, flow, and intention. Whether it’s a responsive web app, a lightweight API, or a handcrafted portfolio, I bring clarity, creativity, and precision to every project I take on.
</p>
<p>
  The <strong>.xyz</strong> in my domain reflects more than a domain trend — it’s a symbol of my versatility. X stands for frontend, Y for backend, and Z for everything beyond — mobile, DevOps, and whatever the next challenge may be. My work is fueled by curiosity, care, and a constant desire to push boundaries.
</p>

          </div>
        </motion.div>
      </div>
    </section>
  );
}