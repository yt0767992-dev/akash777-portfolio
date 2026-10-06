import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Code, Layers, Info, Search, X } from 'lucide-react';
import { portfolioConfig } from '../data/portfolioData';

export const Languages: React.FC = () => {
  const { languages } = portfolioConfig;
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'All Technologies' },
    { id: 'web', label: 'Web Stack' },
    { id: 'systems', label: 'Systems & Native' },
    { id: 'core', label: 'Core Languages' },
    { id: 'mobile', label: 'Mobile & App' },
    { id: 'data', label: 'Database & SQL' },
  ];

  // Filter languages by category and search query
  const filteredLanguages = useMemo(() => {
    return languages.filter(lang => {
      const matchesCategory = selectedCategory === 'all' || lang.category === selectedCategory;
      const matchesSearch = lang.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [languages, selectedCategory, searchQuery]);

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono tracking-widest uppercase mb-4"
          >
            <Code className="w-3.5 h-3.5 text-cyan-400" />
            Tech Stack & Code
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            MY <span className="text-gradient-cyber">PROGRAMMING LANGUAGES</span>
          </motion.h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            Explore 19+ versatile languages, frameworks, and runtime environments in my tech arsenal.
          </p>

          {/* Configurable Note Disclaimer */}
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-dark-900/80 border border-white/5 text-xs text-slate-400 max-w-xl text-left">
            <Info className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>
              <strong className="text-slate-200">Customizable list:</strong> Easily add or remove languages in <code className="text-cyan-300 font-mono">src/data/portfolioData.ts</code>.
            </span>
          </div>
        </div>

        {/* Live Search Bar & Filter Controls */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <Search className="w-4 h-4 text-cyan-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search any language (e.g. Python, TypeScript, C++, Rust)..."
              className="w-full pl-11 pr-10 py-3 rounded-2xl bg-dark-900/90 border border-white/10 focus:border-cyan-400 focus:outline-none text-white text-sm placeholder:text-slate-500 shadow-inner transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const count = cat.id === 'all'
              ? languages.length
              : languages.filter(l => l.category === cat.id).length;

            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-mono tracking-wider uppercase transition-all duration-200 flex items-center gap-2 ${
                  selectedCategory === cat.id
                    ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 border border-cyan-400/50 shadow-neon-blue'
                    : 'bg-dark-900/60 text-slate-400 hover:text-white border border-white/5 hover:border-white/20'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`px-1.5 py-0.5 rounded text-[10px] ${
                  selectedCategory === cat.id ? 'bg-cyan-500/30 text-white' : 'bg-dark-950 text-slate-500'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Languages Grid */}
        {filteredLanguages.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6">
            {filteredLanguages.map((lang) => (
              <div
                key={lang.name}
                className="glass-card group p-5 rounded-2xl flex flex-col items-center justify-center text-center relative overflow-hidden cursor-default transition-all duration-200 hover:-translate-y-1.5"
              >
                {/* Dynamic Glow Spotlight on Hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-15 transition-opacity duration-300 blur-xl -z-10"
                  style={{ backgroundColor: lang.color }}
                />

                {/* Icon Container */}
                <div className="w-16 h-16 rounded-2xl bg-dark-900/90 border border-white/10 flex items-center justify-center p-3 mb-3.5 group-hover:border-cyan-400/40 group-hover:shadow-lg transition-all duration-200">
                  <img
                    src={lang.icon}
                    alt={`${lang.name} logo`}
                    className="w-full h-full object-contain filter drop-shadow group-hover:scale-110 transition-transform duration-200"
                    loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                </div>

                {/* Language Name */}
                <h3 className="text-sm font-bold text-slate-200 group-hover:text-white transition-colors">
                  {lang.name}
                </h3>

                {/* Category Tag */}
                <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 group-hover:text-cyan-400/80 transition-colors mt-1">
                  {lang.category}
                </span>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-16 text-center glass-card rounded-2xl border border-white/5 max-w-md mx-auto">
            <Code className="w-10 h-10 text-slate-500 mx-auto mb-3" />
            <p className="text-sm text-slate-300 font-semibold">No technologies matched "{searchQuery}"</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
              className="mt-4 px-4 py-2 rounded-xl bg-cyan-500/20 text-cyan-300 text-xs font-mono hover:bg-cyan-500/30 transition-colors"
            >
              Reset Search & Filters
            </button>
          </div>
        )}

        {/* Footer info badge */}
        <div className="mt-14 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-slate-500">
            <Layers className="w-4 h-4 text-purple-400" />
            <span>Showing {filteredLanguages.length} of {languages.length} technologies in stack</span>
          </div>
        </div>
      </div>
    </section>
  );
};
