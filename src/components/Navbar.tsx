import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles, MessageSquare, Terminal } from 'lucide-react';
import { portfolioConfig } from '../data/portfolioData';

const navItems = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Social Media', href: '#socials' },
  { name: 'Discord Servers', href: '#discord' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-dark-950/85 backdrop-blur-2xl border-b border-white/10 shadow-2xl shadow-cyan-950/30'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo - No Company Reference */}
          <a
            href="#hero"
            onClick={(e) => scrollToSection(e, '#hero')}
            className="flex items-center gap-3 group cursor-pointer"
          >
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-400 via-purple-600 to-pink-500 p-[1.5px] transition-transform duration-300 group-hover:scale-105 group-hover:shadow-neon-blue">
              <div className="w-full h-full bg-dark-950 rounded-[10px] flex items-center justify-center">
                <span className="font-mono font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 text-sm tracking-wider">
                  777
                </span>
              </div>
              <div className="absolute -inset-0.5 bg-cyan-400/20 rounded-xl blur-sm -z-10 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-extrabold tracking-wider text-white group-hover:text-cyan-300 transition-colors flex items-center gap-1.5">
                {portfolioConfig.personal.name}
                <Sparkles className="w-3.5 h-3.5 text-cyan-400 opacity-80 animate-pulse" />
              </span>
              <span className="text-[10px] text-purple-400 font-mono tracking-widest uppercase flex items-center gap-1">
                <Terminal className="w-2.5 h-2.5 text-cyan-400" />
                ELITE DEVELOPER • PORTFOLIO
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-dark-900/70 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 shadow-inner">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className={`relative px-3.5 py-1.5 text-xs uppercase tracking-wider font-semibold rounded-full transition-all duration-200 ${
                    isActive
                      ? 'text-cyan-300'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavBackground"
                      className="absolute inset-0 bg-gradient-to-r from-cyan-500/25 to-purple-500/25 border border-cyan-400/40 rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Right Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={portfolioConfig.discordServers[0].inviteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group px-4 py-2 rounded-xl text-xs font-bold tracking-wide overflow-hidden transition-all duration-300 shadow-neon-blue/30"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500 opacity-80 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-[1px] bg-dark-950 rounded-[11px] group-hover:bg-dark-900 transition-colors" />
              <span className="relative z-10 flex items-center gap-2 text-cyan-300 group-hover:text-white">
                <MessageSquare className="w-3.5 h-3.5 text-cyan-400" />
                Join Discord
              </span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-dark-900/80 border border-white/10 text-slate-300 hover:text-white hover:border-cyan-500/50 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden border-b border-white/10 bg-dark-950/95 backdrop-blur-2xl overflow-hidden px-4 py-5 shadow-2xl"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                    className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors flex items-center justify-between ${
                      isActive
                        ? 'bg-gradient-to-r from-cyan-500/15 to-purple-500/15 text-cyan-300 border border-cyan-500/30'
                        : 'text-slate-300 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <span>{item.name}</span>
                    {isActive && <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-neon-blue" />}
                  </a>
                );
              })}
              <div className="pt-3 mt-2 border-t border-white/10">
                <a
                  href={portfolioConfig.discordServers[0].inviteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold text-sm shadow-neon-blue"
                >
                  <MessageSquare className="w-4 h-4" />
                  Join Discord Server
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
