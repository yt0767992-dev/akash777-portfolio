import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowDown, 
  Send, 
  Sparkles, 
  MapPin, 
  Code, 
  Terminal, 
  Zap, 
  ShieldCheck, 
  Crosshair, 
  Music, 
  Cpu, 
  Layers, 
  Users,
  ZoomIn
} from 'lucide-react';
import { portfolioConfig } from '../data/portfolioData';
import { PhotoLightbox } from './PhotoLightbox';

export const Hero: React.FC = () => {
  const { personal, languages, discordServers } = portfolioConfig;
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Typing animation effect
  useEffect(() => {
    const currentWord = personal.professions[currentTextIndex];
    const typingSpeed = isDeleting ? 40 : 80;
    const pauseDelay = isDeleting ? 400 : 1800;

    if (!isDeleting && displayedText === currentWord) {
      const timer = setTimeout(() => setIsDeleting(true), pauseDelay);
      return () => clearTimeout(timer);
    }

    if (isDeleting && displayedText === '') {
      setIsDeleting(false);
      setCurrentTextIndex((prev) => (prev + 1) % personal.professions.length);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayedText(prev =>
        isDeleting
          ? currentWord.substring(0, prev.length - 1)
          : currentWord.substring(0, prev.length + 1)
      );
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentTextIndex, personal.professions]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const statMetrics = [
    { label: "Tech Stack", value: `${languages.length}+`, icon: <Cpu className="w-4 h-4 text-cyan-400" />, sub: "Languages & Frameworks" },
    { label: "Community", value: `${discordServers.length}`, icon: <Users className="w-4 h-4 text-purple-400" />, sub: "Discord Servers" },
    { label: "Identity", value: "Verified", icon: <ShieldCheck className="w-4 h-4 text-pink-400" />, sub: "Authentic Creator" },
    { label: "Architecture", value: "Full-Stack", icon: <Layers className="w-4 h-4 text-emerald-400" />, sub: "Web, Bots & Gaming" },
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 sm:pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* Photo HD Lightbox Modal */}
      <PhotoLightbox
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
      />

      <div className="max-w-7xl mx-auto w-full">
        
        {/* Main Grid: Info + Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center mb-12 sm:mb-16">
          
          {/* Left Column: Text & CTA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col items-start text-left z-10"
          >
            {/* Top Badges Row */}
            <div className="flex flex-wrap items-center gap-2.5 mb-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-dark-900/90 border border-cyan-500/40 shadow-sm">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
                </span>
                <span className="text-xs font-mono font-semibold text-cyan-300 tracking-wide uppercase">
                  {personal.status}
                </span>
              </div>

              {/* Soundtrack Mini Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-purple-500/15 border border-purple-500/30 text-purple-300 text-xs font-mono">
                <Music className="w-3.5 h-3.5 text-purple-400 animate-pulse" />
                <span>Audio: Luz Roja</span>
              </div>
            </div>

            {/* Main Name Heading with Luxury Holographic Drop-Shadow */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white mb-2 leading-none">
              HI, I'M <span className="text-gradient-cyber drop-shadow-[0_0_35px_rgba(0,240,255,0.4)]">{personal.name}</span>
            </h1>

            {/* Sub-tagline */}
            <div className="flex flex-wrap items-center gap-2 text-sm sm:text-base md:text-lg font-bold text-slate-300 tracking-wider uppercase mb-5">
              <div className="p-1 rounded-md bg-purple-500/20 text-purple-400">
                <Terminal className="w-4 h-4" />
              </div>
              <span className="text-white">FULL-STACK DEVELOPER</span>
              <span className="text-cyan-400 font-mono">•</span>
              <span className="text-purple-400">PROGRAMMER</span>
              <span className="text-cyan-400 font-mono">•</span>
              <span className="text-pink-400">CONTENT CREATOR</span>
            </div>

            {/* Animated Typing Role */}
            <div className="h-12 flex items-center mb-6 text-xl sm:text-2xl md:text-3xl font-mono text-cyan-300">
              <span className="text-purple-400 mr-2 font-bold">&gt;</span>
              <span className="font-semibold">{displayedText}</span>
              <span className="w-3 h-8 ml-1 bg-cyan-400 animate-pulse inline-block shadow-[0_0_10px_#00f0ff]" />
            </div>

            {/* Bio Introduction */}
            <p className="text-base sm:text-lg text-slate-300/90 leading-relaxed max-w-2xl mb-8 font-light">
              {personal.bio}
            </p>

            {/* Quick Meta Badges */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-9 text-xs sm:text-sm text-slate-300 font-mono">
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-dark-900/80 border border-cyan-500/30">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>{personal.location}</span>
                <span className="text-slate-500">({personal.homeCountry})</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-dark-900/80 border border-purple-500/30">
                <Zap className="w-4 h-4 text-purple-400" />
                <span>Next-Gen Tech Architecture</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <button
                onClick={() => scrollTo('projects')}
                className="relative group px-8 py-4 rounded-2xl font-bold text-sm tracking-wider uppercase text-white overflow-hidden shadow-neon-blue transition-all duration-200 hover:scale-[1.02] flex items-center justify-center gap-2 cursor-pointer active:scale-95"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500" />
                <span className="relative z-10 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  EXPLORE MY PORTFOLIO
                </span>
              </button>

              <button
                onClick={() => scrollTo('contact')}
                className="px-8 py-4 rounded-2xl font-bold text-sm tracking-wider uppercase text-cyan-300 bg-dark-900/90 border border-cyan-500/40 hover:border-cyan-300 hover:bg-dark-850 hover:text-white transition-all duration-200 hover:scale-[1.02] flex items-center justify-center gap-2 shadow-lg cursor-pointer active:scale-95"
              >
                <Send className="w-4 h-4 text-cyan-400" />
                CONTACT ME
              </button>
            </div>
          </motion.div>

          {/* Right Column: Ultra-High-Fidelity Photo Card with Click-to-Zoom Lightbox */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-5 flex justify-center items-center relative z-10"
          >
            {/* Ambient Aura Glow */}
            <div 
              className="absolute w-80 sm:w-96 h-80 sm:h-96 rounded-full -z-10 pointer-events-none opacity-50"
              style={{
                background: 'radial-gradient(circle, rgba(0,240,255,0.3) 0%, rgba(139,92,246,0.2) 50%, transparent 70%)'
              }}
            />

            {/* Photo Card with Iridescent Cyber Frame */}
            <div 
              onClick={() => setIsLightboxOpen(true)}
              className="relative p-2.5 rounded-3xl bg-gradient-to-tr from-cyan-400 via-purple-600 to-pink-500 shadow-neon-purple transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(0,240,255,0.4)] cursor-pointer group transform-gpu"
              title="Click to view full HD portrait"
            >
              {/* Outer HUD Corner Accents */}
              <div className="absolute -top-2 -left-2 text-cyan-400 text-xs font-mono font-bold">[ + ]</div>
              <div className="absolute -top-2 -right-2 text-cyan-400 text-xs font-mono font-bold">[ + ]</div>
              <div className="absolute -bottom-2 -left-2 text-purple-400 text-xs font-mono font-bold">[ + ]</div>
              <div className="absolute -bottom-2 -right-2 text-purple-400 text-xs font-mono font-bold">[ + ]</div>

              <div className="relative rounded-[22px] overflow-hidden bg-dark-950 p-2">
                <div className="relative w-64 sm:w-80 md:w-96 aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                  
                  {/* Real Photo with Crystal Clear Optimization */}
                  <img
                    src={personal.avatarUrl}
                    alt={personal.name}
                    className="w-full h-full object-cover object-top filter contrast-[1.04] brightness-[1.02] saturate-[1.05] transition-transform duration-500 group-hover:scale-105"
                    style={{ imageRendering: '-webkit-optimize-contrast' }}
                    loading="eager"
                  />

                  {/* Hover Zoom Prompt Badge */}
                  <div className="absolute inset-0 bg-dark-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="px-4 py-2 rounded-2xl bg-dark-950/90 border border-cyan-400/60 backdrop-blur-md text-xs font-mono text-cyan-300 flex items-center gap-2 shadow-neon-blue">
                      <ZoomIn className="w-4 h-4 text-cyan-400" />
                      <span>Click to view Full HD Portrait</span>
                    </div>
                  </div>

                  {/* Gradient bottom overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950/85 via-transparent to-transparent opacity-65 pointer-events-none" />

                  {/* Corner Accent Tech Badges */}
                  <div className="absolute top-3 left-3 px-3 py-1.5 rounded-lg bg-dark-950/90 backdrop-blur-md border border-cyan-400/40 text-[11px] font-mono text-cyan-300 flex items-center gap-2 shadow-lg pointer-events-none">
                    <Crosshair className="w-3.5 h-3.5 text-cyan-400" />
                    AKASH 777
                  </div>

                  <div className="absolute bottom-3 right-3 px-3.5 py-1.5 rounded-lg bg-dark-950/90 backdrop-blur-md border border-purple-400/40 text-[11px] font-mono text-purple-300 flex items-center gap-1.5 shadow-lg pointer-events-none">
                    <Code className="w-3.5 h-3.5 text-purple-400" />
                    VERIFIED CREATOR
                  </div>

                  {/* Coordinate Tag */}
                  <div className="absolute bottom-3 left-3 px-2 py-1 rounded bg-dark-950/80 border border-white/10 text-[9px] font-mono text-slate-400 pointer-events-none">
                    24.7136° N, 46.6753° E
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Tech Badges */}
            <div className="absolute -top-5 -right-4 sm:-right-5 px-4 py-2 rounded-2xl bg-dark-900/95 border border-purple-500/50 shadow-neon-purple flex items-center gap-2.5 z-20 pointer-events-none">
              <div className="w-2.5 h-2.5 rounded-full bg-purple-400 animate-pulse" />
              <span className="text-xs font-mono text-purple-200 font-bold">FULL-STACK</span>
            </div>

            <div className="absolute -bottom-5 -left-4 sm:-left-5 px-4 py-2.5 rounded-2xl bg-dark-900/95 border border-cyan-500/50 shadow-neon-blue flex items-center gap-2.5 z-20 pointer-events-none">
              <div className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
              <div className="flex flex-col text-left">
                <span className="text-[10px] text-slate-400 uppercase font-mono">Status</span>
                <span className="text-xs font-bold text-cyan-300">Live & Building</span>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Live Metrics Showcase Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-10">
          {statMetrics.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
              className="glass-card p-4 sm:p-5 rounded-2xl border border-white/5 flex flex-col justify-between group"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-mono uppercase text-slate-400 tracking-wider">
                  {stat.label}
                </span>
                <div className="p-1.5 rounded-lg bg-dark-900 border border-white/5 group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
              </div>
              <p className="text-2xl sm:text-3xl font-black text-white group-hover:text-cyan-300 transition-colors">
                {stat.value}
              </p>
              <p className="text-xs text-slate-500 font-mono mt-1">
                {stat.sub}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Scroll Down Indicator */}
        <div className="flex justify-center">
          <button
            onClick={() => scrollTo('about')}
            className="flex flex-col items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors group cursor-pointer"
            aria-label="Scroll to about section"
          >
            <span className="text-xs font-mono tracking-widest uppercase opacity-70 group-hover:opacity-100">
              Scroll to explore
            </span>
            <div className="p-2 rounded-full border border-white/10 group-hover:border-cyan-400/50 group-hover:bg-cyan-500/10">
              <ArrowDown className="w-4 h-4 text-cyan-400" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};
