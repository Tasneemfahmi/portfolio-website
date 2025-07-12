import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Projects({ handleContactClick }) {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React frontend, Node.js backend, and mobile app.',
      tech: ['React', 'Node.js', 'PostgreSQL', 'React Native'],
      image: 'Modern e-commerce platform with shopping cart and payment integration'
    },
    {
      title: 'AI-Powered Analytics Dashboard',
      description: 'Real-time analytics dashboard with machine learning insights and predictive modeling.',
      tech: ['Vue.js', 'Python', 'TensorFlow', 'MongoDB'],
      image: 'Sleek analytics dashboard with charts and AI insights'
    },
    {
      title: 'Cross-Platform Social App',
      description: 'Social networking app built with Flutter, featuring real-time messaging and content sharing.',
      tech: ['Flutter', 'Firebase', 'Dart', 'Cloud Functions'],
      image: 'Modern social media app interface with messaging features'
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-soft-bg">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-dark mb-6">
            Featured <span className="bg-gradient-to-r from-rose via-pale_blue to-sage bg-clip-text text-transparent animate-gradient">Projects</span>
          </h2>
          <p className="text-xl text-slate-light max-w-3xl mx-auto">
            A showcase of my work across different platforms and technologies, demonstrating my full-stack capabilities.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl overflow-hidden border border-slate/10 hover:border-rose/50 transition-all duration-300 shadow-sm hover:shadow-xl card-hover"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  alt={`Screenshot of ${project.title}`}
                  className="w-full h-full object-cover"
                  src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-dark mb-3">{project.title}</h3>
                <p className="text-slate-light mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gradient-to-r from-rose/10 to-sage/10 rounded-md text-xs text-rose-dark font-medium border border-rose/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-3">
                  <Button
                    onClick={handleContactClick}
                    size="sm"
                    className="bg-slate-dark hover:bg-slate-dark/90 text-ivory flex-1"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Live
                  </Button>
                  <Button
                    onClick={handleContactClick}
                    size="sm"
                    variant="outline"
                    className="border-slate text-slate hover:bg-slate hover:text-ivory"
                  >
                    <Github className="w-4 h-4" />
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