import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Smartphone, Globe, Server, Palette } from 'lucide-react';

export function TechStack() {
  const techStack = [
    { name: 'Frontend', icon: Globe, skills: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Next.js', 'Framer-motion'] },
    { name: 'Backend', icon: Server, skills: ['Node.js','Express.js', 'Nest.js'] },
    { name: 'Mobile', icon: Smartphone, skills: ['React Native', 'Flutter', 'Swift', 'Kotlin'] },
    { name: 'Database', icon: Database, skills: ['PostgreSQL', 'MongoDB', 'Firebase'] },
    // { name: 'DevOps', icon: Code, skills: ['Docker', 'AWS', 'CI/CD', 'Kubernetes'] },
    { name: 'Design', icon: Palette, skills: ['Figma', 'Adobe XD', 'UI/UX', 'Prototyping'] },
    { name: 'Other', icon: Code, skills: ['Git', 'GitHub'] }
  ];

  return (
    <section id="tech-stack" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-dark mb-6">
            Tech <span className="bg-gradient-to-r from-rose via-pale_blue to-sage bg-clip-text text-transparent animate-gradient">Stack</span>
          </h2>
          <p className="text-xl text-slate-light max-w-3xl mx-auto">
            My toolkit spans the entire development ecosystem, enabling me to build comprehensive solutions from concept to deployment.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techStack.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 border border-slate/10 hover:border-rose/50 transition-all duration-300 shadow-sm hover:shadow-xl card-hover"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-tr from-rose via-pale_blue to-sage animate-gradient rounded-xl flex items-center justify-center mr-4 shadow-lg shadow-rose/20">
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-dark">{category.name}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-slate/5 rounded-full text-sm text-slate hover:bg-slate/10 transition-colors duration-300 border border-slate/10"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}