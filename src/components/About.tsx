import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  User, 
  MapPin, 
  Flag, 
  Gamepad2, 
  Cpu, 
  Code2, 
  Check, 
  Copy, 
  Sparkles,
  MessageSquareCode,
  Flame,
  Award,
  Terminal,
  ZoomIn
} from 'lucide-react';
import { portfolioConfig } from '../data/portfolioData';
import { CyberTerminal } from './CyberTerminal';
import { PhotoLightbox } from './PhotoLightbox';

export const About: React.FC = () => {
  const { personal } = portfolioConfig;
  const [copiedDiscord, setCopiedDiscord] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const copyDiscord = () => {
    navigator.clipboard.writeText(personal.discordUsername);
    setCopiedDiscord(true);
    setTimeout(() => setCopiedDiscord(false), 2500);
  };

  const infoCards = [
    {
      icon: <User className="w-6 h-6 text-cyan-400" />,
      label: "Official Identity",
      value: personal.name,
      sub: "Creator & Developer",
      glowColor: "cyan"
    },
    {
      icon: <MapPin className="w-6 h-6 text-emerald-400" />,
      label: "Current Location",
      value: personal.location,
      sub: "Middle East Zone",
      glowColor: "emerald"
    },
    {
      icon: <Flag className="w-6 h-6 text-pink-400" />,
      label: "Home Country",
      value: personal.homeCountry,
      sub: "Heritage & Roots",
      glowColor: "pink"
    },
    {
      icon: <Award className="w-6 h-6 text-purple-400" />,
      label: "Specialty & Focus",
      value: "Full-Stack & Cyber",
      sub: "Interactive Web & Bots",
      glowColor: "purple"
    }
  ];

  const interestIcons: Record<string, React.ReactNode> = {
    "Programming": <Code2 className="w-5 h-5 text-cyan-400" />,
    "Gaming": <Gamepad2 className="w-5 h-5 text-pink-400" />,
    "Technology": <Cpu className="w-5 h-5 text-purple-400" />,
    "Software Development": <Sparkles className="w-5 h-5 text-emerald-400" />
  };

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      
      {/* Photo HD Lightbox Modal */}
      <PhotoLightbox
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
      />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-mono tracking-widest uppercase mb-4"
          >
            <User className="w-3.5 h-3.5 text-purple-400" />
            Discover My Journey
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            ABOUT <span className="text-gradient-purple">AKASH 777</span>
          </motion.h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            Crafting digital solutions, exploring computer science, and connecting passionate tech communities worldwide.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-14">
          
          {/* Left Column: Visual Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5"
          >
            <div className="glass-panel p-6 rounded-3xl relative overflow-hidden border border-white/10 shadow-2xl">
              {/* Profile Image with Click to Zoom */}
              <div 
                onClick={() => setIsLightboxOpen(true)}
                className="relative rounded-2xl overflow-hidden aspect-[4/5] mb-6 border border-cyan-500/30 group cursor-pointer"
                title="Click to view full HD portrait"
              >
                <img
                  src={personal.avatarUrl}
                  alt={personal.name}
                  className="w-full h-full object-cover object-center filter contrast-[1.04] brightness-[1.02] saturate-[1.05] transition-transform duration-500 group-hover:scale-105"
                  style={{ imageRendering: '-webkit-optimize-contrast' }}
                />

                <div className="absolute inset-0 bg-dark-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="px-3.5 py-1.5 rounded-xl bg-dark-950/90 border border-cyan-400/60 text-xs font-mono text-cyan-300 flex items-center gap-1.5 shadow-neon-blue">
                    <ZoomIn className="w-3.5 h-3.5" />
                    <span>View HD</span>
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/20 to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 pointer-events-none">
                  <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                    Identity Verified
                  </span>
                  <h3 className="text-2xl font-bold text-white tracking-wide">
                    {personal.name}
                  </h3>
                  <p className="text-xs text-slate-300">
                    {personal.tagline}
                  </p>
                </div>
              </div>

              {/* Discord Copy Box */}
              <div className="p-4 rounded-xl bg-dark-900/90 border border-purple-500/30 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#5865F2]/20 border border-[#5865F2]/40 flex items-center justify-center text-[#5865F2]">
                    <MessageSquareCode className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 font-mono uppercase block">
                      Discord Contact
                    </span>
                    <span className="text-sm font-mono font-semibold text-slate-200">
                      {personal.discordUsername}
                    </span>
                  </div>
                </div>

                <button
                  onClick={copyDiscord}
                  className="px-3.5 py-2 rounded-lg bg-purple-600/20 hover:bg-purple-600/40 text-purple-300 hover:text-white border border-purple-500/30 text-xs font-mono flex items-center gap-1.5 transition-all cursor-pointer shadow-md"
                  title="Copy Discord Username"
                >
                  {copiedDiscord ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Dynamic Info Cards & Interests */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Bio Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card p-6 sm:p-8 rounded-3xl relative"
            >
              <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
                <Flame className="w-4 h-4 text-pink-400" />
                <span>Biography & Philosophy</span>
              </div>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-light mb-6">
                “{personal.bio}”
              </p>
              <div className="border-t border-white/5 pt-4 flex flex-wrap items-center justify-between text-xs font-mono text-slate-400">
                <span>Active Development • Modern Tech Stack</span>
                <span className="text-cyan-400">Status: Innovating 24/7</span>
              </div>
            </motion.div>

            {/* Grid of Key Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {infoCards.map((card, index) => (
                <motion.div
                  key={card.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="glass-card p-5 rounded-2xl flex items-start gap-4 group cursor-default"
                >
                  <div className="p-3 rounded-xl bg-dark-900 border border-white/10 group-hover:scale-110 transition-transform">
                    {card.icon}
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase text-slate-400 tracking-wider block">
                      {card.label}
                    </span>
                    <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {card.value}
                    </h4>
                    <span className="text-xs text-slate-500 font-mono">
                      {card.sub}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Interests & Passions Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="glass-card p-6 rounded-3xl"
            >
              <h4 className="text-sm font-mono uppercase tracking-wider text-slate-300 mb-4 flex items-center gap-2">
                <Gamepad2 className="w-4 h-4 text-purple-400" />
                Interests & Core Passions
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {personal.interests.map((interest) => (
                  <div
                    key={interest}
                    className="p-3.5 rounded-xl bg-dark-900/70 border border-white/5 hover:border-purple-500/40 transition-all flex flex-col items-center justify-center text-center gap-2 group cursor-default"
                  >
                    <div className="p-2 rounded-lg bg-dark-950 group-hover:scale-110 transition-transform">
                      {interestIcons[interest] || <Sparkles className="w-5 h-5 text-cyan-400" />}
                    </div>
                    <span className="text-xs font-semibold text-slate-200 group-hover:text-cyan-300 transition-colors">
                      {interest}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>

        </div>

        {/* Live Interactive Cyber Terminal HUD */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-6"
        >
          <div className="flex items-center gap-2 mb-4 text-xs font-mono text-cyan-400 uppercase tracking-widest">
            <Terminal className="w-4 h-4" />
            <span>Interactive Cyber Shell Console</span>
          </div>
          <CyberTerminal />
        </motion.div>

      </div>
    </section>
  );
};
