import React from 'react';
import { motion } from 'framer-motion';
import { FolderGit2, ExternalLink, Github, Sparkles, AlertCircle } from 'lucide-react';
import { portfolioConfig } from '../data/portfolioData';

export const Projects: React.FC = () => {
  const { projects } = portfolioConfig;

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-300 text-xs font-mono tracking-widest uppercase mb-4"
          >
            <FolderGit2 className="w-3.5 h-3.5 text-pink-400" />
            Showcase & Prototypes
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            MY <span className="text-gradient-cyber">PROJECTS</span>
          </motion.h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            Featured software architectures, bots, and digital projects currently in progress or planned.
          </p>

          <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-dark-900/80 border border-white/5 text-xs text-amber-300/90">
            <AlertCircle className="w-4 h-4 text-amber-400 shrink-0" />
            <span>Example & Placeholder projects are clearly designated below as prototypes.</span>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="glass-card rounded-3xl overflow-hidden flex flex-col group border border-white/10 hover:border-cyan-500/40"
            >
              {/* Image Container */}
              <div className="relative aspect-video overflow-hidden bg-dark-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90 group-hover:brightness-100"
                  loading="lazy"
                />
                
                {/* Gradient shade */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/40 to-transparent" />

                {/* Badge tags on top */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-dark-950/80 backdrop-blur-md border border-cyan-400/30 text-[11px] font-mono text-cyan-300">
                    {project.category}
                  </span>
                  {project.isPlaceholder && (
                    <span className="px-3 py-1 rounded-full bg-amber-500/20 backdrop-blur-md border border-amber-500/40 text-[11px] font-mono text-amber-300 flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      Concept / Placeholder
                    </span>
                  )}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-3">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-300/90 leading-relaxed mb-6 font-light">
                    {project.description}
                  </p>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg bg-dark-900/80 border border-white/5 text-xs font-mono text-purple-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions & Links */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-500">
                    {project.isPlaceholder ? "Development Status: In Planning" : "Status: Active"}
                  </span>

                  <div className="flex items-center gap-3">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-xl bg-dark-900 border border-white/10 hover:border-cyan-400/50 hover:text-cyan-300 text-slate-300 transition-all"
                        aria-label="GitHub Repository"
                        title="GitHub Repository"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {project.demoUrl && project.demoUrl !== '#' && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white text-xs font-bold font-mono tracking-wider flex items-center gap-1.5 transition-all shadow-md"
                      >
                        <span>Preview</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
